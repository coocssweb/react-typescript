import * as React from "react";
import {
    BrowserRouter,
  Route,
  withRouter,
    Link
} from "react-router-dom";

import Baby from './Baby';


const son = ({history}) =>  {
    const handleBack = () => {
        history.goBack();
    }
    return (
        <div style={{marginTop: '100px'}}>
            <h1>Son 页面</h1>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                <a onClick={handleBack}  style={{color: '#ff0000'}}>back father</a>
            </ul>

            <ul style={{ listStyleType: "none", padding: 0 }}>
                <Link to="/father/son/baby">go baby</Link>
                </ul>

            <Route
                key="father"
                path="/father/son/baby"
                children={<Baby />}
              />
        </div>
    );
};


export default withRouter(son); 