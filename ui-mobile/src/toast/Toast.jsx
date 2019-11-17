/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-20 15:48:26
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import Notification from 'rmc-notification';
import { StyledToastWrap, StyledToastIcon, StyledToastMessage, StyledToastInfo, transitionName } from './Styled';
import Loading from '../loading';
import Icon from '../icon';

const Toast = () => {
  return null;
};

Toast.prefixCls = 'LdsToast';
Toast.delayTimer = null;
Toast.defaultDuration = 2.5;

/**
 * 单例模式
 * 创建Toast实例，同一时刻只能有一个实例
 * @param {*} mask
 * @param {*} callback
 */
Toast.instance = null;
const newInstance = (callback = () => {}) => {
  if (Toast.instance) {
    return;
  }
  Notification.newInstance(
    {
      prefixCls: Toast.prefixCls,
      transitionName,
      style: { left: 0, top: 0 },
    },
    callback,
  );
};

/**
 *  调用Notification组件，根据配置给出提示
 * @param {*} content
 * @param {*} icon
 * @param {*} duration
 * @param {*} onClose
 */
const notice = (content, icon, duration, onClose) => {
  newInstance(notification => {
    Toast.instance = notification;
    notification.notice({
      duration,
      content: icon ? (
        <StyledToastWrap>
          {icon === 'loading' ? (
            <Loading />
          ) : (
            <>
              <StyledToastIcon>
                <Icon type={icon} />
              </StyledToastIcon>
              <StyledToastMessage>{content}</StyledToastMessage>
            </>
          )}
        </StyledToastWrap>
      ) : (
        <StyledToastInfo>{content}</StyledToastInfo>
      ),
      closable: true,
      onClose() {
        // 销毁回调
        onClose();
        notification.destroy();
        Toast.instance = null;
      },
    });
  });
};

// 信息提示
Toast.info = (content, duration = Toast.defaultDuration, delay, onClose = () => {}) => {
  if (delay) {
    Toast.delayTimer = setTimeout(() => {
      notice(content, null, duration, onClose);
    }, delay);
    return;
  }
  notice(content, null, duration, onClose);
};

// 成功提示
Toast.success = (content, duration = Toast.defaultDuration, delay, onClose = () => {}) => {
  if (delay) {
    Toast.delayTimer = setTimeout(() => {
      notice(content, 'success-no-circle', duration, onClose);
    }, delay);
    return;
  }
  notice(content, 'success-no-circle', duration, onClose);
};

// 失败提示
Toast.fail = (content, duration = Toast.defaultDuration, delay, onClose = () => {}) => {
  if (delay) {
    Toast.delayTimer = setTimeout(() => {
      notice(content, 'warn', duration, onClose);
    }, delay);
    return;
  }
  notice(content, 'warn', duration, onClose);
};

// 加载中
Toast.loading = (content, duration = Toast.defaultDuration, delay, onClose = () => {}) => {
  if (delay) {
    Toast.delayTimer = setTimeout(() => {
      notice(content, 'loading', duration, onClose);
    }, delay * 100);
    return;
  }

  notice(content, 'loading', duration, onClose);
};

// 加载中
Toast.spin = (content, options) => {
  notice(content, 'spin', options);
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

window.$Toast = Toast;
export default Toast;
