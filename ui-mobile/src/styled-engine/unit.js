/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-14 17:44:25
 * Copyright © Leedarson. All rights reserved.
 */
const pxToRem = px => {
  const finalPx = typeof px === 'number' ? px : parseInt(px.replace('px', ''), 2);
  return `${finalPx / 200}rem`;
};

const other = {};

export { pxToRem, other };
