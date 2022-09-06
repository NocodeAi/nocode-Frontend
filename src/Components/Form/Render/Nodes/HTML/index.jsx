import React, { useRef, useState, useEffect } from 'react';
import './style.css';

function HtmlNode(props) {
    let data = props?.data;
    data.type = "html";

    const spanRef = useRef(null);

    useEffect(() => {
        props?.componentDidMount();
    }, []);

    let htmlObject = data?.code;

    useEffect(() => {
        if (spanRef.current) {
            spanRef.current.innerHTML = htmlObject;
        }
    });

  
    return (
        <div
            className="inputtext"
            style={{ outline: "none" }}
            tabIndex="0">
            <div className='input-field-node' style={{ minHeight: "30px" }} ref={spanRef}>

            </div>
        </div>
    );
}

export default HtmlNode;