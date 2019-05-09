import * as actionTypes from '../constants/index';
import { Action } from '@constants/interface';
const initialState = {
   list: [
       { name: 'test', id: 1 }
   ]
};

export default (state = initialState, action: Action) => {
    const { result } = action;
    switch (action.type) {
        case actionTypes.HOME_LIST_SUCCESS:
            return Object.assign({}, state);
        default:
            return state;
    }
};