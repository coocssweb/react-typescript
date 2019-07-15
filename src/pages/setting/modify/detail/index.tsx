import * as React from 'react';
import { GlobalContext } from '../../../../reducer';
import {SET_DETAIL} from './reducer';
const Detail = ({history, backTo, backDirection}) => {
    const context = React.useContext(GlobalContext);
    React.useEffect(() => {
        setTimeout(() => {
            context.detailDispatch({
                type: SET_DETAIL,
                payload: {
                    name: 'test detail',
                    description: 'test description'
                }
            });
        }, 200);
    }, []);

    console.log(context);

    return (
        <div className="page page-appear page-detail transition-item">
            <button onClick={() => {history.push(backTo, {leave: backDirection})}}>back</button>
            <div>
                Detail Page
            </div>
        </div>
    );
}

export default Detail;
