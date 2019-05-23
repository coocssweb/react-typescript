import * as React from 'react';
import { Component } from 'react';
import className from 'classnames';
import { Button, Alert } from '@components/index';
import { Link } from 'react-router-dom';
import { UserInfo } from '@constants/interface';

interface LoginProps {
    fetchInfo: Function,
    info: UserInfo,
    login: Function,
    logout: Function,
    history: any
};

interface LoginState {
    info: UserInfo,
    submitting: boolean,
    alertInfo: string,
    alertType: string,
    showAlert: boolean,
    loading: boolean
};

class Index extends Component<LoginProps, LoginState> {
    state:LoginState = {
        info: null,
        submitting: false,
        alertInfo: '',
        alertType: 'primary',
        showAlert: false,
        loading: true
    }

    private nameRef:HTMLInputElement;
    private passwordRef:HTMLInputElement;

    constructor(props: LoginProps) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleInputFocus = this.handleInputFocus.bind(this);
    }

    static getDerivedStateFromProps (props: LoginProps, state: LoginState) {
        return {
            info: props.info
        };
    }

    componentDidMount () {
        document.title = '登录';
        this.props.fetchInfo();
    }

    handleInputFocus () {
        this.setState({
            showAlert: false,
        });
    }

    setTip (info, type) {
        this.setState({
            alertInfo: info,
            alertType: type,
            showAlert: true
        });
    }

    handleLogin () {
        if (this.state.submitting) {
            return false;
        }
        const name = this.nameRef.value.trim();
        const password = this.passwordRef.value!.trim();

        if (!name) {
            return this.setTip('请输入用户名', 'danger');
        }

        if (!password) {
            return this.setTip('请输入密码', 'danger');
        }

        this.setState({
            submitting: true
        });

        this.props.login(name, password, (result) => {
            if (result.meta.code > 0) {
                this.setTip('登录失败，用户名或密码错误', 'danger');
                this.setState({
                    submitting: false
                });
                return false;
            }
            setTimeout(() => {
                this.props.history.replace('/main/tags');
            }, 0);
        });
    }

    handleLogout () {
        this.props.logout();
    }

    render () {
        const state = this.state;
        return (
            <div className={className('login')}>
                <div className={className('login-mask')} />
                <div className={className('loginForm')}>
                    <div className={className('loginForm-title')}>JX.Wang</div>

                    {
                        state.info ? (
                            <React.Fragment>
                                <Link to="/main/default" className={className('loginInfo')}>
                                    <img src={state.info.avatar} className={className('loginInfo-avatar')} />
                                    <div className={className('loginInfo-nickname')}>{state.info.nickname}</div>
                                    <div className={className('loginInfo-name')}>{state.info.username}</div>
                                </Link>
                                <div className={className('loginForm-line loginForm-line--right')}>
                                    <Button
                                        type="primary"
                                        loading={state.submitting}
                                        onClick={this.handleLogout}>退出</Button>
                                </div>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <div className={className('loginForm-subtitle')}>登录</div>
                                <div className={className('loginForm-line')}>
                                    <input
                                        className={className('loginForm-input')}
                                        placeholder="请输入用户名"
                                        type="text"
                                        aria-required="true"
                                        autoComplete="true"
                                        ref={ ref => { this.nameRef = ref; } }
                                        onFocus={this.handleInputFocus} />
                                </div>
                                <div className={className('loginForm-line')}>
                                    <input
                                        className={className('loginForm-input')}
                                        placeholder="请输入密码"
                                        type="password"
                                        aria-required="true"
                                        ref={ ref => { this.passwordRef = ref; } }
                                        onFocus={this.handleInputFocus} />
                                </div>

                                <div className={className({'loginForm-line': true, 'loginForm-line--hide': !state.showAlert })}>
                                    <Alert
                                        onClose={() => { this.setState({ showAlert: false }) }}
                                        type={state.alertType}>
                                        {state.alertInfo}
                                    </Alert>
                                </div>
                                <div className={className('loginForm-line loginForm-line--right')}>
                                    <Button
                                        fill
                                        type="primary"
                                        loading={state.submitting}
                                        onClick={this.handleLogin}>登录</Button>
                                </div>
                            </React.Fragment>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Index;
