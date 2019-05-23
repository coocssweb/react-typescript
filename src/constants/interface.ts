// 请求信息
export interface RequestOptions {
    path: string,
    data?: object,
    method?: string,
    requireLogin?: boolean,
    needDelay?: boolean,
    [propName: string]: any
};

// redux action接口
export interface Action {
    type?: string,
    types?: Array<string>,
    promise?: any,
    result?: any,
    error?: any,
    callback?: Function,
    [propName: string]: any
};

// 登录信息
export interface LoginInfo {
    username: string,
    password: string
};

// 用户信息
export interface UserInfo {
    username: string,
    nickname: string,
    avatar: string,
    remark: string
};
