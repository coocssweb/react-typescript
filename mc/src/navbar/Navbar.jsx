/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-10-30 10:22:22
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import uiPropTypes from '../propTypes';
import { StyledNavbarWrapper, StyledNotch, StyledNavbar, StyledLeft } from './StyledNavbar';
import Icon from '../icon';
import Flex from '../flex/Flex';
import FlexItem from '../flex/FlexItem';
import Box from '../box';
import Typography from '../typography';
import { EMPTY_FUNCTION } from '../constants';

const Navbar = ({ position, title, color, back, children, onBack, fill, history }) => {
  const handleBackClick = () => {
    if (onBack === EMPTY_FUNCTION) {
      history.goBack();
    } else {
      onBack(() => {
        history.goBack();
      });
    }
  };

  return (
    <StyledNavbarWrapper position={position}>
      <StyledNavbar color={color} fill={fill}>
        <StyledNotch />
        <FlexItem>
          <Flex>
            {back ? (
              <StyledLeft back={back} onClick={handleBackClick}>
                <Icon type="back" />
              </StyledLeft>
            ) : null}
            <FlexItem>
              <Typography size={36} weight={600}>
                {title}
              </Typography>
            </FlexItem>
            <Box minWidth={52}>{children}</Box>
          </Flex>
        </FlexItem>
      </StyledNavbar>
    </StyledNavbarWrapper>
  );
};

Navbar.defaultProps = {
  title: '',
  fill: 'background',
  color: 'neuter800',
  back: true,
  position: 'relative',
  onBack: EMPTY_FUNCTION,
  children: null,
  history: null,
};

Navbar.propTypes = {
  title: PropTypes.string,
  color: uiPropTypes.color,
  fill: uiPropTypes.color,
  back: PropTypes.bool,
  position: uiPropTypes.position,
  onBack: PropTypes.func,
  children: PropTypes.node,
  history: ReactRouterPropTypes.history,
};

export default Navbar;
