import * as React from 'react';
const { useState, useEffect } = React;

const Modify = (props) => {
    const { history } = props;

    return (
        <>
            <div>
                Detail Page
            </div>
            <button onClick={() => {history.push('/modify/detail')}}>To Detail</button>
        </>
    );
}

export default Modify;

// page page-leave page-setting transition-item fade-exit fade-exit-active
