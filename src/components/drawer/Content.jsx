import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import className from 'classnames';
import propTypes from 'prop-types';
import Icon from '../icon';
import {CSSTransition} from 'react-transition-group';
import {isNodeFound, windowScroll} from '../_util/domHelper';

class Content extends Component {
    constructor (props) {
        super(props);
        this.contentRef = React.createRef();
        this.el = document.createElement('div');
        this.state = {
            visible: true,
            hidden: false
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

    getNativeDOMNode () {
        if (!this.nativeDOMNode) {
            this.nativeDOMNode = ReactDOM.findDOMNode(this.contentRef.current);
        }
        return this.nativeDOMNode;
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

    onMaskClick (evt) {
        const props = this.props;
        if (!props.maskClosable) {
            return false;
        }
        if (!isNodeFound(evt.target, this.getNativeDOMNode())) {
            this.setStateVisible(false);
            if ('onClose' in props) {
                props.onClose();
            }
        }
    }

    onCloseClick () {
        const props = this.props;
        this.setStateVisible(false);
        if ('onClose' in props) {
            props.onClose();
        }
    }

    /**
     * mask 淡入动画
     */
    renderMask () {
        let state = this.state;
        let maskClassName = className({
            'cooDrawer-mask': true,
            'cooDrawer-mask--hidden': state.hidden
        });

        return (
            <CSSTransition
                in={state.visible}
                timeout={300}
                classNames="cooFade"
                onExited={this.afterClose.bind(this)}>
                <div className={maskClassName} onClick={this.onMaskClick.bind(this)} />
            </CSSTransition>
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

    renderCloseButton () {
        const props = this.props;
        const types = {
            top: 'up',
            bottom: 'down',
            right: 'right',
            left: 'left'
        };
        const closeButtonClassName = className({
            'cooDrawer-button': true,
            [`cooDrawer-button--${props.placement}`]: true
        });

        return (
            <button className={closeButtonClassName} onClick={this.onCloseClick.bind(this)}>
                <Icon type={types[props.placement]} />
            </button>
        );
    }

    render () {
        const props = this.props;
        const state = this.state;
        let placement = props.placement.replace(/^[a-z]/g, (L) => L.toUpperCase());
        const wrapClassName = className({
            'cooDrawer-wrap': true,
            [`cooDrawer-wrap--${props.placement}`]: true,
            'cooDrawer-wrap--hidden': state.hidden
        });

        let contentStyle;
        if (props.placement === 'left' || props.placement === 'right') {
            contentStyle = {
                width: `${props.size}px`
            };
        } else {
            contentStyle = {
                height: `${props.size}px`
            };
        }

        return ReactDOM.createPortal(
            (
                <React.Fragment>
                    { this.renderMask() }
                    <CSSTransition
                        in={state.visible}
                        timeout={500}
                        classNames={`cooSlide${placement}`}>
                        <div
                             className={wrapClassName}
                             ref={this.contentRef}>
                            {
                                props.closable
                                    ? this.renderCloseButton()
                                    : null
                            }
                            <div className="cooDrawer-content" style={ contentStyle }>
                                {
                                    props.title
                                        ? (<div className="cooDrawer-header">{props.title}</div>)
                                        : null
                                }
                                <div className="cooDrawer-body">
                                    {props.children}
                                </div>
                            </div>
                        </div>
                    </CSSTransition>
                </React.Fragment>
            ),
            this.el
        );
    }
}

Content.propTypes = {
    placement: propTypes.string,
    title: propTypes.string
};

export default Content;
