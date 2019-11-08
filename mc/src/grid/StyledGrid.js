/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 11:42:14
 * Copyright © Leedarson. All rights reserved.
 */

import styled, { css } from 'styled-components';
import { setTopLine, setRightLine, setBottomLine } from '../styledUtils';

const gridBorderLine = () => css`
  &:before {
    ${() => setTopLine()}
  }
`;

const gridItemBorderLine = () => css`
  &:before {
    ${() => setRightLine()}
  }
  &:after {
    ${() => setBottomLine()}
  }
`;

// Grid 栅格化
const StyledGrid = styled.div`
  position: relative;
  flex: 1;
  ${({ border }) => css`
    ${border && gridBorderLine()}
  `}
  &:after {
    content: '.';
    display: block;
    height: 0;
    line-height: 0;
    clear: both;
    visibility: hidden;
    overflow: hidden;
  }
`;

// GridItem 栅格化单元
const StyledGridItem = styled.div`
  position: relative;
  float: left;
  width: ${props => (100 / props.baseCols) * props.cols}%;
  box-sizing: border-box;

  ${({ border }) => css`
    padding: ${({ theme, spacing }) => theme.space(spacing)};
    ${border && gridItemBorderLine()}
  `}
`;

// GirdItem 内容
const StyledGridItemContent = styled.div`
  position: relative;
`;

export { StyledGrid, StyledGridItem, StyledGridItemContent };
