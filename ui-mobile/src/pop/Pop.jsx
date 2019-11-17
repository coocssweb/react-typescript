/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-20 12:11:25
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'rmc-dialog';
import GlobalStyled, { upAnimationName, downAnimationName, fadeAnimationName } from './Styled';

const Pop = props => {
  const { placement, visible, closable, maskClosable, onClose, children, ...restProps } = props;

  return (
    <>
      <GlobalStyled />
      <Dialog
        prefixCls={placement === 'bottom' ? Pop.upPrefixCls : Pop.downPrefixCls}
        visible={visible}
        closable={closable}
        maskClosable={maskClosable}
        onClose={onClose}
        maskTransitionName={fadeAnimationName}
        transitionName={placement === 'bottom' ? upAnimationName : downAnimationName}
        {...restProps}
      >
        {children}
      </Dialog>
    </>
  );
};

Pop.upPrefixCls = 'LdsPopUp';
Pop.downPrefixCls = 'LdsPopDown';

Pop.defaultProps = {
  placement: 'bottom',
  visible: false,
  closable: true,
  maskClosable: true,
  onClose: () => {},
};

Pop.propTypes = {
  children: PropTypes.node.isRequired,
  placement: PropTypes.oneOf(['top', 'bottom']),
  title: PropTypes.string,
  visible: PropTypes.bool,
  closable: PropTypes.bool,
  maskClosable: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Pop;
