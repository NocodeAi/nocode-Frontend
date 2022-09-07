import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import React, { useState,useEffect } from 'react';
import './style.css';

function BadgeNode(props) {
    let data = props?.data;
    data.type = "badge";

    
    useEffect(() => {
        props?.componentDidMount();
    }, []);


    return (
        <div 
            className="inputtext"
            style={{outline: "none"}}
            tabIndex="0">
            <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
                <Badge color="secondary" badgeContent={0} showZero>
                    <MailIcon />
                </Badge>
            </Stack>
        </div>
    );
}

export default BadgeNode;