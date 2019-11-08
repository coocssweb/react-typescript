/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { Dropdown, Button, WingBlank, Tooltip } from '../../index';
import Styled from 'styled-components';
import { setBottomLine } from '../../styledUtils';

const StyledBNav = Styled.div``;

const StyledMenu = Styled.a`
  display: block;
  padding: 10px 25px;
  text-decoration: none;
  text-align: left;
  color: #fff;
  position: relative;
  user-select: none;
  &:active{
    background: rgba(0, 0, 0, .3);
  }
  &:after{
    ${setBottomLine('rgba(255, 255, 255, .3)')}
  }
  &:last-child {
    &:after {
      display: none;
    }
  }
`;

const Nav = (
  <StyledBNav>
    <StyledMenu>发起群聊</StyledMenu>
    <StyledMenu>添加朋友</StyledMenu>
    <StyledMenu>扫一扫</StyledMenu>
  </StyledBNav>
);

const Demo = () => {
  return (
    <WingBlank size={5}>
      <div className="demo">
        <div className="demo-title">Dropdown </div>
        <div className="demo-box">
          <Tooltip value={Nav} trigger="click" placement="bottom">
            <Button type="success" size="small">
              Add
            </Button>
          </Tooltip>
        </div>
      </div>
    </WingBlank>
  );
};

export default Demo;
