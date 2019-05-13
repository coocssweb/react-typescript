import * as React from 'react';
import classNames from 'classnames';
import Theme from './theme';

export default () => {
    const themeContext = React.useContext(Theme);

    return (
        <div className={classNames(`theme-${themeContext.theme}`)}>
            useContext:
            <br />
            current theme is: { themeContext.theme }
        </div>
    );
}

