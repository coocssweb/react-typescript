import  * as React from 'react';
import { useState, useCallback } from 'react';
import useSetState from '@components/hooks/useSetState';
import useGetState from '@components/hooks/useGetState';

const useCount = () => {
    const [count, setCount] = useState(0);
    console.log(count);
    const set = () => {
        setCount(count + 1);
    };

    return [set];
}

export default () => {
    const [count, setCount] = useState(0);
    const [user, setUser] = useSetState({name: 'wjx'});
    const [getOtherCount, setOtherCount] = useGetState(0);
    const otherCount = getOtherCount();
    
    const [set] = useCount();

    // difference
    const setInCallback = useCallback(
      () => {
        set();
      },
      [],
    );

    function handleShowCountClick() {
        setTimeout(() => {
            // count always captures the value every render
            // count is constant within a particular component render
            alert('You clicked on: ' + count);
        }, 3000);
    }

    function handleShowOtherCountClick() {
        setTimeout(() => {
            alert('You clicked on: ' + getOtherCount());
        }, 3000);
    }
  
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <button onClick={handleShowCountClick}>
                Show alert
            </button>
            <button onClick={() => { set(); }}>set</button>
            <button onClick={() => { setInCallback(); }}>setInCallback</button>
            <div>
                <div>useGetState:</div>
                <p>You clicked {otherCount} times</p>
                <button onClick={() => setOtherCount(otherCount + 1)}>
                    Click me
                </button>
                <button onClick={handleShowOtherCountClick}>
                    Show alert
                </button>
            </div>
            <div>
            <div>useSetState:</div>
            { 
                Object.keys(user).map(key => {
                    return (<p key={key}>{key}: {user[key]}</p>)
                })
            }
                <div>
                    <button onClick={() => {setUser({age: 19})}}>age: 19</button>
                    <button onClick={() => {setUser({sexy: 'male'})}}>sexy: male</button>
                </div>
            </div>
        </div>
    );
};
