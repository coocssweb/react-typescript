import * as React from 'react';
const { useState, useEffect } = React;

const Modify = ({history}) => {
    const { state = { leave: false } } = history.location;
    const [appear, setAppear] = useState(true);
    const handleToDetailClick = () => {
        setAppear(false);
        history.push('/modify/detail');
    };
    const handleGoBackClick = () => {
        history.replace('/');
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
