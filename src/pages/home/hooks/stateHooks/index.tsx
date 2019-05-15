import  * as React from 'react';
import className from 'classnames';

interface Props {
    query: object
};

function LatestCountExample(props: {}) {
    const [count, setCount] = React.useState(2);
    const latestCount = React.useRef(count);
    latestCount.current =  count;
  
    function handleAlertClick() {
        setTimeout(() => {
            // lastestCount captures the lastest time setCount 
            alert('You clicked on: ' + latestCount.current);
        }, 3000);
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
            Click me
            </button>
            <button onClick={handleAlertClick}>
            Show alert
            </button>
        </div>
    );
}

function FunctionalUpdateExample (props: {}) {
    const [count, setCount] = React.useState(0);

    function handleAlertClick() {
        setTimeout(() => {
            // different with parent components
            alert('You clicked on: ' + count);
        }, 3000);
    }

    // <button onClick={() => setCount(count + 1)}></button>
    // <button onClick={() => setCount(prevCount => prevCount + 1)}>
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>
            Click me
            </button>
            <button onClick={handleAlertClick}>
            Show alert
            </button>
        </div>
    );
}

function LazyInitialExample (props: {}) {
    const [count, setCount] = React.useState(() => {
        // only run just the first time
        console.log('computed initail');
        return 10;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
            Click me
            </button>
        </div>
    );
}

export default (props: Props) => {
    const [count, setCount] = React.useState(0);

    function handleAlertClick() {
        setTimeout(() => {
            // count always captures the value every render
            // count is constant within a particular component render
            alert('You clicked on: ' + count);
        }, 3000);
    }
  
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
            Click me
            </button>
            <button onClick={handleAlertClick}>
            Show alert
            </button>

            <div>
                latest count example:
                <LatestCountExample />
            </div>
            <div>
            functional update example:
                <FunctionalUpdateExample />
            </div>
            <div>
                lazy initail example
                <LazyInitialExample />
            </div>
        </div>
    );
};
