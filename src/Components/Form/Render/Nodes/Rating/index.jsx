import Rating from '@mui/material/Rating';
import React, { useState, useEffect } from 'react';
import './style.css';

function RatingNode(props) {
    let data = props?.data;
    data.type = "rating";


    useEffect(() => {
        props?.componentDidMount();
    }, []);




    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div
            className="inputtext"
            style={{ outline: "none" }}
            tabIndex="0">
            <Rating
                name="rating"
                value={value}
                onChange={handleChange}
            />
        </div>
    );
}

export default RatingNode;