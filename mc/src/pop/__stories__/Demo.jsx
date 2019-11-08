/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useState } from 'react';
import { Pop, Button, WingBlank, WhiteSpace } from '../../index';

const Demo = () => {
  const [visibleTop, setVisibleTop] = useState(false);
  const [visibleBottom, setVisibleBottom] = useState(false);
  const [visibleLeft, setVisibleLeft] = useState(false);
  const [visibleRight, setVisibleRight] = useState(false);
  const [visibleDefine, setVisibleDefine] = useState(false);

  const handleToggleTopPopClick = visible => () => {
    setVisibleTop(visible);
  };

  const handleToggleBottomPopClick = visible => () => {
    setVisibleBottom(visible);
  };

  const handleToggleLeftPopClick = visible => () => {
    setVisibleLeft(visible);
  };

  const handleToggleRightPopClick = visible => () => {
    setVisibleRight(visible);
  };

  const handleToggleDefinePopClick = visible => () => {
    setVisibleDefine(visible);
  };

  const afterClose = () => {};

  return (
    <div className="demo">
      <div className="demo-title">Pop </div>
      <div className="demo-box">
        <WingBlank spacing={5}>
          <Button onClick={handleToggleTopPopClick(true)}>顶部抽屉</Button>
          <WhiteSpace spacing={2} />
          <Button onClick={handleToggleBottomPopClick(true)}>底部抽屉</Button>
          <WhiteSpace spacing={2} />
          <Button onClick={handleToggleLeftPopClick(true)}>左侧抽屉</Button>
          <WhiteSpace spacing={2} />
          <Button onClick={handleToggleRightPopClick(true)}>右侧抽屉</Button>
          <WhiteSpace spacing={2} />
          <Button onClick={handleToggleDefinePopClick(true)}>自定义</Button>
        </WingBlank>
        <Pop visible={visibleTop} placement="top" onClose={handleToggleTopPopClick(false)} afterClose={afterClose}>
          <div>弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</div>
        </Pop>

        <Pop
          visible={visibleBottom}
          title="对话框标题"
          placement="bottom"
          onClose={handleToggleBottomPopClick(false)}
          afterClose={afterClose}
        >
          <div>弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</div>
        </Pop>

        <Pop
          visible={visibleLeft}
          placement="left"
          spacings={[0]}
          onClose={handleToggleLeftPopClick(false)}
          afterClose={afterClose}
        >
          <div style={{ width: '100px' }}>弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</div>
        </Pop>
        <Pop
          visible={visibleRight}
          placement="right"
          spacings={[0]}
          onClose={handleToggleRightPopClick(false)}
          afterClose={afterClose}
        >
          <div style={{ width: '100px' }}>弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</div>
        </Pop>

        <Pop
          visible={visibleDefine}
          placement="bottom"
          fill="transparent"
          spacings={[0]}
          onClose={handleToggleDefinePopClick(false)}
          afterClose={afterClose}
        >
          <div style={{ backgroundColor: '#fff', color: '#333', padding: '50px' }}>自定义背景色</div>
        </Pop>
      </div>
    </div>
  );
};

export default Demo;
