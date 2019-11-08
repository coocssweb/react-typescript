/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-20 12:11:25
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useCallback, useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'rmc-dialog';
import ModalButton from './ModalButton';
import StyledModal from './StyledModal';
import { fade, zoom } from '../styledUtils';
import { EMPTY_FUNCTION } from '../constants';
import uiPropTypes from '../propTypes';

const Modal = props => {
  const {
    visible,
    size,
    closable,
    confirm,
    cancel,
    maskClosable,
    onClose,
    afterClose,
    onConfirm,
    onCancel,
    children,
    ...restProps
  } = props;

  const [modalVisible, setModalVisible] = useState(visible);

  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);

  // wrap confirm click, support for async
  const wrapConfirmClick = useCallback(async () => {
    try {
      onConfirm();
    } finally {
      if (onClose === EMPTY_FUNCTION) {
        setModalVisible(false);
      } else {
        onClose();
      }
    }
  }, [onClose, onConfirm]);

  // wrap cancel click, support for async
  const wrapCancelClick = useCallback(async () => {
    try {
      onCancel();
    } finally {
      if (onClose === EMPTY_FUNCTION) {
        setModalVisible(false);
      } else {
        onClose();
      }
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
      <StyledModal size={size} />
      <Dialog
        prefixCls={Modal.prefixCls}
        visible={modalVisible}
        closable={closable}
        maskClosable={maskClosable}
        footer={Footer}
        onClose={onClose}
        afterClose={afterClose}
        transitionName={zoom}
        maskTransitionName={fade}
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
  size: 'medium',
  closable: false,
  confirm: '',
  cancel: '',
  maskClosable: false,
  onClose: EMPTY_FUNCTION,
  afterClose: EMPTY_FUNCTION,
  onConfirm: EMPTY_FUNCTION,
  onCancel: EMPTY_FUNCTION,
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  size: uiPropTypes.size,
  visible: PropTypes.bool,
  closable: PropTypes.bool,
  confirm: PropTypes.string,
  cancel: PropTypes.string,
  maskClosable: PropTypes.bool,
  onClose: PropTypes.func,
  afterClose: PropTypes.func,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
};

export default Modal;
