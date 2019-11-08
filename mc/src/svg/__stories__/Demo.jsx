/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import Styled from 'styled-components';
import { Grid, GridItem, Svg } from '../../index';

const StyledSquare = Styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  background-color: #fff;
  border-radius: 4px;
`;

const StyledSquareContent = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Demo = () => {
  return (
    <div className="demo">
      <div className="demo-title">Svg 多皮肤定制 </div>
      <div className="demo-box">
        <Grid cols={4} border={false} spacing={2}>
          <GridItem>
            <StyledSquare>
              <StyledSquareContent>
                <Svg src="https://coocssweb.github.io/dist/images/plug.svg" width={100} />
              </StyledSquareContent>
            </StyledSquare>
          </GridItem>
          <GridItem>
            <StyledSquare>
              <StyledSquareContent>
                <Svg src="https://coocssweb.github.io/dist/images/plug.svg" colors={['#999']} width={100} />
              </StyledSquareContent>
            </StyledSquare>
          </GridItem>
          <GridItem>
            <StyledSquare>
              <StyledSquareContent>
                <Svg
                  src="https://coocssweb.github.io/dist/images/plug.svg"
                  colors={['#ff0000', '#1bb953']}
                  width={100}
                />
              </StyledSquareContent>
            </StyledSquare>
          </GridItem>
          <GridItem>
            <StyledSquare>
              <StyledSquareContent>
                <Svg src="https://coocssweb.github.io/dist/images/plug.svg" colors={['#992edc', '#fff']} width={100} />
              </StyledSquareContent>
            </StyledSquare>
          </GridItem>
          <GridItem>
            <StyledSquare>
              <StyledSquareContent>
                <Svg src="https://coocssweb.github.io/dist/images/gate.svg" width={100} />
              </StyledSquareContent>
            </StyledSquare>
          </GridItem>
          <GridItem>
            <StyledSquare>
              <StyledSquareContent>
                <Svg src="https://coocssweb.github.io/dist/images/gate.svg" colors={['#999']} width={100} />
              </StyledSquareContent>
            </StyledSquare>
          </GridItem>
          <GridItem>
            <StyledSquare>
              <StyledSquareContent>
                <Svg
                  src="https://coocssweb.github.io/dist/images/gate.svg"
                  colors={['#ff0000', '#1bb953']}
                  width={100}
                />
              </StyledSquareContent>
            </StyledSquare>
          </GridItem>
          <GridItem>
            <StyledSquare>
              <StyledSquareContent>
                <Svg src="https://coocssweb.github.io/dist/images/gate.svg" colors={['#992edc', '#fff']} width={100} />
              </StyledSquareContent>
            </StyledSquare>
          </GridItem>
          <GridItem>
            <StyledSquare>
              <StyledSquareContent>
                <Svg src="https://coocssweb.github.io/dist/images/windows.svg" width={100} />
              </StyledSquareContent>
            </StyledSquare>
          </GridItem>
          <GridItem>
            <StyledSquare>
              <StyledSquareContent>
                <Svg src="https://coocssweb.github.io/dist/images/windows.svg" colors={['#999']} width={100} />
              </StyledSquareContent>
            </StyledSquare>
          </GridItem>
          <GridItem>
            <StyledSquare>
              <StyledSquareContent>
                <Svg
                  src="https://coocssweb.github.io/dist/images/windows.svg"
                  colors={['#ff0000', '#1bb953']}
                  width={100}
                />
              </StyledSquareContent>
            </StyledSquare>
          </GridItem>
          <GridItem>
            <StyledSquare>
              <StyledSquareContent>
                <Svg
                  src="https://coocssweb.github.io/dist/images/windows.svg"
                  colors={['#992edc', '#fff']}
                  width={100}
                />
              </StyledSquareContent>
            </StyledSquare>
          </GridItem>
        </Grid>
      </div>
    </div>
  );
};

export default Demo;
