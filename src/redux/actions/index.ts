import * as actionTypes from '../constants/index';
import { EMPTY_FUNCTION } from '@constants/index';
import api from '@api/index';

export const fetchRecommendIdeas = (callback = EMPTY_FUNCTION) => {
    return {
        types: [actionTypes.HOME_LIST_ERROR, actionTypes.HOME_LIST_SUCCESS, actionTypes.HOME_LIST_ERROR],
        promise: () => {
            return api.fetch();
        },
        callback
    };
};