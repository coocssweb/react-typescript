/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Sortable, Grid, GridItem } from '../../index';

const StyledItem = styled.div`
  background-color: #fff;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 3px;
  position: relative;
`;

const StyledHandle = styled.div`
  position: absolute;
  right: 8px;
  background-color: #ccc;
  padding: 5px;
`;

const StyledSquare = styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  background-color: #fff;
  border-radius: 4px;
`;

const StyledSquareContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Demo = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);

  const handleSortEnd = useCallback(finalItems => {
    setItems(finalItems);
  }, []);

  return (
    <div className="demo">
      <div className="demo-title">基础排序</div>
      <div className="demo-box">
        <Sortable
          data={items}
          onSortEnd={handleSortEnd}
          render={(item, index) => {
            return <StyledItem>{item}</StyledItem>;
          }}
        />
      </div>

      <div className="demo-title">触发点排序</div>
      <div className="demo-box">
        <Sortable
          data={items}
          onSortEnd={handleSortEnd}
          render={(item, index, handle) => (
            <StyledItem>
              {handle}
              {item}
            </StyledItem>
          )}
          renderHandle={(item, index) => <StyledHandle></StyledHandle>}
        />
      </div>
      <div className="demo-title">网格排序</div>
      <div className="demo-box">
        <Sortable
          data={items}
          direction="xy"
          lockAxis=""
          as={Grid}
          cols={3}
          spacing={4}
          onSortEnd={handleSortEnd}
          render={(item, index) => {
            return (
              <GridItem>
                <StyledSquare>
                  <StyledSquareContent>{item}</StyledSquareContent>
                </StyledSquare>
              </GridItem>
            );
          }}
        />
      </div>
    </div>
  );
};

export default Demo;
