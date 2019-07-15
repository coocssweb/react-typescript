import '@scss/index.scss';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Root from './root/route';
import { GlobalContext, dispath } from './reducer';
import {detailInitialState, detailReducer} from './pages/setting/modify/detail/reducer';

const GlobalProvider = ({children}) => {
    const [detail, detailDispatch] = React.useReducer(detailReducer, detailInitialState);

    const store = {
        currentState: {
            detail
        },
        detailDispatch,
        dispath: dispath([detailDispatch])
    };

    return (
        <GlobalContext.Provider value={store}>
            { children }
        </GlobalContext.Provider>
    );
};


ReactDOM.render(
    <GlobalProvider>
        <Router>
            <Root />
        </Router>
    </GlobalProvider>,
    document.getElementById('app')
);