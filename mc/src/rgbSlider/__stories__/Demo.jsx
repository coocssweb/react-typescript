/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useCallback } from 'react';
import { RgbSlider } from '../../index';

const Demo = () => {
  const handleRgbChange = useCallback(hex => {
    console.log(Date.now(), hex);
  }, []);

  return (
    <div className="demo">
      <div className="demo-title">RgbSlider 颜色调整器 </div>
      <div className="demo-box">
        <RgbSlider
          choices={[
            { color: '#FFFFFF', value: 1, hsl: { h: 0, s: 0, l: 100 } },
            { color: '#FF0000', value: 2, hsl: { h: 0, s: 100, l: 50 } },
            { color: '#FFCC00', value: 3, hsl: { h: 48, s: 100, l: 50 } },
            { color: '#0099FF', value: 4, hsl: { h: 204, s: 100, l: 50 } },
            { color: '#80ff00', value: 5, hsl: { h: 90, s: 100, l: 50 } },
            { color: '#6666FF', value: 6, hsl: { h: 240, s: 100, l: 70 } },
          ]}
          onChange={handleRgbChange}
        />
      </div>
    </div>
  );
};

export default Demo;
