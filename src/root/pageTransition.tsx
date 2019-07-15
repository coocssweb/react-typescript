import * as React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default ({location, children, duration}) => {
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