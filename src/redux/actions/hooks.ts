import { Action } from '@constants/interface';
import { EMPTY_FUNCTION } from '@constants/const';
import * as actionTypes from '../constants/index';
import api from '@api/index';

export const changeName = (name: String, callback = EMPTY_FUNCTION) : Action => {
    return {
        type: actionTypes.CHANGE_HOOKS_NAME,
        result: name,
        callback
    };
};