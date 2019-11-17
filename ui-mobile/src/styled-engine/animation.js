/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-20 12:11:15
 * Copyright © Leedarson. All rights reserved.
 */

import { keyframes, css } from 'styled-components';

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

// 基础动画
const animationEffect = css`
  animation-duration: 0.4s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
`;

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

export { fade, styledFade, slideUp, styledSlideUp, slideDown, styledSlideDown };
