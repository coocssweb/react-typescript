import * as React from 'react';
const { useState, useEffect } = React;

const Modify = (props) => {
    const [appear, setAppear] = useState(true);
    const { history } = props;
    const { state = { leave: false } } = history.location;
    const handleToDetailClick = () => {
        setAppear(false);
        history.push('/modify/detail');
    };
    const handleGoBackClick = () => {
        history.push(props.backTo);
    }

    return (
        <div className={ `page ${ appear && !state.leave ? 'page-appear' : 'page-leave' } page-modify transition-item` }>
            <button onClick={handleGoBackClick}>back</button>
            <div>
                Detail Page
            </div>
            <button onClick={handleToDetailClick}>To Detail</button>
        </div>
    );
}

export default Modify;

// page page-leave page-setting transition-item fade-exit fade-exit-active
