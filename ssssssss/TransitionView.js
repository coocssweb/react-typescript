/*
 * @Author: linbin@leedarson.com
 * @Date: 2019-08-06 19:16:30
 * Copyright © Leedarson. All rights reserved.
 */

import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useQuery } from '@leedarson/hook';

const Loading = <></>; // TODO: LOGO

const TransitionView = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const { transition_key: transitionKey } = useQuery();

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
  const { pathname } = location;
  let effect = 'slide'; // 滑动
  let timeout = 300; // 动画时间
  if (['/', '/scene', '/automation', '/group', '/security', '/favourite'].includes(pathname)) {
    effect = 'fade'; // 渐变
    timeout = 0; // 不需要动画
  }

  // 3. 渲染
  return (
    <TransitionGroup className={mode}>
      <CSSTransition key={transitionKey || location.key} classNames={effect} timeout={timeout}>
        <div className="page">
          <Suspense fallback={Loading}>{children}</Suspense>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

TransitionView.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TransitionView;

/*
1. TransitionGroup 会渲染自己，dom结构如下
(1) 进场时
<div class="appear">...</div>
(2) 退场时
<div class="leave">...</div>
*/

/*
2. CSSTransition 不会渲染自已，会把儿子节点<div className="page">...</div>变成两个儿子节点
(1) 有动画时
<div class="page slide-enter slide-enter-active">...</div>
<div class="page slide-exit slide-exit-active">...</div> 
(2) 无动画时
<div class="page slide-enter-done">...</div>       
*/
