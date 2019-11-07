import * as React from "react";
import {
    BrowserRouter,
  Route,
  withRouter,
    Link
} from "react-router-dom";
import Son from './Son'

const {useState} = React;

const father = ({history}) =>  {
    const [count, setCount] = useState(0);

    const handleCountClick = () => {
        setCount((value) => value + 1);
    }


    const handleBack = () => {
        history.goBack();
    }
    return (
        <div style={{marginTop: '100px'}}>
            <h1>Father 页面</h1>
            <div>count:   {count}</div>
            <button  onClick={handleCountClick}>点击+1</button>
       
            <ul style={{ listStyleType: "none", padding: 0 }}>

            <a onClick={handleBack} style={{color: '#ff0000'}}>back grandfather</a>
            </ul>

            <ul style={{ listStyleType: "none", padding: 0 }}>
                <Link to="/father/son">go son</Link>
                </ul>

            <Route
                key="father"
                path="/father/son"
                children={<Son />}
              />
        </div>
    );
};


export default withRouter(father); 