/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useState } from 'react';
import { Modal, Button, WingBlank, WhiteSpace } from '../../index';

const Demo = () => {
  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(false);

  const handleToggleDialog1Click = visible => () => {
    setVisible1(visible);
  };

  const handleToggleDialog2Click = visible => () => {
    setVisible2(visible);
  };

  const handleConfirmClick = () => {
    Modal.confirm({
      title: 'Switching Servers',
      content:
        'Products of different regions can only be accessed from their respective data center. Please make sure your current server matches your product.',
    });
  };

  const handleAlertClick = () => {
    Modal.alert({
      title: 'Switching Servers',
      content:
        'Products of different regions can only be accessed from their respective data center. Please make sure your current server matches your product.',
    });
  };

  const handlePopClick = () => {
    Modal.pop({
      title: 'Switching Servers',
      content:
        'Products of different regions can only be accessed from their respective data center. Please make sure your current server matches your product.',
      confirm: 'Done',
      cancel: 'Cancel',
    });
  };

  return (
    <div className="demo">
      <div className="demo-title">Modal </div>
      <div className="demo-box">
        <WingBlank spacing={5}>
          <Button onClick={handleToggleDialog1Click(true)}>对话框一</Button>
          <WhiteSpace spacing={2} />
          <Button onClick={handleToggleDialog2Click(true)}>对话框二</Button>
          <WhiteSpace spacing={2} />
          <Button onClick={handleAlertClick}>Modal.alert</Button>
          <WhiteSpace spacing={2} />
          <Button onClick={handleConfirmClick}>Modal.confirm</Button>
          <WhiteSpace spacing={2} />
          <Button onClick={handlePopClick}>Modal.pop</Button>
        </WingBlank>
        <Modal
          visible={visible1}
          title="Switching Servers"
          confirm="Switch"
          cancel="Cancel"
          onClose={handleToggleDialog1Click(false)}
        >
          <div>
            Products of different regions can only be accessed from their respective data center. Please make sure your
            current server matches your product.
          </div>
        </Modal>

        <Modal visible={visible2} title="Switching Servers" confirm="Switch" onClose={handleToggleDialog2Click(false)}>
          <div>
            Products of different regions can only be accessed from their respective data center. Please make sure your
            current server matches your product.
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Demo;
