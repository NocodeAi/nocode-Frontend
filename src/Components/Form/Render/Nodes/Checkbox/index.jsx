import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React, { useState, useEffect } from 'react';
import './style.css';

function CheckboxNode(props) {
    let data = props?.data;
    data.type = "checkbox";

    useEffect(() => {
        props?.componentDidMount();
    }, []);



    return (
        <div
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            className="inputtext"
            style={{ outline: "none" }}
            tabIndex="0">
            <div className='input-field-node'>
                <label style={{ marginRight: "10px", fontSize: "14px" }}>{data?.question} :</label><br />
                <div className='checkboxes'>
                    <FormGroup onChange={handleChange}>
                        {data?.options?.map((item) => {
                            return <FormControlLabel value={item.value} control={<Checkbox checked={checked === item.value} />} key={item.id} label={item.value} />
                        })}
                    </FormGroup>
                </div>
            </div>
        </div>
    );
}

export default CheckboxNode;