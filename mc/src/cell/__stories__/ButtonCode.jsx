/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.a`
  display: block;
  height: 56px;
  margin-left: 5px;
  padding: 0 0 0 0.7em;
  line-height: 56px;
  vertical-align: middle;
  font-size: 17px;
  color: #576b95;
  position: relative;
  &:before {
    content: ' ';
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    bottom: 0;
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0, 0.1);
    transform-origin: 0 0;
    transform: scaleX(0.5);
  }
`;

const ButtonCode = () => {
  return <StyleButton>获取验证码</StyleButton>;
};

export default ButtonCode;
