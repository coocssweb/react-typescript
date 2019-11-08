/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import styled, { css } from 'styled-components';
import { Icon, WhiteSpace } from '../../index';
import Navbar from '../Navbar';

const StyledNavbarWrap = styled.div`
  background: #fff;
  position: fixed;
`;

const StyledClear = styled(Icon)`
  ${({ theme }) => css`
    margin-right: ${theme.pxToRem(16)};
  `}
`;

const Demo = () => {
  return (
    <div className="demo">
      <StyledNavbarWrap>
        <Navbar title="Management"></Navbar>
      </StyledNavbarWrap>
      <WhiteSpace spacing={1} />
      <StyledNavbarWrap>
        <Navbar back={false} title="Management"></Navbar>
      </StyledNavbarWrap>
      <WhiteSpace spacing={1} />
      <StyledNavbarWrap>
        <Navbar title="Management">
          <Icon type="clear" />
        </Navbar>
      </StyledNavbarWrap>
      <WhiteSpace spacing={1} />
      <StyledNavbarWrap>
        <Navbar title="Management">
          <StyledClear type="clear" />
          <Icon type="setting" />
        </Navbar>
      </StyledNavbarWrap>
    </div>
  );
};

export default Demo;
