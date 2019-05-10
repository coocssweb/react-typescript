import '@scss/pages/home.scss';
import  * as React from 'react';
import className from 'classnames';
import { Route, Switch, Link } from 'react-router-dom';
import StateHook from './hooks/stateHook';
import EffectHook from './hooks/effectHook';

const Index = (props: {}) => {
    return (
        <React.Fragment>
            <div className={className('page')}>
                <h1 className={'page-title'}>演示：</h1>
                <ul className="examples">
                    <li>1. <Link to="/state_hook">state hook 演示</Link></li>
                    <li>2. <Link to="/effect_hook">effect hook 演示</Link></li>
                </ul>
            </div>
            <Switch>
                <Route path="/state_hook" component={StateHook} exact />
                <Route path="/effect_hook" component={EffectHook} exact />
            </Switch>
        </React.Fragment>
    );
};

export default Index;
