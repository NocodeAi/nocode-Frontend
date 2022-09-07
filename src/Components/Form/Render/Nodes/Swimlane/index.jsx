import React, { useState, useEffect } from 'react';
import './style.css';


function Swimlane(props) {
    let data = props?.data;
    data.type = "swimlane";

    useEffect(() => {
        props?.componentDidMount();
    }, []);


 
    return (
        <div
            className="inputtext"
            style={{ outline: "none" }}
            tabIndex="0">
            <div style={{ width: "100%", minHeight: "98px", display: "flex", margin: "auto", height: "100%" }}>
                <div style={{ writingMode: "vertical-rl", border: "1px solid #a1a1a1", transform: "rotate(180deg)" }}>default</div>
            </div>
        </div>
    );
}

export default Swimlane;