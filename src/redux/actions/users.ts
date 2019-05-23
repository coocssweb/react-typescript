import * as usersActionTypes from '../constants/users';
import { LoginInfo, UserInfo } from '@constants/interface';
import { EMPTY_FUNCTION } from '@constants/const';
import usersApi from '@api/users';

export const info = () => {
    return {
        types: [usersActionTypes.FETCH_USERINFO_REQUEST, usersActionTypes.FETCH_USERINFO_SUCCESS, usersActionTypes.FETCH_USERINFO_ERROR],
        promise: () => {
            return usersApi.info();
        }
    };
};

export const edit = (userInfo: UserInfo, callback: Function = EMPTY_FUNCTION) => {
    return {
        types: [usersActionTypes.EDIT_USERINFO_REQUEST, usersActionTypes.EDIT_USERINFO_SUCCESS, usersActionTypes.EDIT_USERINFO_ERROR],
        promise: () => {
            return usersApi.edit(userInfo);
        },
        callback
    };
};

export const updatePassword = (password: string, checkPassword: string, callback: Function = EMPTY_FUNCTION) => {
    return {
        types: [usersActionTypes.UPDATE_PASSWORD_REQUEST, usersActionTypes.UPDATE_PASSWORD_SUCCESS, usersActionTypes.UPDATE_PASSWORD_ERROR],
        promise: () => {
            return usersApi.updatePassword(password, checkPassword);
        },
        callback
    };
};

export const login = (loginInfo: LoginInfo, callback: Function = EMPTY_FUNCTION) => {
    return {
        types: [usersActionTypes.LOGIN_REQUEST, usersActionTypes.LOGIN_SUCCESS, usersActionTypes.LOGIN_ERROR],
        promise: () => {
            return usersApi.login(loginInfo);
        },
        callback
    };
};

export const logout = (callback: Function = EMPTY_FUNCTION) => {
    return {
        types: [usersActionTypes.LOGOUT_REQUEST, usersActionTypes.LOGOUT_SUCCESS, usersActionTypes.LOGOUT_ERROR],
        promise: () => {
            return usersApi.logout();
        },
        callback
    };
};
