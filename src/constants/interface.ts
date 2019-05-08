export enum RequestMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
};

export interface RequestOptions {
    path: string,
    data: object,
    method?: RequestMethods,
    requireLogin?: boolean,
    needDelay?: boolean,
    [propName: string]: any
};