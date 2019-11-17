/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:06:00
 * Copyright © Leedarson. All rights reserved.
 */

import styled from 'styled-components';

const StyleInput = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  -webkit-appearance: none;
  background-color: transparent;
  font-size: inherit;
  color: inherit;
  height: ${props => props.theme.cellLineHeight};
  line-height: ${props => props.theme.cellLineHeight};
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export default StyleInput;
