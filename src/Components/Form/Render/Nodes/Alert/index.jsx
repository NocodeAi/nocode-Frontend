import Alert from '@mui/material/Alert';
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

            className="inputtext"
            style={{outline: "none"}}
            tabIndex="0">
         <Alert severity={data?.severity}>{data?.message}</Alert>
        </div>
    );
}

export default AlertNode;