import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
import './style.css';
import { constants } from '../../../../Utils/constants'

function AccordionNode(props) {
    let data = props?.data;
    data.type = "accordion";


    useEffect(() => {
        props?.componentDidMount();
    }, []);


 
    return (
        <div
            className="inputtext"
            style={{ outline: "none" }}
            tabIndex="0">
            <Accordion>
                <AccordionSummary
                    expandIcon={<constants.MdOutlineArrowDropDownCircle />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default AccordionNode;