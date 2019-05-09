import * as actionTypes from '../constants/index';

const initialState = {
    list: [],
    server: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
