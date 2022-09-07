import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import React, { useState,useEffect } from 'react';
import './style.css';

function BreadcrumbNode(props) {
    let data = props?.data;
    data.type = "breadcrumbs";

    
    useEffect(() => {
        props?.componentDidMount();
    }, []);

    
    
    return (
        <div 
            className="inputtext"
            style={{outline: "none"}}
            tabIndex="0">
          <div role="presentation">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        MUI
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        Core
                    </Link>
                    <Typography color="text.primary">Breadcrumbs</Typography>
                </Breadcrumbs>
            </div>
        </div>
    );
}

export default BreadcrumbNode;