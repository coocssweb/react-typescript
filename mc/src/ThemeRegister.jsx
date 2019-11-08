/* eslint-disable */
/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-09-20 14:04:51
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

// 主题注册，为了获取到主题
let globalTheme = {};

const ThemeRegister = () => {
  globalTheme = useContext(ThemeContext);
  return null;
};

export default ThemeRegister;

export { globalTheme };
