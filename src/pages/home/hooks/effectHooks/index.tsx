import  * as React from 'react';
import className from 'classnames';

// custom hooks
const useStatus = (userId: number) => {
    const [status, setStatus] = React.useState(true);
    React.useEffect(() => {
        function handleStatusChange (status: boolean) {
            setStatus(status);
        }
        console.log('mount');

        // when userId change, run, do something like unsubscribe
        return () => {
            console.log('child unmount');
        };
    }, [userId])
};

export default (props: any) => {
    const [number, setNumber] = React.useState(0);
    const [name, setName] = React.useState('name - 0');

    const isOnline = useStatus(number);

    React.useEffect(() => {
        // run, only when number changed
        document.title = `clicked ${number} times`;
        // if remove number, this effect will run every render.
    }, [number]);

    React.useEffect(() => {
        // run, only when name changed
        console.log(name);
        console.log('component mount');
        // run, only when component unmount or name changed
        // you can do somethings what need to clear when this component unmout
        return () => {
            console.log('component unmout');
        };
    }, [name]);

    const rename = () => {
        setName(`name-${(Math.random() * 100).toFixed(0)}`);
    }

    return (
        <div className={className('section')}>
            <div className={className('section-title')}>useState 演示</div>
                <div className={className('section-content')}>
                    <button onClick={ () => setNumber(number - 1) }>
                        Decrease
                    </button>
                        {number}
                    <button onClick={ () => setNumber(number + 1) }>
                        Increase
                    </button>
                </div>
                <button onClick={rename}>Rename</button>
        </div>
    );
};
