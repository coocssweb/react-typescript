import '@scss/pages/home.scss';
import  * as React from 'react';
import className from 'classnames';
import { Route, Switch, Link } from 'react-router-dom';
import StateHook from './hooks/stateHooks';
import EffectHook from './hooks/effectHooks';
import ContextHook from './hooks/contextHooks';
import ReducerHook from './hooks/reduxHooks';
import CallbackHook from './hooks/callbackHooks';
import MemoHooks from './hooks/memoHooks';
import RefHooks from './hooks/refHooks';

const Index = (props: {}) => {
    return (
        <React.Fragment>
            <div className={className('page')}>
                <h1 className={'page-title'}>演示：</h1>
                <ul className="examples">
                    <li>1. <Link to="/state_hook">state hook 演示</Link></li>
                    <li>2. <Link to="/effect_hook">effect hook 演示</Link></li>
                    <li>3. <Link to="/context_hook">context hook 演示</Link></li>
                    <li>4. <Link to="/reducer_hook">reducer hook 演示</Link></li>
                    <li>5. <Link to="/callback_hook">callback hook 演示</Link></li>
                    <li>6. <Link to="/memo_hook">memo hook 演示</Link></li>
                    <li>7. <Link to="/ref_hook">ref hook 演示</Link></li>
                </ul>
            </div>
            <Switch>
                <Route path="/state_hook" component={StateHook} exact />
                <Route path="/effect_hook" component={EffectHook} exact />
                <Route path="/context_hook" component={ContextHook} exact />
                <Route path="/reducer_hook" component={ReducerHook} exact />
                <Route path="/callback_hook" component={CallbackHook} exact />
                <Route path="/memo_hook" component={MemoHooks} exact />
                <Route path="/ref_hook" component={RefHooks} exact />
            </Switch>
        </React.Fragment>
    );
};

export default Index;
