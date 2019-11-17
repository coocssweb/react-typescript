import * as React from "react";
import {
    BrowserRouter,
  Route,
  withRouter,
    Link
} from "react-router-dom";

import Slider from './slider/Slider';

import Father from './Father';


const {useState, memo} = React;

const grandFather = memo(() =>  {
    const [count, setCount] = useState(0);

    const handleCountClick = () => {
        setCount((value) => value + 1);
    }

    const handleSliderChange = (value) => {
        console.log(value)
    }

    return (
        <BrowserRouter>
            <h1>GrandFather</h1>
            <div>count:   {count}</div>
            <button  onClick={handleCountClick}>点击+1</button>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                <Link to="/father?transition_key=favarite">go father</Link>
            </ul>


            <Slider  />


            <div style={{ height: '1000px' }}></div>
            <Route
                key="father"
                path="/father"
                children={<Father />}
              />
        </BrowserRouter>
    );
});


export default withRouter(grandFather); 