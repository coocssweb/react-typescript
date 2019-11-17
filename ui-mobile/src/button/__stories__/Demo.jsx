/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from '@leedarson/theme';
import { Button } from '../../index';

const Demo = () => {
  const handleOnClick = () => {};

  return (
    <ThemeProvider theme={themeDefault}>
      <div className="demo">
        <div className="demo-title">Button Small</div>
        <div className="demo-box">
          <Button size="small">按钮</Button>
          <Button size="small" type="primary">
            按钮
          </Button>
          <Button size="small" type="warn">
            按钮
          </Button>
          <Button size="small" type="primary" loading>
            按钮
          </Button>
        </div>

        <div className="demo-title">Button Large</div>
        <div className="demo-box">
          <Button onClick={handleOnClick}>按钮</Button>
          <div className="demo-split" />
          <Button type="primary">按钮</Button>
          <div className="demo-split" />
          <Button type="success" round>
            圆形按钮
          </Button>
          <div className="demo-split" />
          <Button type="warn">按钮</Button>
          <div className="demo-split" />
          <Button type="danger">按钮</Button>
        </div>

        <div className="demo-title">Button Loading</div>
        <div className="demo-box">
          <Button onClick={handleOnClick} loading>
            按钮
          </Button>
          <div className="demo-split" />
          <Button type="primary" loading>
            按钮
          </Button>
          <div className="demo-split" />
          <Button type="success" loading>
            按钮
          </Button>
          <div className="demo-split" />
          <Button type="warn" loading>
            按钮
          </Button>
          <div className="demo-split" />
          <Button type="danger" loading>
            按钮
          </Button>
        </div>

        <div className="demo-title">Button Disabled</div>
        <div className="demo-box">
          <Button disabled>按钮</Button>
          <div className="demo-split" />
          <Button type="primary" disabled>
            按钮禁用
          </Button>
          <div className="demo-split" />
          <Button type="success" disabled>
            按钮禁用
          </Button>
          <div className="demo-split" />
          <Button type="warn" disabled>
            按钮禁用
          </Button>
          <div className="demo-split" />
          <Button type="danger" disabled>
            按钮禁用
          </Button>
        </div>

        <div className="demo-title">Button Plain</div>
        <div className="demo-box">
          <Button plain>按钮</Button>
          <div className="demo-split" />
          <Button plain round type="primary">
            圆形按钮
          </Button>
          <div className="demo-split" />
          <Button plain type="success">
            按钮
          </Button>
          <div className="demo-split" />
          <Button plain type="warn">
            按钮
          </Button>
          <div className="demo-split" />
          <Button plain type="danger">
            按钮
          </Button>
        </div>
        <div className="demo-title">Button Plain Loading</div>
        <div className="demo-box">
          <Button plain loading>
            按钮
          </Button>
          <div className="demo-split" />
          <Button plain loading type="primary">
            按钮
          </Button>
          <div className="demo-split" />
          <Button plain loading type="success">
            按钮
          </Button>
          <div className="demo-split" />
          <Button plain loading type="warn">
            按钮
          </Button>
          <div className="demo-split" />
          <Button plain loading type="danger">
            按钮
          </Button>
        </div>

        <div className="demo-title">Button Block</div>
        <div className="demo-box">
          <Button type="primary" block>
            页面主操作
          </Button>
          <div className="demo-split" />
          <Button type="success" block>
            页面主操作
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Demo;
