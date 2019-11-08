/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-30 10:34:32
 * Copyright © Leedarson. All rights reserved.
 */

import { keyframes } from 'styled-components';

/**
 * 渐入渐出动效
 */
const FadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const FadeOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const ZoomIn = keyframes`
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(.8, .8);
  }

  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
  }
`;

const ZoomReserveIn = keyframes`
  0% {
    transform: Scale(1.5);
    opacity: .5;
    transform-origin: 0% 50%;
  }

  100% {
    transform-origin: 0% 50%;
    transform: none;
    opacity: 1
  }
`;

const ZoomOut = keyframes`
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
  }

  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(.8, .8);
  }
`;

/**
 * 上滑动效
 */
const SlideUpIn = keyframes`
 0% {
    transform: translate(0, 100%);
  }

  100% {
    transform: translate(0, 0);
  }
`;

const SlideUpOut = keyframes`
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(0, 100%);
  }
`;

/**
 * 下滑动效
 */
const SlideDownIn = keyframes`
  0% {
    transform: translate(0, -100%);
  }

  100% {
    transform: translate(0, 0);
  }
`;

const SlideDownOut = keyframes`
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(0, -100%);
  }
`;

/**
 * 左滑动效
 */
const SlideLeftIn = keyframes`
  0% {
    transform: translate(100%, 0);
  }

  100% {
    transform: translate(0, 0);
  }
`;

const SlideLeftOut = keyframes`
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(100%, 0);
  }
`;

/**
 * 右滑动效
 */
const SlideRightIn = keyframes`
  0% {
    transform: translate(-100%, 0);
  }

  100% {
    transform: translate(0, 0);
  }
`;

const SlideRightOut = keyframes`
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(-100%, 0);
  }
`;

export {
  FadeIn,
  FadeOut,
  ZoomIn,
  ZoomReserveIn,
  ZoomOut,
  SlideDownIn,
  SlideDownOut,
  SlideUpIn,
  SlideUpOut,
  SlideLeftIn,
  SlideLeftOut,
  SlideRightIn,
  SlideRightOut,
};
