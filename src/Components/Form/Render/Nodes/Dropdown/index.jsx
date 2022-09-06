import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useState, useEffect } from 'react';
import './style.css';

function SelectNode(props) {
    let data = props?.data;
    data.type = "dropdown";
    const [selectedValue, setSelectedValue] = useState("");

    useEffect(() => {
        props?.componentDidMount();
    }, []);

    return (
        <div
            className="inputtext"
            style={{ outline: "none" }}
            tabIndex="0">
            <Box sx={{ minWidth: 220 }}>
                <FormControl size="small" fullWidth>
                    <InputLabel id="demo-simple-select-label">{data?.label}</InputLabel>
                    <Select value={selectedValue} label={data?.label}>
                        {data?.options?.map((item) => {
                            return <MenuItem onClick={(e)=> setSelectedValue(item.value)} key={item.id} value={item.value}>{item.value}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
}

export default SelectNode;