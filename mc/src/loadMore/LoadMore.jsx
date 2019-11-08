/*
 * @Author: caozhihui@leedarson.com
 * @Date: 2019/8/29
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import uiPropTypes from '../propTypes';
import { StyledLoadMore, StyledLoading, StyledBox } from './StyledLoadMore';
import Loading from '../loading/index';

const LoadMore = props => {
  const { loading, showLine, children, theme, ...restProps } = props;
  return (
    <StyledLoadMore {...restProps}>
      <StyledBox showLine={showLine}>
        {loading ? (
          <StyledLoading>
            <Loading type={loading} color={theme.neuter[600]} />
          </StyledLoading>
        ) : (
          children
        )}
      </StyledBox>
    </StyledLoadMore>
  );
};

LoadMore.defaultProps = {
  loading: '',
  showLine: true,
  children: '',
  theme: {},
};

LoadMore.propTypes = {
  loading: PropTypes.oneOf(['', 'bubbles', 'bars', 'spokes', 'spin']),
  showLine: PropTypes.bool,
  children: PropTypes.node,
  theme: uiPropTypes.theme,
};

export default withTheme(LoadMore);
