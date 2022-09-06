import React, { useState, useEffect } from 'react';
import './style.css';

function TextArea(props) {
    let data = props?.data;
    data.type = "textarea";

    useEffect(() => {
        props?.componentDidMount();
    }, []);


   
    return (
        <div
            className="inputtext"
            style={{ outline: "none" }}
            tabIndex="0">
            <textarea style={{ width: "100%" }}></textarea>
        </div>
    );
}

export default TextArea;