/* eslint-disable */
/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-09-20 14:37:24
 * Copyright © Leedarson. All rights reserved.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Pop from '../pop';
import { globalTheme } from '../ThemeRegister';

export default ({ title, content, confirm, cancel, onConfirm, onCancel, fill }) => {
  const popRoot = document.createElement('div');
  document.body.appendChild(popRoot);

  const close = () => {
    ReactDOM.unmountComponentAtNode(popRoot);
    if (popRoot && popRoot.parentNode) {
      popRoot.parentNode.removeChild(popRoot);
    }
  };

  ReactDOM.render(
    <ThemeProvider theme={globalTheme}>
      <Pop
        visible
        title={title}
        placement="bottom"
        confirm={confirm}
        cancel={cancel}
        onConfirm={onConfirm}
        onCancel={onCancel}
        fill={fill || 'surface'}
      >
        {content}
      </Pop>
    </ThemeProvider>,
    popRoot,
  );

  return {
    close,
  };
};
