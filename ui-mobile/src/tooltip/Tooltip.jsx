/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:10:55
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import RcTooltip from 'rc-tooltip';
import GlobalStyled from './Styled';

// tooltip 距离target元素的位置
const _alignBottom = {
  offset: [0, 10],
  overflow: { adjustX: true, adjustY: false },
};

// tooltip 距离target元素的位置
const _alignTop = {
  offset: [0, -10],
  overflow: { adjustX: true, adjustY: false },
};

const Tooltip = ({ defaultVisible, placement, value, trigger, children, ...restProps }) => {
  return (
    <>
      <GlobalStyled placement={placement} />
      <RcTooltip
        defaultVisible={defaultVisible}
        placement={placement}
        overlay={value}
        align={placement === 'top' ? _alignTop : _alignBottom}
        prefixCls={Tooltip.prefixCls}
        trigger={[trigger]}
        {...restProps}
      >
        {children}
      </RcTooltip>
    </>
  );
};

Tooltip.prefixCls = 'LdsTooltip';

Tooltip.defaultProps = {
  defaultVisible: false,
  placement: 'top',
  value: 0,
  trigger: 'focus',
};

Tooltip.propTypes = {
  defaultVisible: PropTypes.bool,
  placement: PropTypes.oneOf(['top', 'bottom']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  trigger: PropTypes.oneOf(['focus', 'click', 'hover']),
  children: PropTypes.node.isRequired,
};

export default Tooltip;
