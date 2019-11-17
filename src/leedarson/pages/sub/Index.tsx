import * as React from "react";
import Navbar from '../../components/Navbar/Index';
import SubRoute from '../../components/SubRoute/Index';
import Grandfather from './Grandfather';
import {Link, BrowserRouter as Router} from 'react-router-dom';

const Sub = () =>  {
    return (
        <Router>
            <Navbar />
            <h1>子路由</h1>
            <Link to="/sub/grandfather?transition_key=family">Grandfather</Link>
            <SubRoute path="/sub/grandfather" render={() =>  {
                return (
                    <Grandfather />
                )
            }} />
        </Router>
    );
};


export default Sub; 