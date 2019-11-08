/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:04:18
 * Copyright © Leedarson. All rights reserved.
 */

import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';
import {
  styledFade,
  styledZoom,
  styledSlideDown,
  styledSlideRight,
  styledSlideUp,
  styledSlideLeft,
} from '../styledUtils';

import PopStyled from '../pop/StyledPop';

export default createGlobalStyle`
  ${normalize}
  ${styledFade}
  ${styledZoom}
  ${styledSlideDown}
  ${styledSlideRight}
  ${styledSlideUp}
  ${styledSlideLeft}
  ${PopStyled}
`;
