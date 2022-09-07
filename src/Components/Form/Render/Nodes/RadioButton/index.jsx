import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import React, { useState, useEffect } from 'react';
import './style.css';


function RadioButton(props) {
    let data = props?.data;
    data.type = "radiobutton";

    useEffect(() => {
        props?.componentDidMount();
    }, []);

 
    const [checked, setChecked] = useState("");

    const handleChange = event => {
        setChecked(event.target.value);
    };

    return (
        <div
            className="inputtext"
            style={{ outline: "none" }}
            tabIndex="0">
            <div className='input-field-node'>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">{data?.question} :</FormLabel>
                    <div className='checkboxes'>

                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            onChange={handleChange}
                        >
                            {data?.options?.map((item) => {
                                return <FormControlLabel value={item.value} control={<Radio checked={checked === item.value} />} key={item.id} label={item.value} />
                            })}
                        </RadioGroup>
                    </div>
                </FormControl>
            </div>
        </div>
    );
}

export default RadioButton;