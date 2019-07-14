import * as React from 'react';
import { GlobalContext } from '../../../../reducer';
import {SET_DETAIL} from './reducer';
const Detail = ({history}) => {
    const context = React.useContext(GlobalContext);
    React.useEffect(() => {
        context.detailDispatch({
            type: SET_DETAIL,
            payload: {
                name: 'test detail',
                description: 'test description'
            }
        })
    }, []);

    return (
        <div className="page page-appear page-detail transition-item">
            <button onClick={() => {history.replace('/modify', {leave: true})}}>back</button>
            <div>
                Detail Page
            </div>
        </div>
    );
}

export default Detail;
