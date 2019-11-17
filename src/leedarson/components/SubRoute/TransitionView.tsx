import * as React from 'react';
import * as PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
const { Suspense, useState, useEffect, useRef } = React;

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

let _lastPathName;

const TransitionView = ({ history, path, location, children }) => {
  let timeout = 300; // 动画时间


  const queries = parseQuery(location.search);

  const [transitionKey, setTransitionKey] = useState('');
  const transitionKeyRef = useRef(location.key);
  transitionKeyRef.current = location.key;
  

  const transitionEntered = () => {
        _lastPathName = location.pathname;
      if (queries.transition_key) {
        setTransitionKey(transitionKeyRef.current)
      }
  }


  let finalKey = transitionKey || location.key;


  // 3. 渲染
  return (
    <TransitionGroup className="subPage-transition">
      <CSSTransition key={finalKey} classNames="goodInOut" timeout={timeout} onEntered={transitionEntered}>
          {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

TransitionView.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withRouter(TransitionView);