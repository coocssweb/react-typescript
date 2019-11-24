import * as React from 'react';
import * as PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
const { Suspense, useRef, useEffect } = React;

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


const TransitionView = ({ history, location, children }) => {
  // 1. 交互模式
  const { action } = history;
  let mode = '';
  switch (action) {
    case 'PUSH':
    case 'REPLACE':
      mode = 'appear'; // 进场
      break;
    case 'POP':
      mode = 'leave'; // 出场
      break;
    default:
      throw new Error('history action overflow:', action);
  }

  // 2. 动画效果
  const { pathname, state } = location;
  const {effect: propsEffect } = state || {};
  let effect = 'slide'; // 滑动
  let timeout = 300; // 动画时间

  const prevEffectRef = useRef('');

  if (propsEffect === 'fade' && prevEffectRef.current !== 'slide') {
    effect = 'fade';
  }

  const transitionEntered = () => {
    prevEffectRef.current = propsEffect || 'slide';
  }

  const queries = parseQuery(location.search);
  const transitionKey = queries.transition_key ||  location.key;
  // 3. 渲染
  return (
    <TransitionGroup className={`${mode} ${effect}`}>
      <CSSTransition key={transitionKey} classNames="" timeout={timeout} onEntered={transitionEntered}>
        <div className="page">
          {children}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

TransitionView.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withRouter(TransitionView);