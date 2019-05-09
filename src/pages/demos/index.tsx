
import * as React from 'react';
import className from 'classnames';

interface Props {

};

interface State {

};

class Index extends React.Component {
    constructor (props: Props) {
       super(props);
    }

    render () {
        return (
            <div className={className('demos')}>
                测试页
            </div>
        );
    }
}

export default Index;
