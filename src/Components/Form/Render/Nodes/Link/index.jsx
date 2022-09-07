import Link from '@mui/material/Link';
import React, { useRef, useState, useEffect } from 'react';
import './style.css';


function LinkNode(props) {
    let data = props?.data;
    data.type = "link";

    useEffect(() => {
        props?.componentDidMount();
    }, []);



    return (
        <div

            className="inputtext"
            style={{ outline: "none" }}
            tabIndex="0">
            <Link href={data?.link}>{data?.label}</Link>
        </div>
    );
}

export default LinkNode;