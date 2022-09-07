import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React, { useState, useEffect } from 'react';
import './style.css';

function ToggleButtonNode(props) {
    let data = props?.data;
    data.type = "togglebutton";


    useEffect(() => {
        props?.componentDidMount();
    }, []);

    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <div
            className="inputtext"
            style={{ outline: "none" }}
            tabIndex="0">
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton value="web">Button 1</ToggleButton>
                <ToggleButton value="android">Button 2</ToggleButton>
                <ToggleButton value="ios">Button 3</ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}

export default ToggleButtonNode;