import * as React from "react";
import TabPage from '../../components/TabPage/Index';
import {Link} from 'react-router-dom';
import SubRoute from '../../components/SubRoute/Index';
import Sub from '../sub/Index';

const Home = () =>  {
    return (
        <TabPage>
            <h1>首页首页首页首页首页首页首页首页首页首页首页首页首页</h1>
            <Link to="/sub?transition_key=family">去子路由</Link>
        </TabPage>
    );
};

export default Home;