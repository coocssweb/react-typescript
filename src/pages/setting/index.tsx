import * as React from 'react';
import { Link } from 'react-router-dom';

const Setting = ({history}) => {
    return (
        <div className="page page-leave page-setting transition-item" >
            <ul>
                <li><Link to='/profile'>to profile page</Link></li>
                <li><Link to='/modify'>to modify page</Link></li>
            </ul>
            <div>
                Setting Page
            </div>
        </div>
    );
}

export default Setting;