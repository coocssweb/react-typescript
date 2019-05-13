import * as React from 'react';
import classNames from 'classnames';
// #todo# why Module not found, when use @actions and @reducers?
// import * as hooksActions from '@actions/hooks.ts';
// import hooksReducer, { initialState } from '@reducers/hooks.ts';
import * as hooksActions from '../../../../redux/actions/hooks';
import hooksReducer, { initialState } from '../../../../redux/reducers/hooks';

export default (props: any) => {
    const [state, dispatch] = React.useReducer(hooksReducer, initialState);
    // const [state, dispatch] = React.useReducer(hooksReducer, undefined, () => { return { name: '阿伦·艾弗森'} });

    return (
        <div className={classNames('redux-hooks')}>
            <button onClick={() => { dispatch(hooksActions.changeName('科比·布莱恩特')) }}>change name</button>
            <br />
            current name: { state.name }
        </div>
    );
}
