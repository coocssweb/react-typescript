/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */
import React from 'react';
import styled from 'styled-components';
import { Icon, Box } from '../../index';

const StyledBox = styled(Box)`
  border: 1px solid #000;
`;

const Demo = () => {
  return (
    <div className="demo">
      <div className="demo-title">Box block</div>
      <div className="demo-box">
        <StyledBox padding={[32]} margin={[32]}>
          盒子内容
        </StyledBox>
      </div>
      <div className="demo-title">Box inline-block</div>
      <div className="demo-box">
        <StyledBox display="inline-block" padding={[16]} margin={[16]}>
          <Icon type="home" />
        </StyledBox>
        <StyledBox display="inline-block" padding={[16]} margin={[16]}>
          <Icon type="home" />
        </StyledBox>
        <StyledBox display="inline-block" padding={[16]} margin={[16]}>
          <Icon type="home" />
        </StyledBox>
        <StyledBox display="inline-block" padding={[16]} margin={[16]}>
          <Icon type="home" />
        </StyledBox>
      </div>
    </div>
  );
};

export default Demo;
