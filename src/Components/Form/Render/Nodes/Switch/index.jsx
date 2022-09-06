import Switch from '@mui/material/Switch';
import React, { useState, useEffect } from 'react';
import './style.css';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function SwitchNode(props) {
    let data = props?.data;
    data.type = "switch";


    useEffect(() => {
        props?.componentDidMount();
    }, []);


    return (
        <div
            className="inputtext"
            style={{ outline: "none" }}
            tabIndex="0">
            <div>
                <Switch {...label} defaultChecked />
            </div>
        </div>
    );
}

export default SwitchNode;