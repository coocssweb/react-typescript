export default ({ getState, dispatch }) => {
    return (next: Function) => {
        return (action: object) => {
            const { result, error, callback, ...reset } = action;
            next({ result, ...reset });
            callback && callback(result || error);
        };
    };
};
