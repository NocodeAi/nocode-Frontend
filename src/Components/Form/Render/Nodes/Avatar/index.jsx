import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import React, { useState,useEffect } from 'react';
import './style.css';

function AvatarNode(props) {
    let data = props?.data;
    data.type = "avatar";

    useEffect(() => {
        props?.componentDidMount();
    }, []);

    

    return (
        <div 
  
            className="inputtext"
            style={{outline: "none"}}
            tabIndex="0">
               <Stack direction="row" spacing={2}>
                <Avatar>H</Avatar>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
            </Stack>  
        </div>
    );
}

export default AvatarNode;