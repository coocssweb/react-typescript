/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:04:23
 * Copyright © Leedarson. All rights reserved.
 */

import { css } from 'styled-components';

export default css`
  html {
    font-family: 'SF Pro Text', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    line-height: 1.15;
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    display: flex;
    flex-direction: column;
    color: #333;
  }
  html,
  body,
  #root,
  #root > div {
    height: 100%;
    overflow: hidden;
    margin: 0;
    -webkit-tap-highlight-color: transparent;
    -webkit-overflow-scrolling: touch;
  }
  body {
    margin: 0;
    font-size: 16px;
    flex: 1;
  }
  main {
    display: block;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  li,
  dl,
  dt,
  dd {
    user-select: none;
    padding: 0;
    margin: 0;
    list-style: none;
    font-weight: 400;
  }
  div {
    font-weight: inherit;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  pre {
    font-size: 1em;
  }
  div,
  a,
  button {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }
  a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    appearance: button;
  }
  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  [type='search'] {
    appearance: textfield;
    outline-offset: -2px;
  }
  [type='search']::-webkit-search-decoration {
    appearance: none;
  }
  ::-webkit-file-upload-button {
    appearance: button;
    font: inherit;
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none;
  }

  /* 以下为自定义 */
  ::-webkit-input-placeholder {
    color: #c0c4cc;
  }
  ::-moz-input-placeholder {
    color: #c0c4cc;
  }
  ::-o-input-placeholder {
    color: #c0c4cc;
  }
  .lds-sortable--active {
    box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.2), 0 -5px 5px -5px rgba(0, 0, 0, 0.2);
  }
  .lds-sortableSquare--active {
    .lds-square {
      background-color: #f5f5f5;
    }
  }
`;
