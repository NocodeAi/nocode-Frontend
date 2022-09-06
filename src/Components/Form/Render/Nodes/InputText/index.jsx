import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useState, useEffect } from 'react';
import './style.css';

function InputText(props) {
    let data = props?.data;
    data.type = "inputfield";

    useEffect(() => {
        props?.componentDidMount();
    }, []);

    return (
        <div
            className="inputtext"
            style={{ outline: "none" }}>
            <Box
                sx={{
                    width: "100%",
                    maxWidth: '100%',
                    marginTop: "4px"
                }}
            >
                <TextField size="small" fullWidth label={data?.label} />
            </Box>
        </div>
    );
}

export default InputText;