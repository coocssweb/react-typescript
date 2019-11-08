/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-20 12:11:15
 * Copyright © Leedarson. All rights reserved.
 */

import { css } from 'styled-components';

import {
  FadeIn,
  FadeOut,
  ZoomIn,
  ZoomOut,
  SlideDownIn,
  SlideDownOut,
  SlideUpIn,
  SlideUpOut,
  SlideLeftIn,
  SlideLeftOut,
  SlideRightIn,
  SlideRightOut,
} from './keyframes';

// 动画属性
const animationEffect = css`
  animation-duration: 0.4s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
`;

/**
 * 渐入渐出动效
 */
const fade = 'LdsAnimateFade';
const styledFade = css`
  .${fade}-appear {
    ${animationEffect}
    opacity: 0;
    animation-play-state: paused;
  }
  .${fade}-enter {
    ${animationEffect}
    opacity: 0;
    animation-play-state: paused;
  }
  .${fade}-leave {
    ${animationEffect}
    animation-play-state: paused;
  }
  .${fade}-appear&.${fade}-appear-active {
    animation-name: ${FadeIn};
    animation-play-state: running;
  }
  .${fade}-enter&.${fade}-enter-active {
    animation-name: ${FadeIn};
    animation-play-state: running;
  }
  .${fade}-leave.${fade}-leave-active {
    animation-name: ${FadeOut};
    animation-play-state: running;
  }
`;

/**
 * 渐入渐出动效
 */
const zoom = 'LdsAnimateZoom';
const styledZoom = css`
  .${zoom}-appear {
    ${animationEffect}
    opacity: 0;
    animation-play-state: paused;
  }
  .${zoom}-enter {
    ${animationEffect}
    opacity: 0;
    animation-play-state: paused;
  }
  .${zoom}-leave {
    ${animationEffect}
    animation-play-state: paused;
  }
  .${zoom}-appear&.${zoom}-appear-active {
    animation-name: ${ZoomIn};
    animation-play-state: running;
  }
  .${zoom}-enter&.${zoom}-enter-active {
    animation-name: ${ZoomIn};
    animation-play-state: running;
  }
  .${zoom}-leave.${zoom}-leave-active {
    animation-name: ${ZoomOut};
    animation-play-state: running;
  }
`;

/**
 * 上滑动效
 */
const slideUp = 'LdsAnimateSlideUp';

const styledSlideUp = css`
  .${slideUp}-appear {
    ${animationEffect}
    transform: translate(0, 100%);
    animation-play-state: paused;
  }
  .${slideUp}-enter {
    ${animationEffect}
    transform: translate(0, 100%);
    animation-play-state: paused;
  }
  .${slideUp}-leave {
    ${animationEffect}
    animation-play-state: paused;
  }
  .${slideUp}-appear&.${slideUp}-appear-active {
    animation-name: ${SlideUpIn};
    animation-play-state: running;
  }
  .${slideUp}-enter&.${slideUp}-enter-active {
    animation-name: ${SlideUpIn};
    animation-play-state: running;
  }
  .${slideUp}-leave.${slideUp}-leave-active {
    animation-name: ${SlideUpOut};
    animation-play-state: running;
  }
`;

/**
 * 下滑动效
 */
const slideDown = 'LdsAnimateSlideDown';

const styledSlideDown = css`
  .${slideDown}-appear {
    ${animationEffect}
    transform: translate(0, -100%);
    animation-play-state: paused;
  }
  .${slideDown}-enter {
    ${animationEffect}
    transform: translate(0, -100%);
    animation-play-state: paused;
  }
  .${slideDown}-leave {
    ${animationEffect}
    animation-play-state: paused;
  }
  .${slideDown}-appear&.${slideDown}-appear-active {
    animation-name: ${SlideDownIn};
    animation-play-state: running;
  }
  .${slideDown}-enter&.${slideDown}-enter-active {
    animation-name: ${SlideDownIn};
    animation-play-state: running;
  }
  .${slideDown}-leave.${slideDown}-leave-active {
    animation-name: ${SlideDownOut};
    animation-play-state: running;
  }
`;

/**
 * 左滑动效
 */
const slideLeft = 'LdsAnimateSlideLeft';

const styledSlideLeft = css`
  .${slideLeft}-appear {
    ${animationEffect}
    transform: translate(100%, 0);
    animation-play-state: paused;
  }
  .${slideLeft}-enter {
    ${animationEffect}
    transform: translate(100%, 0);
    animation-play-state: paused;
  }
  .${slideLeft}-leave {
    ${animationEffect}
    animation-play-state: paused;
  }
  .${slideLeft}-appear&.${slideLeft}-appear-active {
    animation-name: ${SlideLeftIn};
    animation-play-state: running;
  }
  .${slideLeft}-enter&.${slideLeft}-enter-active {
    animation-name: ${SlideLeftIn};
    animation-play-state: running;
  }
  .${slideLeft}-leave.${slideLeft}-leave-active {
    animation-name: ${SlideLeftOut};
    animation-play-state: running;
  }
`;

/**
 * 右滑动效
 */
const slideRight = 'LdsAnimateSlideRight';

const styledSlideRight = css`
  .${slideRight}-appear {
    ${animationEffect}
    transform: translate(-100%, 0);
    animation-play-state: paused;
  }
  .${slideRight}-enter {
    ${animationEffect}
    transform: translate(-100%, 0);
    animation-play-state: paused;
  }
  .${slideRight}-leave {
    ${animationEffect}
    animation-play-state: paused;
  }
  .${slideRight}-appear&.${slideRight}-appear-active {
    animation-name: ${SlideRightIn};
    animation-play-state: running;
  }
  .${slideRight}-enter&.${slideRight}-enter-active {
    animation-name: ${SlideRightIn};
    animation-play-state: running;
  }
  .${slideRight}-leave.${slideRight}-leave-active {
    animation-name: ${SlideRightOut};
    animation-play-state: running;
  }
`;

export {
  fade,
  styledFade,
  zoom,
  styledZoom,
  slideUp,
  slideDown,
  slideLeft,
  slideRight,
  styledSlideUp,
  styledSlideDown,
  styledSlideLeft,
  styledSlideRight,
};
