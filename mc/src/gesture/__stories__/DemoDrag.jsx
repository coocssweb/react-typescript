/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useState, useCallback, useRef, useMemo } from 'react';
import styled from 'styled-components';
import { Drag, Button, Modal, WingBlank } from '../../index';

const StyledDragArea = styled.div`
  height: 200px;
  background: #fff;
  overflow: hidden;
  position: relative;
`;

const Demo = () => {
  const [offset, setOffset] = useState([0, 50]);
  const [offset2, setOffset2] = useState([100, 50]);
  const [offset3, setOffset3] = useState([200, 50]);

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
    <div className="demo">
      <div className="demo-title">拖拽（可设定固定轴）</div>
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
          <Button type="error" size="small" round>
            Y轴
          </Button>
        </Drag>
      </StyledDragArea>
    </div>
  );
};

export default Demo;
