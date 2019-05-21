import  * as React from 'react';
import className from 'classnames';

// custom hooks
const useStatus = (userId: number) => {
    const [status, setStatus] = React.useState(true);
    React.useEffect(() => {
        function handleStatusChange (status: boolean) {
            setStatus(status);
        }
        console.log('child effect ', userId);

        // when userId change, run, do something like unsubscribe
        return () => {
            console.log('child unmount ', userId);
        };
    }, [userId]);

    console.log('child render ', userId);

    // when userid changed, it's sequence is
    // child render userid => child unmount prevUserId => child effect userId
};

export default (props: any) => {
    const [number, setNumber] = React.useState(0);
    const isOnline = useStatus(number);

    React.useEffect(() => {
        // run, only when number changed
        document.title = `clicked ${number} times`;
        setTimeout(() => {
            // count always captures the value every render
            // so the number is always 0, even you decrease it
            // if need captures the lastest number use useRef
            alert(number);
        }, 1000);

        // if remove number, this effect will run every render.
        return () => {

        };
    }, []);


    return (
        <div className={className('section')}>
            <div className={className('section-title')}>useState 演示</div>
                <div className={className('section-content')}>
                    <button onClick={ () => setNumber(number - 1) }>
                        Decrease
                    </button>
                        {number}
                    <button onClick={ () => setNumber(number + 1) }>
                        Increase
                    </button>
                </div>
        </div>
    );
};
