import { useState, useRef, useCallback } from 'react';

const useUpdate = ():[Function] => {
    const [, setCount] = useState(0);
    const update = () => {
        setCount((prev) => prev + 1);
    };

    return [update];
};

export default <T extends Object>(initialValue: T = {} as T): [() => T, (value: T) => void] => {
    const ref = useRef(initialValue);
    const [update] = useUpdate();
    const get = useCallback(() => {
        return ref.current;
    }, []);
    const set = useCallback((newValue: T) => {
        ref.current = newValue;
        update();
    }, []);

    return [get, set];
};
