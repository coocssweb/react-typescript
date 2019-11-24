const _paths = [];

export const push = (path) => {
    _paths.push(path);
}

export const pop = () => {
    _paths.pop();
}

export const getPaths = () => {
    return _paths;
}