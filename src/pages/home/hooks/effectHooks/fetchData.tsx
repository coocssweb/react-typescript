import * as React from 'react';
import { useEffect, useState } from 'react';
import indexApi from '@api/index';

export default (props: any) => {
    const [demos, setDemos] = useState([]);
    const name = '';

    useEffect(() => {
        // 竞态处理
        // 防止数据延迟的情况下，数据错误，如name = wjx, 然而，设置了name = zsf的数据
        let didCancel = false;

        async function fetchDemos (name) {
            const result =  await indexApi.fetch();
            if (!didCancel) {
                setDemos(result.response);
            }
        }

        fetchDemos(props.name);

        return () => {
            // 竞态处理
            didCancel = true;
        };
    }, [name]);

    return (
        <ul>
            {
                demos.map(demo => (<li key={demo.id}>{demo.name}</li>))
            }
        </ul>
    );
};
