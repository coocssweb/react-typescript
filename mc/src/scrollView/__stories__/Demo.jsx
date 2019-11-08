/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useState, useRef } from 'react';
import { ScrollView, LoadMore } from '../../index';

const arr = [];
for (let i = 0; i < 100; i++) {
  arr.push(`这是第${i}个li`);
}

const Demo = () => {
  const [list, setList] = useState(arr);
  const latestList = useRef(list);
  latestList.current = list;
  return (
    <div className="demo" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <ScrollView
        onEndReached={(a, b) => {
          const newArr = [];
          for (let i = 0; i < 10; i++) {
            newArr.push(`这是新增的第${i}个li`);
          }
          setTimeout(() => {
            setList(latestList.current.concat(newArr));
          }, 1000);
        }}
      >
        <ul>
          {list.map(item => {
            return <li>{item}</li>;
          })}
        </ul>
        <LoadMore loading="spokes" />
      </ScrollView>
    </div>
  );
};

export default Demo;
