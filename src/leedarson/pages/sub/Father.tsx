import * as React from "react";
import Navbar from '../../components/Navbar/Index';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import SubRoute from '../../components/SubRoute/Index';
import Xiaoming from './Xiaoming'
const Father = () =>  {
    return (
        <Router>
            <Navbar />
            <h1>Father</h1>
            <Link to="/sub/grandfather/father/xiaoming?transition_key=family">father</Link>
            <SubRoute path="/sub/grandfather/father/xiaoming" render={() =>  {
                return (
                    <Xiaoming />
                )
            }} />
        </Router>
    );
};


export default Father; 