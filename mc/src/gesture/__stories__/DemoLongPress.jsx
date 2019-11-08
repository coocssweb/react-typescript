/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useState, useCallback, useRef, useMemo } from 'react';
import styled from 'styled-components';
import { LongPress, Drag, Button, Modal, WingBlank } from '../../index';

const StyledDragArea = styled.div`
  height: 200px;
  background: #fff;
  overflow: hidden;
  position: relative;
`;

const Demo = () => {
  const [visible, setVisible] = useState(false);
  const handleLongPress = useCallback(() => {
    setVisible(true);
  }, []);

  const handleCloseClick = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <div className="demo">
      <div className="demo-title">长按</div>
      <div className="demo-box">
        <WingBlank spacing={5}>
          <LongPress onPress={handleLongPress}>
            <Button type="success">长按删除</Button>
          </LongPress>
        </WingBlank>
      </div>

      <Modal visible={visible} title="确认删除" confirm="确定" cancel="取消" onClose={handleCloseClick}>
        <div style={{ width: '250px' }}>确认删除这条数据吗？</div>
      </Modal>
    </div>
  );
};

export default Demo;
