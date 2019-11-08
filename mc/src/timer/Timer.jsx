/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-09-18 14:28:28
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useInterval } from '@leedarson/hook';
import { EMPTY_FUNCTION } from '../constants';

// 时间格式化
const formatTimer = (time, format) => {
  let finalTime = format;
  const hour = parseInt(time / 3600, 10);
  const minute = parseInt((time - hour * 3600) / 60, 10);
  const second = time - hour * 3600 - minute * 60;

  const object = {
    'h+': hour,
    'm+': minute,
    's+': second,
  };

  if (format === '') {
    finalTime = 'hh:mm:ss';
    return Object.keys(object).map(key => {
      if (new RegExp(`(${key})`).test(finalTime)) {
        return RegExp.$1.length === 1 ? object[key] : `00${object[key]}`.substr(`${object[key]}`.length);
      }
      return '';
    });
  }

  Object.keys(object).forEach(key => {
    if (new RegExp(`(${key})`).test(finalTime)) {
      finalTime = finalTime.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? object[key] : `00${object[key]}`.substr(`${object[key]}`.length),
      );
    }
  });

  return finalTime;
};

// TODO，支持Millisecond 毫秒
const Timer = React.memo(({ type, countdown, format, stop, render, onEnd }) => {
  const [remain, setRemain] = useState(type === 'countdown' ? countdown : 0);

  // 倒计时
  useInterval(
    () => {
      if (type === 'countdown') {
        if (remain <= 0) {
          return;
        }
        // 递减
        setRemain(time => time - 1);

        if (remain <= 1) {
          onEnd();
        }
      } else {
        if (remain >= countdown) {
          return;
        }
        // 递增
        setRemain(time => time + 1);
        if (remain >= countdown) {
          onEnd();
        }
      }
    },
    !stop ? 1000 : null,
  );

  return <>{render(formatTimer(remain, format))}</>;
});

Timer.defaultProps = {
  type: `countdown`,
  format: 'hh:mm:ss',
  countdown: 0,
  stop: false,
  render: EMPTY_FUNCTION,
  onEnd: EMPTY_FUNCTION,
};

Timer.propTypes = {
  type: PropTypes.oneOf(['countdown', 'timer']),
  format: PropTypes.string,
  countdown: PropTypes.number,
  stop: PropTypes.bool,
  render: PropTypes.func,
  onEnd: PropTypes.func,
};

export default Timer;
