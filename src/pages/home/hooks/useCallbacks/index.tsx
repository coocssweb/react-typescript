import * as React from 'react';

const CallbackHook = (props) => {
    const { name } = props;

    const memoizedCallback = React.useCallback(() => {
        () => {
            // run only name is change
            console.log(name);
        }
    }, [name])

    return (
        <button>change name</button>
    );
}

export default (props: any) {
    const [name, setName] = React.useState(initialState)
}
