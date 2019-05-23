import { combineReducers } from 'redux-immutablejs';
import { routerReducer } from 'react-router-redux';
import home from './home';
import hooks from './hooks';
import users from './users';

export default combineReducers({
    home,
    hooks,
    users,
    routing: routerReducer
});
