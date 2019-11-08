import * as React from 'react';
import { Link } from 'react-router-dom';

const Setting = ({history}) => {


    return (
        <>
            Father 页面
            <ul>
                <li><Link to='/son'>to son</Link></li>
            </ul>
        </>
    );
}

export default Setting;