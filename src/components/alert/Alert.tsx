import * as React from 'react';
import { Component } from 'react';
import className from 'classnames';
import Icon from '../icon';

export interface AlertProps {
    type: string,
    closable: Function,
    onClose: Function
}

interface AlertState {
    closed: boolean
};

class Alert extends Component<AlertProps, AlertState> {
    static prefix = 'cooAlert';
    static defaultProps = {
        closable: true,
        type: 'primary'
    }

    state = {
        closed: false
    }

    onClose () {
        this.setState({
            closed: true
        });
        if ('onClose' in this.props) {
            this.props.onClose();
        }
    }

    render () {
        const { props, state} = this;
        const alertClassName = className({
            [Alert.prefix]: true,
            [`${Alert.prefix}--${props.type}`]: true
        });

        return closed ? null : (
            <div className={alertClassName}>
                { props.children }
                {
                    props.closable ?
                        (<a href="javascript:;"
                            className={className(`${Alert.prefix}-close`)}
                            onClick={this.onClose.bind(this)}><Icon type="close" /></a>)
                        : null
                }
            </div>
        );
    }
}

export default Alert;