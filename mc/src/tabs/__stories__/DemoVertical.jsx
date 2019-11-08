/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */
import React from 'react';
import { Tabs } from '../../index';

const DemoVertical = () => {
  const tabData = [
    { title: 'Hub ' },
    { title: 'Lighting' },
    { title: 'Plug' },
    { title: 'Sensor' },
    { title: 'Two Line Of State' },
  ];

  const handleTabChange = () => {};

  return (
    <Tabs tabs={tabData} onChange={handleTabChange} direction="vertical">
      <div style={{ padding: '16px', height: '100%', backgroundColor: '#fff', boxSizing: 'border-box' }}>
        <p>single content</p>
        <p>single content</p>
        <p>single content</p>
        <p>single content</p>
      </div>
    </Tabs>
  );
};

export default DemoVertical;
