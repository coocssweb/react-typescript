/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 11:56:33
 * Copyright © Leedarson. All rights reserved.
 */

import { css } from 'styled-components';

const eot = require('./icomoon.eot');
const ttf = require('./icomoon.ttf');
const woff = require('./icomoon.woff');
const svg = require('./icomoon.svg');

export default css`
  @font-face {
    font-family: LdsIcon;
    font-weight: normal;
    font-style: normal;
    src: url(${eot});
    src: url(${eot}) format('embedded-opentype'), url(${ttf}) format('truetype'), url(${woff}) format('woff'),
      url(${svg}) format('svg');
    font-display: fallback;
  }

  [class^='LdsIcon-'],
  [class*=' LdsIcon-'] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: LdsIcon, sans-serif !important;
    display: inline-block;
    vertical-align: middle;
    font-style: normal;
    font-weight: normal;
    font-size: inherit;
    text-rendering: auto;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .LdsIcon-arrow-down:before {
    content: '\\e900';
  }
  .LdsIcon-arrow-left:before {
    content: '\\e901';
  }
  .LdsIcon-arrow-right:before {
    content: '\\e902';
  }
  .LdsIcon-arrow-up:before {
    content: '\\e903';
  }
  .LdsIcon-automatio:before {
    content: '\\e904';
  }
  .LdsIcon-back:before {
    content: '\\e905';
  }
  .LdsIcon-bettery:before {
    content: '\\e906';
  }
  .LdsIcon-bright:before {
    content: '\\e907';
  }
  .LdsIcon-bright-less:before {
    content: '\\e908';
  }
  .LdsIcon-cleaner-reset:before {
    content: '\\e909';
  }
  .LdsIcon-clear:before {
    content: '\\e90a';
  }
  .LdsIcon-countdown:before {
    content: '\\e90b';
  }
  .LdsIcon-curtain-close:before {
    content: '\\e90c';
  }
  .LdsIcon-curtain-open:before {
    content: '\\e90d';
  }
  .LdsIcon-edit:before {
    content: '\\e90e';
  }
  .LdsIcon-email:before {
    content: '\\e90f';
  }
  .LdsIcon-eye-close:before {
    content: '\\e910';
  }
  .LdsIcon-eye-open:before {
    content: '\\e911';
  }
  .LdsIcon-fail:before {
    content: '\\e912';
  }
  .LdsIcon-favourite:before {
    content: '\\e913';
  }
  .LdsIcon-favourite-selected:before {
    content: '\\e914';
  }
  .LdsIcon-group:before {
    content: '\\e915';
  }
  .LdsIcon-group-selected:before {
    content: '\\e916';
  }
  .LdsIcon-home:before {
    content: '\\e917';
  }
  .LdsIcon-integration:before {
    content: '\\e918';
  }
  .LdsIcon-location:before {
    content: '\\e919';
  }
  .LdsIcon-lock:before {
    content: '\\e91a';
  }
  .LdsIcon-menu:before {
    content: '\\e91b';
  }
  .LdsIcon-more:before {
    content: '\\e91c';
  }
  .LdsIcon-password:before {
    content: '\\e91f';
  }
  .LdsIcon-pause:before {
    content: '\\e920';
  }
  .LdsIcon-phone:before {
    content: '\\e921';
  }
  .LdsIcon-play:before {
    content: '\\e922';
  }
  .LdsIcon-plus:before {
    content: '\\e923';
  }
  .LdsIcon-power:before {
    content: '\\e924';
  }
  .LdsIcon-record:before {
    content: '\\e925';
  }
  .LdsIcon-remove:before {
    content: '\\e926';
  }
  .LdsIcon-scan:before {
    content: '\\e927';
  }
  .LdsIcon-scese:before {
    content: '\\e928';
  }
  .LdsIcon-search:before {
    content: '\\e929';
  }
  .LdsIcon-security:before {
    content: '\\e92a';
  }
  .LdsIcon-selected:before {
    content: '\\e92b';
  }
  .LdsIcon-setting:before {
    content: '\\e92c';
  }
  .LdsIcon-sort:before {
    content: '\\e92d';
  }
  .LdsIcon-speed:before {
    content: '\\e92e';
  }
  .LdsIcon-speed-low:before {
    content: '\\e92f';
  }
  .LdsIcon-speed-middle:before {
    content: '\\e930';
  }
  .LdsIcon-speed-strong:before {
    content: '\\e931';
  }
  .LdsIcon-success:before {
    content: '\\e932';
  }
  .LdsIcon-timer:before {
    content: '\\e933';
  }
  .LdsIcon-trash:before {
    content: '\\e934';
  }
  .LdsIcon-triangle:before {
    content: '\\e935';
  }
  .LdsIcon-user:before {
    content: '\\e936';
  }
  .LdsIcon-verification:before {
    content: '\\e937';
  }
  .LdsIcon-wifi:before {
    color: #666;
  }
`;
