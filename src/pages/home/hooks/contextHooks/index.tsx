import * as React from 'react';
import Theme from './theme';

const LastComponent = () => {
    const themeContext = React.useContext(Theme);
    return (
        <div>
            current theme is: { themeContext.theme }
        </div>
    )
};

class ChildrenComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            theme: 'dark'
        };
    }

    handleToggleTheme () {
        console.log('ass');
        // this.setState({
        //     theme: this.state.theme === 'dark' ? 'light' : 'dark'
        // });
    }

    render () {
        return (
            <div>
                <button onClick={this.handleToggleTheme.bind(this)}>toggleTheme</button>
                <Theme.Provider value={this.state}>
                    <LastComponent />
                </Theme.Provider>
            </div>
        );
    }
};



export default () => {
    return (
        <div>
            useContext:
            <ChildrenComponent />
        </div>
    );
}

