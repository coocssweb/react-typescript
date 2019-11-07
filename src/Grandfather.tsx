import * as React from "react";
import {
    BrowserRouter,
  Route,
  withRouter,
    Link
} from "react-router-dom";
import Father from './Father';


const {useState, memo} = React;

const grandFather = memo(() =>  {
    const [count, setCount] = useState(0);

    const handleCountClick = () => {
        setCount((value) => value + 1);
    }

    return (
        <BrowserRouter>
            <h1>GrandFather</h1>
            <div>count:   {count}</div>
            <button  onClick={handleCountClick}>点击+1</button>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                <Link to="/father">go father</Link>
            </ul>

            <Route
                key="father"
                path="/father"
                children={<Father />}
              />
        </BrowserRouter>
    );
}, (prevProps, nextProps) => {
    return true;
});


export default withRouter(grandFather); 