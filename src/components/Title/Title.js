import { memo, useEffect, Fragment } from 'react';

function Title(props) {
    const { title } = props;

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <></>
    );
}

export default memo(Title);