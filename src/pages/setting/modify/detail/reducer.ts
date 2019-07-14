import { Action } from '@constants/interface';
export const SET_DETAIL = 'SET_DETAIL';

export const detailInitialState = {

};

export const detailReducer = (state = detailInitialState, action: Action) => {
    switch (action.type) {
        case SET_DETAIL:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};