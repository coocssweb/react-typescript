import { connect } from 'react-redux';
import Home from '../pages/home/index';
import * as homeActions from '../redux/actions';

function mapStateToProps (state: any) {
    return {
        ...state['home']
    };
}

function mapDispatchToProps (dispatch: Function) {
    return {
        pushOneUser: (data) => dispatch(homeActions.pushOneUser(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
