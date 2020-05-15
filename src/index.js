import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
// Bring in our newly created AppProvider and then Wrap our App with it.
import { AppProvider } from './context/context';

ReactDOM.render(
    <React.StrictMode>
        <ScopedCssBaseline>
            <AppProvider>
                <App />
            </AppProvider>
        </ScopedCssBaseline>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
