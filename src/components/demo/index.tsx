import * as React from 'react';

export default (props: any) => {
    return (
        <button onClick={props.onClick}>{props.children}</button>
    );
};
