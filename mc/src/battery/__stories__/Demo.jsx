import React from 'react';
import Battery from '../index';

const Demo = () => {
  return (
    <div className="demo">
      <div className="demo-title">正常状态</div>
      <Battery quantity={100} />
      <div className="demo-title">警告状态</div>
      <Battery quantity={20} power={true} />
      <div className="demo-title">低电量状态</div>
      <Battery quantity={20} power={true} />
      <div className="demo-title">低电量状态 显示pct</div>
      <Battery quantity={10} power={true}>
        10%
      </Battery>
    </div>
  );
};

export default Demo;
