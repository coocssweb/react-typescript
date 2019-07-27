import * as React from "react";
import {
  Route,
  withRouter
} from "react-router-dom";


class MeRoute extends React.Component {
    constructor (props) {
        super(props);
        this.isBack = 0;
        this.onBack = this.onBack.bind(this);
    }

    onBack () {
        window.localStorage.setItem('page_from', this.props.path);
        this.isBack = 1;
        this.props.history.goBack()
    }

    render (){
        const { component: Component, ...rest } = this.props;
        const path = this.props.path;
        const toPath = localStorage.getItem("page_to");
        const fromPath = localStorage.getItem("page_from");
        let className = "page transition-item ";

        if (path === toPath) {
            className += "page-appear ";
        } else if (path === fromPath) {
            className  += "page-leave ";
        } else {
            className  += "page-leave ";
        }

        return (
            <Route
            {...rest}
            render={props =>
                <div className={className}>
                    <button onClick={this.onBack}>back</button>
                    <Component {...props} />
                </div>
            }
            />
        );
    }
}


export default withRouter(MeRoute); 