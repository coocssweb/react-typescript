/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:04:18
 * Copyright © Leedarson. All rights reserved.
 */

import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';
import { GlobalStyle as toast } from '../toast/Styled';
// import icon from '../icon/Styled';

export default createGlobalStyle`
  ${normalize}
  ${toast}
`;
