/* eslint-disable */
/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-09-20 14:37:24
 * Copyright © Leedarson. All rights reserved.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Modal from './Modal';
import Typography from '../typography';
import Box from '../box';
import { EMPTY_FUNCTION } from '../constants';
import { globalTheme } from '../ThemeRegister';

const Confirm = props => {
  const finalProps = { ...Confirm.defaultProps, ...props };
  const { title, content, confirm, cancel, onConfirm, onCancel } = finalProps;

  const modalRoot = document.createElement('div');
  document.body.appendChild(modalRoot);

  const close = () => {
    ReactDOM.unmountComponentAtNode(modalRoot);
    if (modalRoot && modalRoot.parentNode) {
      modalRoot.parentNode.removeChild(modalRoot);
    }
  };

  ReactDOM.render(
    <ThemeProvider theme={globalTheme}>
      <Modal
        visible
        title={title}
        cancel={cancel}
        confirm={confirm}
        onConfirm={onConfirm}
        onCancel={onCancel}
        afterClose={close}
      >
        <Box padding={[10]}>
          <Typography variant="body1" align="center">
            {content}
          </Typography>
        </Box>
      </Modal>
    </ThemeProvider>,
    modalRoot,
  );

  return {
    close,
  };
};

Confirm.defaultProps = {
  title: '',
  content: '',
  confirm: 'Ok',
  cancel: 'Cancel',
  onCancel: EMPTY_FUNCTION,
  onConfirm: EMPTY_FUNCTION,
};

export default Confirm;
