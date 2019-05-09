import '@scss/base/common.scss';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Provider } from 'react-redux';
import createStore from './redux/store/createStore';
import Root from './root/route';
const store = createStore({});

ReactDOM.render(
    <Provider store={ store } >
        <Root />
    </Provider>,
    document.getElementById('app')
);