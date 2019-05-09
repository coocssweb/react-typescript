import * as actionTypes from '../constants/index';
import { Action } from '@constants/interface';
const initialState = {
   list: [
       { name: 'first', id: 1 }
   ]
};

export default (state = initialState, action: Action) => {
    const { result } = action;
    switch (action.type) {
        case actionTypes.PUSH_ONE_USER:
            return Object.assign({}, state, { list: [...state.list, action.result] });
        default:
            return state;
    }
};