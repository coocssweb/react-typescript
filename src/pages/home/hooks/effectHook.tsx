import  * as React from 'react';
import className from 'classnames';

export default (props: any) => {
    const [number, setNumber] = React.useState(0);
    const [name, setName] = React.useState('name - 0');

    React.useEffect(() => {
        // run, only when number changed
        document.title = `clicked ${number} times`;
        // if remove number, this effect will run every render.
    }, [number]);

    React.useEffect(() => {
        // run, only when name changed
        console.log(name);

        // run, only when component unmount
        // you can do somethings what need to clear when this component unmout
        return () => {
            console.log('unmout');
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
