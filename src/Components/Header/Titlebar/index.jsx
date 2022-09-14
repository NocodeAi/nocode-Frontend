import React, { useEffect, useState } from 'react';
import { constants } from '../../../Utils/constants'
import { useLocation, useNavigate } from 'react-router-dom';


function Titlebar(props) {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div style={{ display: "flex", justifyContent: "left", padding: "18px", backgroundColor: "#027ef8", color: "#ffffff", fontSize: "16px", fontWeight: "bold", textTransform: "uppercase" }}>
            <constants.AiOutlineArrowLeft onClick={() => navigate(-1)} style={{ marginLeft: "14px", height: "24px", width: "24px", cursor: "pointer" }} />
            <label style={{ marginLeft: "10px" }}>{props?.path ? props?.path : location.pathname.split("/")}</label>
        </div>
    )
}

export default Titlebar;