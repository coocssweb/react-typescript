import  * as React from 'react';
import className from 'classnames';
import { Route, Switch, Link } from 'react-router-dom';
import Home from '../containers/home';
import Demos from '../containers/demo';

interface Props {

};

interface State {

};

class Index extends React.Component {
    constructor (props: Props) {
       super(props);
    }

    render () {
        const state = this.state;
        return (
            <React.Fragment>
                <div className={className({'globalHeader': true})}>
                    <div className={className('globalHeader-content')}>
                        <nav className={className('globalHeader-nav globalHeader-nav--pc')}>
                            <Link
                                to="/"
                                className={className('globalHeader-menu')}>首页</Link>
                            <Link
                                to="/demos"
                                className={className('globalHeader-menu')}>实验室</Link>
                        </nav>
                    </div>
                </div>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/demos" component={Demos} exact />
                </Switch>
            </React.Fragment>
        );
    }
}

export default Index;
