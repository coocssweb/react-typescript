/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:07:38
 * Copyright © Leedarson. All rights reserved.
 */

export * from './setOnePx';
export * from './unit';
export * from './setArrow';
export * from './animation';

/**
 * 单词首字大写
 * default => Default, danger => Danger
 * @param {} value
 */
export const strToSandUpperCase = (value = '') => {
  return `${value[0].toUpperCase()}${value.substring(1)}`;
};
