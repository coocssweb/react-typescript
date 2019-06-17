import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from '../middlewares/promiseMiddleware';
import callbackMiddleware from '../middlewares/callbackMiddleware';
import rootReducer from '../reducers/index';

const composeEnhancers = composeWithDevTools({});
export default (data: any) => {

    const finalCreateStore = process.env.NODE_ENV === 'development' ?
     composeEnhancers(applyMiddleware(promiseMiddleware, callbackMiddleware))(createStore) 
     : applyMiddleware(promiseMiddleware, callbackMiddleware)(createStore);
    return finalCreateStore(
        rootReducer, 
        data
    );
};
