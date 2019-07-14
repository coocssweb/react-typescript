import * as React from 'react';
import { detailInitialState, detailReducer } from './reducer';

export default () => {
    return React.useReducer(detailReducer, detailInitialState);
};
