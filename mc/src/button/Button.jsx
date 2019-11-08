import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import uiPropTypes from '../propTypes';
import StyledButton from './StyledButton';
import Loading from '../loading';
import { EMPTY_FUNCTION } from '../constants';

const Button = props => {
  const {
    children,
    type,
    size,
    color,
    block,
    round,
    textAlign,
    disabled,
    loading,
    plain,
    theme,
    shadow,
    className,
    onClick,
    ...restProps
  } = props;

  let loadingColor = '#fff';
  if (loading) {
    loadingColor = plain ? theme[type].main : theme[type].text;
  }

  const handleProxyClick = useCallback(
    e => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      onClick();
    },
    [disabled, onClick],
  );

  return (
    <StyledButton
      type={type}
      size={size}
      block={+block}
      colored={color || ''}
      round={+round}
      align={textAlign}
      disabled={+disabled}
      plain={+plain}
      shadow={shadow || type === 'primary' ? 'primary' : 'normal'}
      className={className}
      onClick={handleProxyClick}
      {...restProps}
    >
      {loading ? <Loading color={loadingColor} /> : children}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: 'primary',
  size: 'medium',
  color: null,
  textAlign: 'center',
  block: true,
  round: false,
  disabled: false,
  loading: false,
  plain: false,
  theme: {},
  shadow: null,
  className: '',
  onClick: EMPTY_FUNCTION,
};

Button.propTypes = {
  type: uiPropTypes.button,
  size: uiPropTypes.size,
  color: uiPropTypes.color,
  textAlign: uiPropTypes.textAlign,
  block: PropTypes.bool,
  round: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  plain: PropTypes.bool,
  theme: uiPropTypes.theme,
  shadow: uiPropTypes.shadow,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default withTheme(Button);
