import * as React from 'react';
import classNames from 'classnames';

interface Props {
    x: number,
    y: number,
    name: string
};

const MemoHook = (props: Props) => {
    const { x, y, name } = props; 
    const sumNum = React.useMemo(() => {
        console.log('recompute');
        return x + y;
    }, [x, y]);

    return (
        <div>sum: {x} + {y} = { sumNum }, name: {name}</div>
    );
};

export default () => {
    const [numbers, setNumbers] = React.useState([0, 0]);
    const [name, setName] = React.useState('');
    const reSetName = () => {
        setName(`name-${(Math.random() * 100).toFixed(0)}`);
    }

    const reSetNumbers = () => {
        setNumbers([Math.round(Math.random() * 100), Math.round(Math.random() * 100)]);
    }

    return (
        <div className={classNames('callback-hooks')}>
            <button onClick={reSetName}>父组件修改name</button>
            <button onClick={reSetNumbers}>父组件修改x, y</button>
            <div>
                <div className={classNames('title')}>子组件</div>
                <MemoHook name={name} x={numbers[0]} y={numbers[1]} />
            </div>
        </div>
    )
};