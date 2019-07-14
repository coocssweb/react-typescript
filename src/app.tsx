import '@scss/index.scss';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Root from './root/route';
import { GlobalContext, globalState, dispath } from './reducer';
import useDetail from './pages/setting/modify/detail/useDetail';

const GlobalProvider = ({children}) => {
    const [detail, detailDispatch] = useDetail();
    
    const store = {
        currentState: {
            detail
        },
        detailDispatch,
        dispath
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