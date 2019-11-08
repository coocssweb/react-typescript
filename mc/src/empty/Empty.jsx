/*
 * @Author: yuxinyu@leedarson.com
 * @Date: 2019-08-23 10:47:02
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import WhiteSpace from '../whiteSpace';
import { StyledEmpty, StyledEmptyWrap, StyledEmptyDesc, StyledEmptyIcon } from './StyledEmpty';

const Empty = props => {
  const { children, icon, margin } = props;

  return (
    <StyledEmpty margin={margin}>
      <StyledEmptyWrap>
        {icon ? <StyledEmptyIcon icon={icon} /> : null}
        <WhiteSpace spacing={10} />
        <StyledEmptyDesc>{children}</StyledEmptyDesc>
      </StyledEmptyWrap>
    </StyledEmpty>
  );
};

Empty.defaultProps = {
  icon: '',
  margin: [0],
};

Empty.propTypes = {
  icon: PropTypes.oneOf(['storage', 'list', 'folder']),
  margin: PropTypes.arrayOf(PropTypes.number),
  children: PropTypes.node.isRequired,
};

export default Empty;
