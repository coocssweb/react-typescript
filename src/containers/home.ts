import { connect } from 'react-redux';
import Home from '../pages/home/index';

function mapStateToProps (state: any) {
    return {
        ...state['home']
    };
}

function mapDispatchToProps (dispatch: Function) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
