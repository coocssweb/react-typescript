import { connect } from 'react-redux';
import Login from '../pages/login';
import * as usersActions from '../redux/actions/users';

function mapStateToProps (state) {
    let usersState = state.get('users');
    return {
        info: usersState.get('info')
    };
}

function mapDispatchToProps (dispatch) {
    return {
        fetchInfo: () => {
            return dispatch(usersActions.info());
        },
        login: (loginInfo, callback: Function) => {
            return dispatch(usersActions.login(loginInfo, callback));
        },
        logout: (callback) => {
            return dispatch(usersActions.logout(callback));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
