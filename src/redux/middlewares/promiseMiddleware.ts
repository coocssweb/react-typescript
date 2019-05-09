import { Action } from '@constants/interface';
export default ({ dispatch, getState }) => {
    return (next: Function) => (action: Action) => {
        const { promise, types, callback, ...rest } = action;

        if (!promise) {
            return next(action);
        }

        const [REQUEST, SUCCESS, FAILURE] = types;

        next({ ...rest, type: REQUEST });

        return promise().then(
            (result: any) => {
                next({ ...rest, callback, result, type: SUCCESS });
            },
            (error: any) => {
                next({ ...rest, callback, error, type: FAILURE });
            }
        );
    };
};
