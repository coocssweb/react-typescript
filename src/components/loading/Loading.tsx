import * as React from 'react';
import className from 'classnames';

type LoadingSize = 'small' |  'default' | 'large';
type LoadingType  = 'primary' | 'success' | 'normal' | 'danger' | 'white';

interface LoadingProps {
    color: string,
    size: LoadingSize,
    type: LoadingType
};

interface LoadingState {

};

class Loading extends React.Component<LoadingProps, LoadingState> {
    static defaultProps: LoadingProps = {
        size: 'default',
        type: 'primary',
        color: ''
    };
    state = {};
    
    render () {
        let style = {};
        if (this.props.color) {
            style = {
                backgroundColor: this.props.color
            };
        }
        return (
            <div className={className({ 'cooLoading': true, [`cooLoading--${this.props.size}`]: true })}>
                <span className={className('cooLoading-item cooLoading-item--1')} style={style}></span>
                <span className={className('cooLoading-item cooLoading-item--2')} style={style}></span>
                <span className={className('cooLoading-item cooLoading-item--3')} style={style}></span>
            </div>
        );
    }
}

export default Loading;

