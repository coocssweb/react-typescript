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
    request (options: RequestOptions) {
        options = { ...Base.defaultOptions, options };
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        const fetchInit: RequestInit = {
            method: options.method,
            headers,
            mode: 'cors'
        };
        const requestUrl = `${process.env.API}${options.path}`;
        const startReqeustTimestamp = Date.now();

        return new Promise((resolve, reject) => {
            fetch(requestUrl, fetchInit).then((response) => {
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