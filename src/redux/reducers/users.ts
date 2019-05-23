import * as userActionTypes from '../constants/users';
import * as Immutable from 'immutable';

const initialState = Immutable.fromJS({
    info: null,
    loading: false
});

export default (state = initialState, action) => {
    let response = action && action.result ? action.result.response : null;

    switch (action.type) {
        case userActionTypes.FETCH_USERINFO_REQUEST:
            return state.set('loading', true);
        
        case userActionTypes.FETCH_USERINFO_SUCCESS:
            return state.set('info', response).set('loading', false);
        
        case userActionTypes.FETCH_USERINFO_ERROR:
            return state.set('info', null).set('loading', false);
    
        case userActionTypes.LOGIN_SUCCESS:
            localStorage.setItem('access_token', response.access_token);
            return state;
        
        case userActionTypes.LOGOUT_SUCCESS:
            localStorage.removeItem('access_token');
            return state.set('info', null);
        
        case userActionTypes.EDIT_USERINFO_SUCCESS:
            return state;

        default:
            return state;
    }
};
