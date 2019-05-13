import * as actionTypes from '../constants/index';
import { Action } from '@constants/interface';
export const initialState = {
   name: '科怀·伦纳德'
};

export default (state = initialState, action: Action) => {
    const { result } = action;
    switch (action.type) {
        case actionTypes.CHANGE_HOOKS_NAME:
            return Object.assign({}, state, { name: action.result });
        default:
            return state;
    }
};