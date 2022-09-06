import { createTheme, ThemeProvider } from '@mui/material/styles'
import MUIRichTextEditor from 'mui-rte'
import React, { useState, useEffect } from 'react';

function RTF(props) {
    let data = props?.data;
    data.type = "rtf";

    const myTheme = createTheme({
        // Set up your custom MUI theme here
    })

    useEffect(() => {
        props?.componentDidMount();
    }, []);


  
  
 
    return (
        <div
            className="inputtext"
            style={{ outline: "none" }}
            tabIndex="0">
           <div style={{ textAlign: "left", padding: "10px" }}>
                <ThemeProvider theme={myTheme}>
                    <MUIRichTextEditor label="Start typing..." />
                </ThemeProvider>
            </div>
        </div>
    );
}

export default RTF;