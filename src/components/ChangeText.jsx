import React, { useState, useEffect } from 'react';

function ChangeText(props) {
    const [displayText, setDisplayText] = useState(props.animTextContent[0]);

    useEffect(() => {
        let idx = 0;
        const interval = setInterval(() => {
            if (idx === props.animTextContent.length) {
                idx = 0;
            }
            setDisplayText(props.animTextContent[idx]);
            idx += 1;
        }, props.interval);
        return () => {
            clearTimeout(interval);
        };
    }, []);

    return (
        <div>
            <p className={`${props.staticTextClass}`}>
                {props.staticText}&nbsp;
                <p className={`${props.animTextClass}`}>{displayText}</p>
            </p>
        </div>
    );
}

export default ChangeText;
