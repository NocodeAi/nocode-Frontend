import Rating from '@mui/material/Rating';
import React, { useState,useEffect } from 'react';
import './style.css';

function AlertNode(props) {
    let data = props?.data;
    data.type = "alert";
    
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
           <Rating
                name="rating"
                value={value}
                onChange={handleChange}
            />
        </div>
    );
}

export default AlertNode;