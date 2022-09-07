import Button from '@mui/material/Button';
import React, { useState,useEffect } from 'react';
import './style.css';

function ButtonNode(props) {
    let data = props?.data;
    data.type = "button";

    
    useEffect(() => {
        props?.componentDidMount();
    }, []);

    

    return (
        <div 
            onClick={handleClick} 
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            className="inputtext"
            style={{outline: "none"}}
            tabIndex="0">
            <div style={{ textAlign: data?.align }}>
                <Button onClick={data?.action} variant="contained" style={{ marginRight: "10px", fontSize: data?.size, textTransform: data?.textTransform, fontWeight: data?.fontWeight }}>{data?.label}</Button>
            </div>
        </div>
    );
}

export default ButtonNode;