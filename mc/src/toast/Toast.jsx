/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prop-types */
/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-20 15:48:26
 * Copyright © Leedarson. All rights reserved.
 */

import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { globalTheme } from '../ThemeRegister';
import { StyledToastWrap, StyledToast, StyledToastIcon, StyledToastLoading, StyledToastMessage } from './Styled';
import { zoom, fade } from '../styledUtils';
import Loading from '../loading';
import Icon from '../icon';
import Animate from '../animate';
import { PROP_TYPES_LOADING, EMPTY_FUNCTION } from '../constants';

class Toast extends PureComponent {
  render() {
    const { children } = this.props;
    return <StyledToastWrap>{children}</StyledToastWrap>;
  }
}

Toast.defaultProps = {};

Toast.propTypes = {
  children: propTypes.node.isRequired,
};

Toast.prefixCls = 'LdsToast';
Toast.delayTimer = null;
Toast.defaultDuration = 2000;

/**
 * 单例模式
 * 创建Toast实例，同一时刻只能有一个实例
 * @param {*} mask
 * @param {*} callback
 */
Toast.instance = null;
const newInstance = (children, fn = EMPTY_FUNCTION) => {
  if (Toast.instance) {
    return;
  }

  const toastRoot = document.createElement('div');
  toastRoot.className = '';
  Toast.domContainer = toastRoot;
  document.body.appendChild(toastRoot);
  let called = false;
  const ref = () => {
    if (called) {
      return;
    }
    called = true;

    fn({
      destroy() {
        ReactDOM.unmountComponentAtNode(toastRoot);
        document.body.removeChild(toastRoot);
      },
    });
  };

  ReactDOM.render(
    <ThemeProvider theme={globalTheme}>
      <Toast ref={ref}>{children}</Toast>
    </ThemeProvider>,
    toastRoot,
  );
};

/**
 *  提示
 */
const notice = (content, { icon, fill, color, duration, onClose }) => {
  const toastContent = icon ? (
    <Animate key="toast" transitionName={fade} component="div" transitionAppear>
      <StyledToast fill={fill}>
        {PROP_TYPES_LOADING.includes(icon) ? (
          <StyledToastLoading>
            <Loading theme={globalTheme} type={icon} color={color} />
          </StyledToastLoading>
        ) : (
          <>
            <StyledToastIcon>
              <Icon type={icon} color={color} fontSize={100} />
            </StyledToastIcon>
            <StyledToastMessage>{content}</StyledToastMessage>
          </>
        )}
      </StyledToast>
    </Animate>
  ) : (
    <Animate key="toast" transitionName={zoom} component="div" transitionAppear>
      <StyledToast fill="rgba(0, 0, 0, .8)">
        <StyledToastMessage>{content}</StyledToastMessage>
      </StyledToast>
    </Animate>
  );

  newInstance(toastContent, toast => {
    Toast.instance = toast;
    if (duration > 0) {
      Toast.delayTimer = setTimeout(() => {
        Toast.destroy();
        onClose();
      }, duration);
    }
  });
};

// 信息提示
Toast.info = (content, duration = Toast.defaultDuration, delay, onClose = EMPTY_FUNCTION) => {
  if (delay) {
    Toast.delayTimer = setTimeout(() => {
      notice(null, { icon: null, duration, onClose });
    }, delay);
    return;
  }
  notice(content, { icon: null, duration, onClose });
};

// 成功提示
Toast.success = (duration = Toast.defaultDuration, delay, onClose = EMPTY_FUNCTION) => {
  if (delay) {
    Toast.delayTimer = setTimeout(() => {
      notice('SUCCESS', {
        icon: 'success',
        fill: 'rgba(0, 0, 0, .8)',
        duration: duration || Toast.defaultDuration,
        onClose: onClose || EMPTY_FUNCTION,
      });
    }, delay);
    return;
  }
  notice('SUCCESS', {
    icon: 'success',
    fill: 'rgba(0, 0, 0, .8)',
    duration: duration || Toast.defaultDuration,
    onClose: onClose || EMPTY_FUNCTION,
  });
};

// 失败提示
Toast.fail = (duration = Toast.defaultDuration, delay, onClose = EMPTY_FUNCTION) => {
  if (delay) {
    Toast.delayTimer = setTimeout(() => {
      notice('FAILURE', {
        icon: 'fail',
        fill: 'rgba(0, 0, 0, .8)',
        duration: duration || Toast.defaultDuration,
        onClose: onClose || EMPTY_FUNCTION,
      });
    }, delay);
    return;
  }
  notice('FAILURE', {
    icon: 'fail',
    fill: 'rgba(0, 0, 0, .8)',
    duration: duration || Toast.defaultDuration,
    onClose: onClose || EMPTY_FUNCTION,
  });
};

// 加载中
Toast.loading = (
  { type = 'spokes', fill = 'rgba(0, 0, 0, .8)', color = 'surface' },
  delay,
  onClose = EMPTY_FUNCTION,
) => {
  if (delay) {
    Toast.delayTimer = setTimeout(() => {
      notice(null, { icon: type, fill, color, onClose });
    }, delay);
    return;
  }

  notice(null, { icon: type, fill, color, onClose });
};

// 销毁Toast
Toast.destroy = () => {
  if (Toast.delayTimer) {
    clearTimeout(Toast.delayTimer);
  }

  if (Toast.instance && Toast.instance.destroy) {
    Toast.instance.destroy();
    Toast.instance = null;
  }
};

export default Toast;
