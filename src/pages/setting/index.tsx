import * as React from 'react';
import { Link } from 'react-router-dom';

const request = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(1000);
        }, 1000);
    });
}

const fetch = async () => {
    return request();
}


const Setting = ({history}) => {

    const fetchData = async () => {
        fetch().then((result) => {
            console.log(result);
        });
    }

    fetchData();

    return (
        <>
            <ul>
                <li><Link to='/profile'>to profile page</Link></li>
                <li><Link to='/modify'>to modify page</Link></li>
            </ul>
            <div>
                Setting Page
            </div>
        </>
    );
}

export default Setting;