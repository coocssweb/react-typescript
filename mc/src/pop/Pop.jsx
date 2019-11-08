/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-20 12:11:25
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Dialog from 'rmc-dialog';
import uiPropTypes from '../propTypes';
import { StyledPopColse, StyledPopBody, StyledPopHeader, StyledPopCancel, StyledPopCofirm } from './StyledPop';
import { EMPTY_FUNCTION } from '../constants';
import { fade, slideDown, slideLeft, slideUp, slideRight } from '../styledUtils';

const Pop = props => {
  const {
    theme,
    placement,
    fill,
    title,
    visible,
    closable,
    maskClosable,
    confirm,
    cancel,
    onConfirm,
    onCancel,
    onClose,
    afterClose,
    children,

    ...restProps
  } = props;
  const [popVisible, setPopVisible] = useState(visible);

  useEffect(() => {
    setPopVisible(visible);
  }, [visible]);

  const wrapClose = useCallback(() => {
    if (onClose === EMPTY_FUNCTION) {
      setPopVisible(false);
    } else {
      onClose();
    }
  }, [onClose]);

  // wrap confirm click, support for async
  const wrapConfirmClick = useCallback(async () => {
    try {
      await onConfirm();
    } finally {
      wrapClose();
    }
  }, [wrapClose, onConfirm]);

  // wrap cancel click, support for async
  const wrapCancelClick = useCallback(async () => {
    try {
      await onCancel();
    } finally {
      wrapClose();
    }
  }, [onCancel, wrapClose]);

  // render header
  const renderHeader = () => {
    if (!title && !cancel && !confirm) {
      return null;
    }
    return (
      <StyledPopHeader>
        {cancel ? <StyledPopCancel onClick={wrapCancelClick}>{cancel}</StyledPopCancel> : null}
        {title}
        {confirm ? <StyledPopCofirm onClick={wrapConfirmClick}>{confirm}</StyledPopCofirm> : null}
      </StyledPopHeader>
    );
  };

  return (
    <>
      <Dialog
        prefixCls={Pop.prefixCls[placement]}
        visible={popVisible}
        maskClosable={maskClosable}
        onClose={wrapClose}
        closable={false}
        maskTransitionName={fade}
        transitionName={Pop.transitionName[placement]}
        afterClose={afterClose}
        {...restProps}
      >
        <StyledPopBody fill={fill}>
          {closable ? <StyledPopColse /> : null}
          {renderHeader()}
          {children}
        </StyledPopBody>
      </Dialog>
    </>
  );
};

Pop.prefixCls = {
  bottom: 'LdsPopBottom',
  top: 'LdsPopTop',
  left: 'LdsPopLeft',
  right: 'LdsPopRight',
};

Pop.transitionName = {
  bottom: slideUp,
  top: slideDown,
  left: slideRight,
  right: slideLeft,
};

Pop.defaultProps = {
  placement: 'bottom',
  fill: 'surface',
  title: '',
  visible: false,
  closable: false,
  maskClosable: true,
  confirm: '',
  cancel: '',
  onClose: EMPTY_FUNCTION,
  onConfirm: EMPTY_FUNCTION,
  onCancel: EMPTY_FUNCTION,
  afterClose: EMPTY_FUNCTION,
};

Pop.propTypes = {
  children: PropTypes.node.isRequired,
  placement: uiPropTypes.placement,
  fill: uiPropTypes.color,
  title: PropTypes.string,
  spacings: PropTypes.arrayOf(PropTypes.number),
  visible: PropTypes.bool,
  closable: PropTypes.bool,
  maskClosable: PropTypes.bool,
  confirm: PropTypes.string,
  cancel: PropTypes.string,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  afterClose: PropTypes.func,
};

export default withTheme(Pop);
