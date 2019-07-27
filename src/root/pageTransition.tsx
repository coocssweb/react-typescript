import * as React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default ({location, children, duration}) => {
    console.log(location.pathname);
    window.localStorage.setItem('page_to', location.pathname);
    return (
        <TransitionGroup>
            <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={duration}
            >
                {children}
            </CSSTransition>
        </TransitionGroup>
    )
}