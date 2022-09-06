import React, { useRef, useState, useEffect } from 'react';
import './style.css';

function Label(props) {
    let data = props?.data;
    data.type = "label";

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
            <label style={{ width: "100%", height: "100%", fontSize: data?.size, textTransform: data?.textTransform, fontWeight: data?.fontWeight }}>{data?.label}</label>
        </div>
    );
}

export default Label;