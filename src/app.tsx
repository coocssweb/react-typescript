import '@scss/index.scss';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Provider } from 'react-redux';
import * as Immutable from 'immutable';
import createStore from './redux/store/createStore';
import Root from './root/route';
const store = createStore(Immutable.fromJS({}));

ReactDOM.render(
    <Provider store={ store } >
        <Root />
    </Provider>,
    document.getElementById('app')
);