import  * as React from 'react';
import className from 'classnames';

export default (props: any) => {
    const [number, setNumber] = React.useState(0);

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
        </div>
    );
};
