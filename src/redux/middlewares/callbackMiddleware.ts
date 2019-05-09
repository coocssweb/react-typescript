import { Action } from '@constants/interface';

export default ({ getState, dispatch }) => {
    return (next: Function) => {
        return (action: Action) => {
            const { result, error, callback, ...reset } = action;
            next({ result, ...reset });
            callback && callback(result || error);
        };
    };
};
