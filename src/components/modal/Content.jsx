import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import className from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { isNodeFound, windowScroll } from '../_util/domHelper';
import Button from '../button';
import Icon from '../icon';

class Content extends Component {
    constructor (props) {
        super(props);
        this.el = document.createElement('div');
        this.contentRef = React.createRef();
        this.state = {
            hidden: false,
            visible: true
        };
        windowScroll(false);
    }

    componentDidMount () {
        document.body.appendChild(this.el);
    }

    componentWillUnmount () {
        document.body.removeChild(this.el);
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.visible !== this.state.visible) {
            this.setStateVisible(nextProps.visible);
        }
    }

    setStateVisible (visible) {
        if (visible) {
            windowScroll(false);
            this.setState({
                visible,
                hidden: false
            });
        } else {
            this.setState({
                visible
            });
        }
    }

    getNativeDOMNode () {
        if (!this.nativeDOMNode) {
            this.nativeDOMNode = ReactDOM.findDOMNode(this.contentRef.current);
        }
        return this.nativeDOMNode;
    }

    onCloseClick () {
        this.setStateVisible(false);
    }

    onMaskClick (evt) {
        if (!isNodeFound(evt.target, this.getNativeDOMNode())) {
            this.setStateVisible(false);
        }
    }

    onCancelClick () {
        const props = this.props;
        if ('onCancel' in props) {
            props.onCancel();
        } else {
            this.setStateVisible(false);
        }
    }

    onOkClick () {
        const props = this.props;
        if ('onOk' in props) {
            props.onOk();
        } else {
            this.setStateVisible(false);
        }
    }

    renderTitle () {
        const props = this.props;
        if (!props.title) {
            return null;
        }

        return (
            <div className={className('cooModal-title')}>
                {props.title}
            </div>
        );
    }

    afterClose () {
        windowScroll(true);
        let props = this.props;
        if (props.destroyOnClose) {
            props.afterClose();
        } else {
            this.setState({
                hidden: true
            });
        }
    }

    renderFooter () {
        const props = this.props;
        if (props.toast || (!props.okText && !props.cancelText)) {
            return null;
        }

        return (
            <div className={className('cooModal-footer')}>
                {
                    props.cancelText ? (
                        <Button type="normal" onClick={this.onCancelClick.bind(this)}>{props.cancelText}</Button>
                    ) : null
                }
                {
                    props.okText ? (
                        <Button onClick={this.onOkClick.bind(this)}>{props.okText}</Button>
                    ) : null
                }
            </div>
        );
    }

    renderToastFooter () {
        const props = this.props;
        if (!props.toast || (!props.okText && !props.cancelText)) {
            return null;
        }
        return (
            <div className={className('cooModal-toast-footer')}>
                {
                    props.cancelText ? (
                        <Button transparent type="normal" onClick={this.onCancelClick.bind(this)}>{props.cancelText}</Button>
                    ) : null
                }
                {
                    props.okText ? (
                        <Button transparent onClick={this.onOkClick.bind(this)}>{props.okText}</Button>
                    ) : null
                }
            </div>
        );
    }

    renderCloseButton () {
        const props = this.props;
        if (!props.closable) {
            return null;
        }

        return (
            <a href="javascript:;" className={className('cooModal-close')}
                    onClick={this.onCloseClick.bind(this)}>
                <Icon type="close" />
            </a>
        );
    }

    renderMask () {
        let state = this.state;
        let maskClassName = className({
            'cooModal-mask': true,
            'cooModal-mask--hidden': state.hidden
        });

        return (
            <CSSTransition
                in={state.visible}
                timeout={300}
                classNames="cooFade"
                onExited={this.afterClose.bind(this)}>
                <div className={maskClassName} />
            </CSSTransition>
        );
    }

    render () {
        const props = this.props;
        const state = this.state;
        const wrapClassName = className({
            'cooModal-wrap': true,
            'cooModal-wrap--hidden': state.hidden
        });

        const contentClassName = className({
            'cooModal': true,
            'cooModal-toast': props.toast,
        });

        return ReactDOM.createPortal(
            (
                <React.Fragment>
                    { this.renderMask() }
                    <CSSTransition
                        in={state.visible}
                        timeout={500}
                        classNames="cooScale">
                        <div className={wrapClassName}
                             onClick={this.onMaskClick.bind(this)}>
                            <div style={{width: `${props.width}px`}}
                                 className={contentClassName}
                                 ref={this.contentRef}>
                                { this.renderCloseButton() }
                                { this.renderTitle() }
                                <div className={className('cooModal-body')}>
                                    {props.children}
                                    { this.renderToastFooter() }
                                </div>
                                { this.renderFooter() }
                            </div>
                        </div>
                    </CSSTransition>
                </React.Fragment>
            ),
            this.el
        );
    }
}

export default Content;
