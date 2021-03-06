import { RequestOptions } from '@constants/interface';
import 'whatwg-fetch';

class Base {
    static readonly defaultOptions = {
        path: '',
        data: {},
        method: 'GET',
        requireLogin: false,
        needDelay: false
    }
    
    private requestUrl: string;

    constructor (model: string) {
        this.requestUrl = `${process.env.API}${model}`;
    }

    protected request (options: RequestOptions) {
        options = { ...Base.defaultOptions, ...options };
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        const fetchInit: RequestInit = {
            method: options.method,
            headers,
            mode: 'cors'
        };
        this.requestUrl = `${this.requestUrl}${options.path}`
        const startReqeustTimestamp = Date.now();

        return new Promise<{ meta: any, response: any }>((resolve, reject) => {
            fetch(this.requestUrl, fetchInit).then((response) => {
                const timediff = Date.now() - startReqeustTimestamp;
                if (options.needDelay && timediff < 300) {
                    setTimeout(() => {
                        resolve(response.json());
                    }, 300 - timediff);
                } else {
                    return resolve(response.json());
                }
            }).catch((error) => {
                reject(error);
            });
        });
    }
}

export default Base;