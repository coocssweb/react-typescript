import '@scss/pages/home.scss';
import  * as React from 'react';
import className from 'classnames';

interface Props {
    list: Array<any>
};

interface State {

};

const Index = (props: Props) => {
    const [number, setNumber] = React.useState(0)
    return (
        <div className={className('home')}>
            <h1 className={'homeTitle'}>首页</h1>
            <div className={className('homeSection')}>
                <div className={className('homeSection-title')}>Hooks 演示</div>
                <div className={className('homeSection-content')}>
                    <button onClick={ () => setNumber(number + 1) }>
                        increase
                    </button>
                        {number}
                    <button onClick={ () => setNumber(number - 1) }>
                        decrease
                    </button>
                </div>
            </div>

            <div className={className('homeSection')}>
                <div className={className('homeSection-title')}>Redux数据 演示</div>
                <div className={className('homeSection-content')}>
                {
                    props.list.map(
                        item => <div key={item.id}>{item.name}</div>
                    )
                }
                </div>
            </div>
        </div>
    );
};

export default Index;
