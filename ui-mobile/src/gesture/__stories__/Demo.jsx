/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useState, useCallback, useRef, useMemo } from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import { themeDefault } from '@leedarson/theme';
import { Gesture, Button, Modal } from '../../index';
const { LongPress, Drag } = Gesture;

const StyledDragArea = styled.div`
  height: 200px;
  background: #fff;
  overflow: hidden;
  position: relative;
`;

const Demo = () => {
  const [visible, setVisible] = useState(false);
  const [offset, setOffset] = useState([0, 50]);
  const [offset2, setOffset2] = useState([100, 50]);
  const [offset3, setOffset3] = useState([200, 50]);
  const handleLongPress = useCallback(() => {
    setVisible(true);
  }, []);

  const handleCloseClick = useCallback(() => {
    setVisible(false);
  }, []);

  const handleDrag = useCallback(([left, top]) => {
    setOffset([left, top]);
  }, []);

  const handleDrag2 = useCallback(([left, top]) => {
    setOffset2([left, top]);
  }, []);

  const handleDrag3 = useCallback(([left, top]) => {
    setOffset3([left, top]);
  }, []);

  return (
    <ThemeProvider theme={themeDefault}>
      <div className="demo">
        <div className="demo-title">长按</div>
        <div className="demo-box">
          <LongPress onPress={handleLongPress}>
            <Button type="success">长按删除</Button>
          </LongPress>
        </div>
        <div className="demo-title">拖拽（可设定固定轴）</div>
        <div className="demo-box">
          <StyledDragArea>
            <Drag onDrag={handleDrag} offset={offset}>
              <Button type="success" size="small" round>
                球
              </Button>
            </Drag>

            <Drag onDrag={handleDrag2} offset={offset2} direction="x">
              <Button type="primary" size="small" round>
                X轴
              </Button>
            </Drag>

            <Drag onDrag={handleDrag3} offset={offset3} direction="y">
              <Button type="danger" size="small" round>
                Y轴
              </Button>
            </Drag>
          </StyledDragArea>
        </div>

        <Modal visible={visible} title="确认删除" confirm="确定" cancel="取消" onClose={handleCloseClick}>
          <div style={{ width: '250px' }}>确认删除这条数据吗？</div>
        </Modal>
      </div>
    </ThemeProvider>
  );
};

export default Demo;
