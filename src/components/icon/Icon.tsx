import * as React from 'react';
import { Component } from 'react';
import * as propTypes from 'prop-types';
import className from 'classnames';

interface IconProps {
    type: string
};

interface IconState {};

class Icon extends Component<IconProps, IconState> {
    static prefixCls = 'cooIcon';
    static defaultProps: IconState = {
        type: '' 
    };
    state:IconState = {};

    render () {
        const iconClassName = className({
            [Icon.prefixCls]: true,
            [`${Icon.prefixCls}-${this.props.type}`]: true
        });
        return (
            <i className={iconClassName} />
        );
    }
}

export default Icon;
