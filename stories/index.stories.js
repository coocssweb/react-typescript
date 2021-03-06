import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, con } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';
import Demo from '../src/components/demo/index.tsx';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
  
  storiesOf('Demo', module).add('demo', 
    () => <Demo onClick={action('clicked')}>Demo Button</Demo>,
    {
      notes: 'A very simple example of addon notes',
    }
  );