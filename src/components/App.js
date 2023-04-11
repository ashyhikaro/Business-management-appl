import { Routes, Route, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState, lazy, Suspense, startTransition } from 'react';
import { getAuth } from "firebase/auth";

import { db } from '../index';

const RegistrationPage = lazy(() => import('./autho-reg/registrationPage'))
const Header = lazy(() => import('./user-components/header'))
const HomePage = lazy(() => import('./user-components/homePage'))
const AuthorizationPage = lazy(() => import('./autho-reg/authorizationPage'))
const UserSettingForm = lazy(() => import('./user-components/forms/userSettingsForm'))
const UserProfilePage = lazy(() => import('./user-components/userProfilePage'))
const FinancePage = lazy(() => import('./user-components/financePage'))
const CashFlowPage = lazy(() => import('./user-components/cashFlowPage'))
const LoanPage = lazy(() => import('./user-components/loanPage'))
const ReportsPage = lazy(() => import('./user-components/reportsPage'))
const ResetPasswordPage = lazy(() => import('./autho-reg/resetPasswordPage'))

function AppLogin() {
  const navigate = useNavigate()

  let auth = getAuth()
  let user = auth.currentUser

  const [updateInfo, setUpdateInfo] = useState(false)
  const [regMoment, setRegMoment] = useState(false)

  const [customError, setCustomError] = useState()
  const [userData, setUserData] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null)

  const [amountOfIncome, setAmountOfIncome] = useState(0)
  const [amountOfExpenses, setAmountOfExpenses] = useState(0)
  
  const handleLogout = () => {
    localStorage.clear()
    signOut(auth)
    setUserData(null)
  }
  
  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    provider.addScope('email')

    try {
      await signInWithPopup(auth, provider)
    } catch(error) {
      console.log(error)
    }
  }

  async function authorAccount(user_data) {
    try {
      await signInWithEmailAndPassword(auth, user_data.email, user_data.password)
    } catch(error)  {
      console.log(error.message)
      setCustomError(error.message)
    }
  }

  async function createAccount(user_data) {
    startTransition(() => {setRegMoment(true)})
    localStorage.setItem('user', JSON.stringify({...user_data}))

    try {
      await createUserWithEmailAndPassword(auth, user_data.email, user_data.password)
    } catch(error) {
      localStorage.removeItem('user')
      console.log(error.message)
      setCustomError(error.message)
    }
  }
 
  function dataBaseUserUpdate() {
    if (userData) {
      let information

      if (user) {
        information = {...userData, id: user.uid}
      } else {
        information = userData
      }

      db.ref('users').update({
        [information.id] : { 
          'email': information.email,
          'firstname': information.firstname,
          'lastname': information.lastname,
          'age': information.age,
          'phone': information.phone,
          'country': information.country,
          'region': information.region,
        }
      })

      if (updateInfo === true) {
        setUpdateInfo(false)
        navigate('/user-profile')
      }

      if (regMoment === true) {
        setRegMoment(false)
        navigate('/')
      }

      localStorage.setItem('user', JSON.stringify(information))
    }
  }

  function dataBaseFinanceUpdate(id, financeType) {
    db.ref(financeType).on('value', elem => {
      if (!(id in elem.val())) {
        db.ref(financeType).update({
          [id] : {
            1: 'plug'
          }
        })
      }
    })
  }

  function setUserSettings(data) {
    if (!localStorage.getItem('user')) {
      startTransition(() => {setUserData({...data, email: user.email, id: user.uid})})
    } else {
      setUpdateInfo(true)
      setUserData(prev => {
        let obj = {}

        for (let key in data) {
          if (data[key] === '') {
            obj[key] = prev[key]
          } else {
            obj[key] = data[key]
          }
        }

        return {...obj, email: prev.email, id: prev.id}
      })
    }
  }
  
  useEffect(() => { dataBaseUserUpdate(); }, [userData])
  
  useEffect(() => {
    
    onAuthStateChanged(auth, (user) => {
      if(user) {
        setCustomError('')

        if (user.providerData[0].providerId === 'google.com') {
          if (!localStorage.getItem('user')) {
            db.ref('users').on('value', elem => {
              if (user.uid in elem.val()) {
                db.ref('users').child(user.uid).on('value', elem => {
                  setUserData({...elem.val(), id: user.uid})
                  navigate('/')
                })
              } else {
                navigate('/user-settings')
              }
            })
          }

          dataBaseFinanceUpdate(user.uid, 'income')
          dataBaseFinanceUpdate(user.uid, 'costs')
          dataBaseFinanceUpdate(user.uid, 'loans')

        } else {
          if (localStorage.getItem('user')) {
            console.log(1)
            setUserData({...JSON.parse(localStorage.getItem('user')), id: user.uid})
          } else {
            if (!localStorage.getItem('user')) {
              console.log(2)
              db.ref('users').child(user.uid).on('value', elem => {
                console.log(elem.val())
                setUserData({...elem.val(), id: user.uid})
                navigate('/')
              })
            }
          }

          dataBaseFinanceUpdate(user.uid, 'income')
          dataBaseFinanceUpdate(user.uid, 'costs')
          dataBaseFinanceUpdate(user.uid, 'loans')
        }
      }
    })
  }, [])
  
  return (
    <>
      {localStorage.getItem('user') || userData ? <Header handleLogout={handleLogout}/> : null}
      <Suspense fallback={<h1 className='loading_title'>Loading...</h1>}>
        <Routes>
            <>
              <Route path="/registration" element={
                <RegistrationPage  
                          createAccount={createAccount}
                          setUserData={setUserData}
                          customError={customError}
                          setCustomError={setCustomError}
                />}
              />

              <Route path="/resset-password" element={
                <ResetPasswordPage
                  auth={auth}
                />}
              />

              <Route path="/" element={
                userData ? 
                <HomePage 
                          userData={userData}
                          amountOfIncome={amountOfIncome}
                          amountOfExpenses={amountOfExpenses}
                /> :
                <AuthorizationPage  
                          authorAccount={authorAccount}
                          signInWithGoogle={signInWithGoogle}
                          customError={customError}
                          setCustomError={setCustomError}
                />}
              />

              <Route path="/user-settings" element={
                <UserSettingForm 
                          setUserSettings={setUserSettings} 
                          handleLogout={handleLogout}
                />}
              />

              <Route path="/user-profile" element={
                <UserProfilePage
                          handleLogout={handleLogout} 
                          userData={userData}
                          setUserSettings={setUserSettings}
                />} 
              />

              <Route path="/finances" element={
                <FinancePage
                  userData={userData}
                  amountOfIncome={amountOfIncome}
                  setAmountOfIncome={setAmountOfIncome}
                  amountOfExpenses={amountOfExpenses}
                  setAmountOfExpenses={setAmountOfExpenses}
                />} 
              />

              <Route path="/cash-flow" element={
                <CashFlowPage
                  userData={userData}
                />} 
              />
              
              <Route path="/loans" element={
                <LoanPage
                  userData={userData}
                />} 
              />

              <Route path="/reports" element={
                <ReportsPage
                  userData={userData}
                />} 
              />

            </>
        </Routes>
      </Suspense>
    </>
  );
}

export default AppLogin;