/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import Styled from 'styled-components';
import { THEME_COLORS } from '../../constants';
import { Button, WingBlank, WhiteSpace, Grid, GridItem } from '../../index';

const StyledSquare = Styled.div`
  width: 100%;
  position: relative;
  background-color: #ffffff;
  border-radius: 4px;
`;

const BUTTONS = ['text', ...THEME_COLORS];

const Demo = () => {
  const handleOnClick = () => {};

  return (
    <div className="demo">
      <div className="demo-title">常用按钮</div>
      <div className="demo-box">
        <WingBlank spacing={4}>
          <Button type="primary">Primary</Button>
          <WhiteSpace spacing={4} />
          <Button type="primary" disabled>
            Primary 禁用
          </Button>
          <WhiteSpace spacing={4} />
          <Button type="error">Error</Button>
          <WhiteSpace spacing={4} />
          <Button type="error" disabled>
            Error 禁用
          </Button>
          <WhiteSpace spacing={4} />
          <Button type="surface" color="error" textAlign="left">
            Logout
          </Button>
          <WhiteSpace spacing={4} />
          <Button type="primary" plain>
            PrimaryPlain
          </Button>
          <WhiteSpace spacing={4} />
          <Button type="primary" plain disabled>
            PrimaryPlain 禁用
          </Button>
          <WhiteSpace spacing={4} />
          <Button type="neuter700" plain>
            Neuter700Plain
          </Button>
          <WhiteSpace spacing={4} />
          <Button type="neuter700" plain disabled>
            Neuter700Plain 禁用
          </Button>
        </WingBlank>
      </div>
      <div className="demo-title">文字按钮</div>
      <div className="demo-box">
        <WingBlank spacing={4}>
          <Button type="text" color="primary" textAlign="left">
            Link
          </Button>
          <WhiteSpace spacing={4} />{' '}
          <Button type="text" color="neuter900" textAlign="left">
            Link
          </Button>
        </WingBlank>
      </div>
      <div className="demo-title">Button All</div>
      <div className="demo-box">
        <WingBlank spacing={4}>
          <Grid cols={2} border={false} spacing={2}>
            {BUTTONS.map(type => (
              <GridItem key={type}>
                <StyledSquare>
                  <Button type={type}>{type}</Button>
                </StyledSquare>
              </GridItem>
            ))}
          </Grid>
        </WingBlank>
      </div>

      <div className="demo-title">Button Loading</div>
      <div className="demo-box">
        <WingBlank spacing={4}>
          <Grid cols={2} border={false} spacing={2}>
            <GridItem>
              <StyledSquare>
                <Button type="primary" loading>
                  Primary
                </Button>
              </StyledSquare>
            </GridItem>
            <GridItem>
              <StyledSquare>
                <Button type="primary" plain loading>
                  Primary
                </Button>
              </StyledSquare>
            </GridItem>
          </Grid>
        </WingBlank>
      </div>

      <div className="demo-title">Button Size</div>
      <div className="demo-box">
        <WingBlank spacing={4}>
          <Grid cols={1} border={false} spacing={2}>
            <GridItem>
              <StyledSquare>
                <Button type="primary" size="small">
                  Small
                </Button>
              </StyledSquare>
            </GridItem>
            <GridItem>
              <StyledSquare>
                <Button type="primary">Medium</Button>
              </StyledSquare>
            </GridItem>
          </Grid>
        </WingBlank>
      </div>
    </div>
  );
};

export default Demo;
