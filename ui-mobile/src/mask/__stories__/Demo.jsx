/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from '@leedarson/theme';
import { Mask, Button } from '../../index';

const Demo = () => {
  const [maskVisible, setMaskVisible] = useState(false);
  const handleShowMaskClick = () => {
    setMaskVisible(true);
  };

  const handleMaskClick = () => {
    setMaskVisible(false);
  };

  return (
    <ThemeProvider theme={themeDefault}>
      <div className="demo">
        <div className="demo-title">Mask 蒙层 </div>
        <div className="demo-box">
          <Button onClick={handleShowMaskClick}>显示蒙层</Button>
          <Mask visible={maskVisible} type="black" onClick={handleMaskClick} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Demo;
