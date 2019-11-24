import * as React from 'react';
import * as PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
const { Suspense, useState, useEffect, useRef, useMemo } = React;
import {getPaths, push} from './paths';

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

const useKey = (pathname, exited) => {
    const pathnameRef = useRef(pathname);
    const entered = getPaths().includes(pathname);

    if (exited) {
        pathnameRef.current = `${pathname}-exited`
    } else if (entered) {
        pathnameRef.current = `${pathname}-entered`
    } 
   
    return pathnameRef.current;
}

const TransitionView = ({ history, path, location, children }) => {
  const [entered, setEntered] = useState(false);
  
  const key = useKey(path, false);

  const transitionEntered = () => {
    setEntered(true);
  }

//   useEffect(() => {
//     push(path);
//     return () => {
//         console.log('sssssss');
//     }
//   }, []);

//   let finalKey = transitionKey || location.key;
//   if (path === window.lastPath && history.action === 'POP') {
//     finalKey = `${finalKey}-POP`; 
//   }

console.log(key);

  // 3. 渲染
  return (
    <TransitionGroup className="subPage-transition">
      <CSSTransition key={key} classNames="goodInOut" timeout={300} onEntered={transitionEntered}>
          {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

TransitionView.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withRouter(TransitionView);