import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import React, { useState, useEffect } from 'react';
import './style.css';


function ProgressNode(props) {
    let data = props?.data;
    data.type = "progress";

   
    useEffect(() => {
        props?.componentDidMount();
    }, []);


 
  

    return (
        <div

            className="inputtext"
            style={{ outline: "none" }}
            tabIndex="0">
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        </div>
    );
}

export default ProgressNode;