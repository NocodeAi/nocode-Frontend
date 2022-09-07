import React, { useState, useEffect } from 'react';
import './style.css';

function Container(props) {
    let data = props?.data;
    data.type = "container";



    useEffect(() => {
        props?.componentDidMount();
    }, []);


    return (
        <div
            className="inputtext"
            style={{ outline: "none" }}
            tabIndex="0">
            <div style={{ display: "flex", margin: "auto", textAlign: "center", width: "100%" }}>
                <div style={{ border: "1px solid #a1a1a1", width: "100%", borderRadius: "4px 4px 0 0" }}>
                    <label>Header</label>
                </div>
            </div>
        </div>
    );
}

export default Container;