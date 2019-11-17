/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-20 12:11:25
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'rmc-dialog';
import ModalButton from './ModalButton';
import Styled, { animationName } from './Styled';

const Modal = props => {
  const {
    visible,
    closable,
    confirm,
    cancel,
    maskClosable,
    onClose,
    onConfirm,
    onCancel,
    children,
    ...restProps
  } = props;

  // wrap confirm click, support for async
  const wrapConfirmClick = useCallback(async () => {
    try {
      await onConfirm();
    } finally {
      onClose();
    }
  }, [onClose, onConfirm]);

  // wrap cancel click, support for async
  const wrapCancelClick = useCallback(async () => {
    try {
      await onCancel();
    } finally {
      onClose();
    }
  }, [onCancel, onClose]);

  // modal footer
  const Footer = useMemo(() => {
    let footer = null;
    if (confirm || cancel) {
      footer = [];

      if (cancel) {
        footer.push(
          <ModalButton key="cancel" type="cancel" onClick={wrapCancelClick}>
            {cancel}
          </ModalButton>,
        );
      }

      if (confirm) {
        footer.push(
          <ModalButton key="confirm" type="confirm" onClick={wrapConfirmClick}>
            {confirm}
          </ModalButton>,
        );
      }
    }
    return footer;
  }, [cancel, confirm, wrapCancelClick, wrapConfirmClick]);

  return (
    <>
      <Styled />
      <Dialog
        prefixCls={Modal.prefixCls}
        visible={visible}
        closable={closable}
        maskClosable={maskClosable}
        footer={Footer}
        onClose={onClose}
        transitionName={animationName}
        maskTransitionName={animationName}
        {...restProps}
      >
        {children}
      </Dialog>
    </>
  );
};

Modal.prefixCls = 'LdsModal';

Modal.defaultProps = {
  visible: false,
  closable: false,
  confirm: '',
  cancel: '',
  maskClosable: true,
  onClose: () => {},
  onConfirm: () => {},
  onCancel: () => {},
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  visible: PropTypes.bool,
  closable: PropTypes.bool,
  confirm: PropTypes.string,
  cancel: PropTypes.string,
  maskClosable: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
};

export default Modal;
