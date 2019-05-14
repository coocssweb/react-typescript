import * as React from 'react';
import classNames from 'classnames';

const RefHook = (props: any, ref: any) => {
    const inputRef: React.RefObject<HTMLInputElement> = React.useRef();
    React.useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));

    return (
        <div className={classNames('refHookChild')}>
            <div className={classNames('refHookChild-title')}>子组件</div>
            <input ref={inputRef} />
        </div>
    );
};
// forward ref
const RefForwardHook = React.forwardRef(RefHook);

export default (props: any) => {
    const inputRef: React.RefObject<HTMLInputElement> = React.useRef();
    const childRef: React.RefObject<HTMLInputElement> = React.useRef();

    const handleFocus = () => {
        inputRef.current.focus();
    };
    const handleChildFocus = () => {
        childRef.current.focus();
    };

    return (
        <div className={classNames('refHooks')}>
            <div className={classNames('refHooks-form')}>
                <div className={classNames('refHooks-line')}>
                    <input ref={inputRef} />
                </div>
                <div className={classNames('refHooks-line')}>
                    <button onClick={handleFocus}>input focus</button>
                </div>
                <div className={classNames('refHooks-line')}>
                    <RefForwardHook ref={childRef} />
                </div>
                <div className={classNames('refHooks-line')}>
                    <button onClick={handleChildFocus}>child input focus</button>
                </div>
            </div>
        </div>
    );
}
