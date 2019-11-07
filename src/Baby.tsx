import * as React from "react";
import {
    BrowserRouter,
  Route,
  withRouter,
    Link
} from "react-router-dom";


const Baby = ({history}) =>  {
    const handleBack = () => {
        history.goBack();
    }
    return (
        <div style={{marginTop: '100px'}}>
           <h1> Baby 页面</h1>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                <a onClick={handleBack}  style={{color: '#ff0000'}}>back son</a>
            </ul>
        </div>
    );
};


export default withRouter(Baby); 