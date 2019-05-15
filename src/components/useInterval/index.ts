import * as React from 'react';
import { EMPTY_FUNCTION } from '@constants/const'
const {useRef, useEffect} = React;

function useInterval(callback: Function = EMPTY_FUNCTION, delay: number) {
    let savedCallback: { current: Function } = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}