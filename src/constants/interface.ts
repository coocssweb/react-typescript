export interface RequestOptions {
    path: string,
    data: object,
    method?: string,
    requireLogin?: boolean,
    needDelay?: boolean,
    [propName: string]: any
};

export interface Action {
    type?: string,
    types?: Array<string>,
    promise?: any,
    result?: any,
    error?: any,
    callback?: Function,
    [propName: string]: any
}