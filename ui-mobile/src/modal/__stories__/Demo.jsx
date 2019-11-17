/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from '@leedarson/theme';
import { Modal, Button } from '../../index';

const Demo = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const handleToggleDialog1Click = visible => () => {
    setVisible1(visible);
  };

  const handleToggleDialog2Click = visible => () => {
    setVisible2(visible);
  };

  return (
    <ThemeProvider theme={themeDefault}>
      <div className="demo">
        <div className="demo-title">Modal </div>
        <div className="demo-box">
          <Button onClick={handleToggleDialog1Click(true)}>对话框一</Button>
          <div className="demo-split" />
          <Button onClick={handleToggleDialog2Click(true)}>对话框二</Button>
          <Modal
            visible={visible1}
            title="对话框标题"
            confirm="确定"
            cancel="取消"
            onClose={handleToggleDialog1Click(false)}
          >
            <div>弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</div>
          </Modal>

          <Modal visible={visible2} title="对话框标题" confirm="确定" onClose={handleToggleDialog2Click(false)}>
            <div>弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</div>
          </Modal>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Demo;
