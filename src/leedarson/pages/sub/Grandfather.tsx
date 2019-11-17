import * as React from "react";
import Navbar from '../../components/Navbar/Index';
import Father from './Father';
import SubRoute from '../../components/SubRoute/Index';
import {Link, BrowserRouter as Router} from 'react-router-dom';

const Grandfather = () =>  {
    return (
        <Router>
            <Navbar />
            <h1>Grandfather</h1>
            <Link to="/sub/grandfather/father?transition_key=family">father</Link>
            <SubRoute path="/sub/grandfather/father" render={() =>  {
                return (
                    <Father />
                )
            }} />
        </Router>
    );
};


export default Grandfather; 