import * as React from "react";
import Navbar from '../../components/Navbar/Index';
import {Link, BrowserRouter as Router} from 'react-router-dom';

const Xiaoming = () =>  {
    return (
        <Router>
            <Navbar />
            <h1>Xiaoming</h1>
        </Router>
    );
};


export default Xiaoming; 