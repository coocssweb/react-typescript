/*
 * @Author: caozhihui@leedarson.com
 * @Date: 2019/8/29
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useCallback } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { StyledSwitch, StyledThumb } from './StyledSwitch';

const Switch = props => {
  const { disabled, checked, onChange, onClick, ...restProps } = props;

  const handleClick = useCallback(
    e => {
      e.stopPropagation();
      if (disabled) {
        onClick(checked);
        return;
      }
      const latestChecked = !checked;
      onClick(latestChecked);
      onChange(latestChecked);
    },
    [checked, disabled, onChange, onClick],
  );

  return (
    <StyledSwitch checked={checked} disabled={disabled} onClick={handleClick} {...restProps}>
      <StyledThumb checked={checked} />
    </StyledSwitch>
  );
};

Switch.defaultProps = {
  checked: false,
  disabled: false,
  onChange: () => {},
  onClick: () => {},
};

Switch.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default withTheme(Switch);
