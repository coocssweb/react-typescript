import * as React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

const parseQuery  = (url) => {
    const query = {};
    const splits = url.split(/\?|\#/);

    if (splits.length > 1) {
        splits[1].split('&').forEach((item) => {
            const values = item.split('=');
            query[values[0]] = values[1];
        });
    }
    
    return query;
}

export default ({location, children, duration}) => {
    const queries = parseQuery(location.search);
    const key = queries.transition_key ||  location.key;
    console.log(location);
    return (
        <TransitionGroup>
            <CSSTransition
            key={key}
            classNames="fade"
            timeout={duration}
            >
                {children}
            </CSSTransition>
        </TransitionGroup>
    )
};
