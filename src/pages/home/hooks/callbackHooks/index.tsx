import * as React from 'react';
import classNames from 'classnames';

interface Props {
    name: string,
    age: number
};

const CallbackHook = (props: Props) => {
    const { name, age } = props;
    console.log(name, age);

    const memoizedCallback = React.useCallback(() => {
        // only recompute when age is changed.
        console.log('recompute callback', name);
    }, [age]);

    return <button onClick={memoizedCallback}>点击子组件</button>;
};

export default (props: any) => {
    const [name, setName] = React.useState('科怀·伦纳德');
    const [age, setAge] = React.useState(20);
    const reSetName = () => {
        setName(`name-${(Math.random() * 100).toFixed(0)}`);
    }

    const reSetAge = () => {
        setAge(Math.random() * 100);
    }

    return (
        <div className={classNames('callback-hooks')}>
            <button onClick={reSetName}>父组件修改name</button>
            <button onClick={reSetAge}>父组件修改age</button>
            <div>
                <div className={classNames('title')}>子组件</div>
                <CallbackHook name={name} age={age} />
            </div>
        </div>
    )
}
