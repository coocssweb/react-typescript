/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { LoadMore } from '../../index';

const Demo = () => {
  return (
    <div className="demo">
      <div className="demo-title">LoadMore 加载中 无线 bubbles</div>
      <div className="demo-box">
        <LoadMore loading="bubbles" showLine={false}>
          数据加载中
        </LoadMore>
      </div>
      <div className="demo-title">LoadMore 加载中 无线 bars</div>
      <div className="demo-box">
        <LoadMore loading="bars" showLine={false}>
          数据加载中
        </LoadMore>
      </div>
      <div className="demo-title">LoadMore 加载中 无线 spokes</div>
      <div className="demo-box">
        <LoadMore loading="spokes" showLine={false}>
          数据加载中
        </LoadMore>
      </div>
      <div className="demo-title">LoadMore 加载中 无线 spin</div>
      <div className="demo-box">
        <LoadMore loading="spin" showLine={false}>
          数据加载中
        </LoadMore>
      </div>
      <div className="demo-title">LoadMore 加载中 有线 spokes</div>
      <div className="demo-box">
        <LoadMore loading="spokes" showLine={true}>
          数据加载中
        </LoadMore>
      </div>
      <div className="demo-title">LoadMore 加载中</div>
      <div className="demo-box">
        <LoadMore>数据加载中</LoadMore>
      </div>
      <div className="demo-title">LoadMore 暂无数据</div>
      <div className="demo-box">
        <LoadMore>暂无数据</LoadMore>
      </div>
      <div className="demo-title">LoadMore 加载完成</div>
      <div className="demo-box">
        <LoadMore>没有更多数据啦</LoadMore>
      </div>
    </div>
  );
};

export default Demo;
