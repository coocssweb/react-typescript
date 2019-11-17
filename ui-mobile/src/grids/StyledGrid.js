/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 11:42:14
 * Copyright © Leedarson. All rights reserved.
 */

import styled from 'styled-components';
import { setTopLine, setRightLine, setBottomLine, setLeftLine } from '../styled-engine';

// Grid 栅格化
const StyledGrid = styled.div`
  position: relative;
  overflow: hidden;
  &:before {
    ${props => setTopLine(props.borderColor)}
  }
  &:after {
    ${props => setLeftLine(props.borderColor)}
  }
`;

// GridItem 栅格化单元
const StyledGridItem = styled.div`
  position: relative;
  float: left;
  width: ${props => (100 / props.baseCols) * props.cols}%;
  box-sizing: border-box;
  &:before {
    ${props => setRightLine(props.borderColor)}
  }
  &:after {
    ${props => setBottomLine(props.borderColor)}
  }
`;

export { StyledGrid, StyledGridItem };
