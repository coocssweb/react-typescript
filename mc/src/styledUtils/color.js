/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-10-08 10:07:21
 * Copyright © Leedarson. All rights reserved.
 */

import { THEME_COLORS } from '../constants';
/**
 * 获取颜色
 * @param {*} theme 主题
 * @param {*} colored colorType
 */
export const getColor = (theme, colored = '') => {
  if (colored.includes('#') || !THEME_COLORS.includes(colored) || colored === 'transparent') {
    return colored;
  }

  if (colored.includes('neuter')) {
    return theme.neuter[colored.replace('neuter', '')];
  }
  return theme[colored].main;
};

/**
 * 获取文本颜色
 * @param {*} theme 主题
 * @param {*} colored colorType
 */
export const getTextColor = (theme, colored) => {
  if (!THEME_COLORS.includes(colored)) {
    return '#000';
  }
  if (colored.includes('neuter')) {
    return colored.replace('neuter', '') > '500' ? '#fff' : '#333';
  }
  if (!theme[colored]) {
    return '#000';
  }

  return theme[colored].text;
};

const _hex2rgb = hex => parseInt(hex, 16);
/**
 * 透明化
 * @param {*} theme 主题
 * @param {*} colored 颜色，支持colorType / hex
 * @param {*} opacity 透明度
 */
export const getOpacityColor = (theme, colored, opacity) => {
  let hex;
  if (colored.includes('#')) {
    hex = colored;
  } else if (!THEME_COLORS.includes(colored)) {
    hex = '#000';
  } else if (colored.includes('neuter')) {
    hex = theme.neuter[colored.replace('neuter', '')];
  } else {
    hex = theme[colored].main;
  }

  return `rgba(${[_hex2rgb(hex.substr(1, 2)), _hex2rgb(hex.substr(3, 2)), _hex2rgb(hex.substr(5, 2)), opacity]})`;
};

const _parseHexToRGB = hex => {
  const hex2rgb = h => {
    const decimal = parseInt(h, 16);
    return decimal;
  };

  return [hex2rgb(hex.substr(1, 2)), hex2rgb(hex.substr(3, 2)), hex2rgb(hex.substr(5, 2))].concat([1]);
};

const _parseToRgb = value => {
  if (Array.isArray(value)) {
    return value;
  }
  if (value.includes('#')) {
    return _parseHexToRGB(value);
  }

  const base = value
    .replace('rgba(', '')
    .replace('rgb(', '')
    .replace(')', '')
    .split(',');
  return base.map(d => d.trim());
};

/**
 * 混合颜色
 */
export const mixTowColors = (colorA, colorB, weight = 10) => {
  const base = _parseToRgb(colorB);
  const brend = _parseToRgb(colorA);
  const newColor = base.map((c, i) => {
    if (i === 3) {
      return brend[i] + (c - brend[i]) * (weight / 100);
    }
    return Math.floor(brend[i] + (c - brend[i]) * (weight / 100));
  });
  return `rgba(${newColor})`;
};

/**
 * 获取激活状态的颜色
 * @param {*} theme
 * @param {*} colored
 */
export const getActiveColor = (theme, colored, addonColor = '#000000') => {
  let hex;
  if (colored.includes('#')) {
    hex = colored;
  } else if (colored === 'transparent') {
    return 'rgba(0, 0, 0, 0.1)';
  } else if (!THEME_COLORS.includes(colored)) {
    hex = '#000';
  } else if (colored.includes('neuter')) {
    hex = theme.neuter[colored.replace('neuter', '')];
  } else {
    hex = theme[colored].main;
  }

  return mixTowColors(hex, addonColor, 10);
};
