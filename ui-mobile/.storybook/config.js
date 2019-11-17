import { configure, addParameters, addDecorator } from '@storybook/react';
import { create } from '@storybook/theming';
import { jsxDecorator } from 'storybook-addon-jsx';
import * as React from 'react';
import { GlobalStyle } from '../src/index';

addDecorator(jsxDecorator);

const basicTheme = create({
  brandTitle: 'IOT UI Mobile',
  brandUrl: '#',
  brandImage: null,
});

addParameters({
  options: {
    panelPosition: 'right',
    theme: basicTheme,
  },
  viewport: {
    defaultViewport: 'iphone6',
  },
});

const req = require.context('../src/', true, /\.story\.jsx$/);
function loadStories() {
  req.keys().forEach(req);
}
const withGlobal = cb => (
  <React.Fragment>
    <GlobalStyle />
    {cb()}
  </React.Fragment>
);
addDecorator(withGlobal);
configure(loadStories, module);
