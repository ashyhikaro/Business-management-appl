import App from './components/App';
import {BrowserRouter as Router, HashRouter} from 'react-router-dom';

function Main() {
    return (
        <HashRouter>
            <App />
        </HashRouter>
    )
}

export default Main