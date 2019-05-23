import * as React from 'react';
import { Component } from 'react';
import className from 'classnames';
import Loading from '../loading';

export interface ButtonProps {
    loading?: boolean,
    onClick?: Function,
    type: string,
    size: string,
    disabled: boolean,
    circle: boolean,
    fill: boolean,
    className: string,
};

interface ButtonState {};

class Button extends Component<ButtonProps, ButtonState> {
    static prefixCls = 'cooButton';
    static defaultProps: ButtonProps = {
        size: 'default',
        disabled: false,
        type: 'primary',
        circle: false,
        fill: false,
        loading: false,
        className: '',
    };

    state: ButtonState = {

    }

    onClick (e) {
        const props = this.props;
        if (props.loading) {
            return false;
        }
        if ('onClick' in props) {
            props.onClick(e);
        }
    }

    render () {
        const props = this.props;
        const buttonClassName = className({
            [Button.prefixCls]: true,
            [`${Button.prefixCls}--${props.type}`]: true,
            [`${Button.prefixCls}--${props.size}`]: true,
            [`${Button.prefixCls}--disable`]: props.disabled,
            [`${Button.prefixCls}--circle`]: props.circle,
            [`${Button.prefixCls}--fill`]: props.fill,
            [`${Button.prefixCls}--loading`]: props.loading,
            [props.className]: true
        });

        return (
            <button className={buttonClassName}
                    onClick={this.onClick.bind(this)}>
                {
                    props.loading ? (<Loading color={ props.fill ? '#FFFFFF' : '' } />) : this.props.children
                }
            </button>
        );
    }
}

export default Button;
