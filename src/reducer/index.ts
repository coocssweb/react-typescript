import * as React from 'react';
import { Action } from '../constants/interface';

const globalState = {};
export const GlobalContext = React.createContext(globalState);
export const dispath = (dispatchs: Array<Function>) => (action: Action) => {
    console.log(action);
    const finalDispatchs = dispatchs.reduce((result, dispath) => {
        if (typeof dispath === 'function') {
            result.push(dispath);
        }
        return result;
    }, []);

    finalDispatchs.forEach((dispath) => {
        // globalState = dispath(action);
    });
};
