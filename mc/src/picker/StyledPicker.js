/*
 * @Author: yuxinyu@leedarson.com
 * @Date: 2019-08-30 14:57:24
 * Copyright © Leedarson. All rights reserved.
 */

import styled, { css } from 'styled-components';
import { setTopLine, setBottomLine } from '../styledUtils';

const prefixCls = 'LdsPicker';
const multiPrefixCls = 'LdsMultiPicker';
const cascaderPrefixCls = 'LdsCascaderPicker';

const picker = ({ theme }) => css`
  .${prefixCls} {
    display: block;
    width: 100%;
    height: ${theme.pxToRem(286)};
    flex: 1;
    text-align: center;
    overflow: hidden;
    position: relative;
  }
`;

const multiPicker = ({ theme }) => css`
  .${multiPrefixCls}, .${cascaderPrefixCls} {
    display: flex;
    height: ${theme.pxToRem(286)};
    align-items: center;
    text-align: center;
  }
`;

const pickerMask = ({ theme }) => css`
  .${prefixCls}-mask {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    margin: 0 auto;
    width: 100%;
    z-index: 3;
    /*     background-image: linear-gradient(to bottom, rgba(240, 244, 248, 0.95), rgba(240, 244, 248, 0.6)),
      linear-gradient(to top, rgba(240, 244, 248, 0.95), rgba(240, 244, 248, 0.6)); */
    background-position: top, bottom;
    background-size: 100% ${theme.pxToRem(96)} !important;
    background-repeat: no-repeat;
  }
`;

const pickerIndicator = ({ theme }) => css`
  .${prefixCls}-indicator {
    box-sizing: border-box;
    width: 100%;
    height: ${theme.pxToRem(96)};
    position: absolute;
    left: 0;
    top: ${theme.pxToRem(96)} !important;
    z-index: 3;
    &:before {
      ${setTopLine('#dddddd')}
    }
    &:after {
      ${setBottomLine('#dddddd')}
    }
  }
`;

const pickerContent = css`
  .${prefixCls}-content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
    ${({ theme }) => css`
      padding: ${theme.pxToRem(96)} 0 !important;
    `}
  }
`;

const pickerItem = ({ theme }) => css`
  .${prefixCls}-item {
    font-size: ${theme.pxToRem(32)};
    height: ${theme.pxToRem(96)};
    line-height: ${theme.pxToRem(96)};
    padding: 0 ${theme.pxToRem(20)};
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${theme.neuter[800]};
    width: 100%;
    box-sizing: border-box;
    transition: font-size;
  }

  .${prefixCls}-item-selected {
    font-size: ${theme.pxToRem(38)};
  }
`;

const StyledPickerView = styled.div`
  ${({ theme }) => css`
    ${picker({ theme })}
    ${multiPicker({ theme })}
    ${pickerMask({ theme })}
    ${pickerIndicator({ theme })}
    ${pickerContent}
    ${pickerItem({ theme })}
  `}
`;

export default StyledPickerView;
