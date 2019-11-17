/* eslint-disable react/forbid-prop-types */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import StyledButton from './StyledButton';
import Loading from '../loading';
import { strToSandUpperCase } from '../styled-engine';

const Button = props => {
  const { children, type, size, block, round, disabled, loading, plain, theme, className, ...restProps } = props;
  // 首字母大写
  // default => Default, primary => Primary，...
  const typeSandUpperCase = useMemo(() => strToSandUpperCase(type), [type]);
  // loading 状态, loading的颜色
  const loadingColor = plain ? theme[`color${typeSandUpperCase}`] : theme.colorWhite;

  return (
    <StyledButton
      type={typeSandUpperCase}
      size={size}
      block={block}
      round={round}
      disabled={disabled}
      plain={plain}
      className={className}
      {...restProps}
    >
      {loading ? <Loading color={loadingColor} /> : children}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: 'default',
  size: 'large',
  block: false,
  round: false,
  disabled: false,
  loading: false,
  plain: false,
  theme: {},
  className: '',
};

Button.propTypes = {
  type: PropTypes.oneOf(['default', 'primary', 'success', 'warn', 'danger']),
  size: PropTypes.oneOf(['small', 'large']),
  block: PropTypes.bool,
  round: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  plain: PropTypes.bool,
  theme: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withTheme(Button);
