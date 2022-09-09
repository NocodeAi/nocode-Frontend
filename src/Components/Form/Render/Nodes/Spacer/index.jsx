import React, {useState} from 'react';
import './style.css';


function Spacer(props) {
    let data = props?.data;
    data.type = "spacer";

    return (
        <div onClick={(event) => props?.handleSelectNode(event, data?.id)} className="label-base">
            <div className='input-field-node' style={{ height: data?.height }}>
            </div>
        </div>
    );
}

export default Spacer;