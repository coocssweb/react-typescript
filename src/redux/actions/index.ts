import { Action } from '@constants/interface';
import { EMPTY_FUNCTION } from '../../constants/const';
import * as actionTypes from '../constants/index';
import api from '@api/index';

export const pushOneUser = (user, callback = EMPTY_FUNCTION) : Action => {
    return {
        type: actionTypes.PUSH_ONE_USER,
        result: user,
        callback
    };
};