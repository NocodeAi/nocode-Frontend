import { useState } from 'react'
import { Link } from "react-router-dom"
import { constants } from '../../Utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProject } from '../../Redux/actions/selectedProjectAction'

export default (props) => {
    // const selected_Project = useSelector((store) => store?.selectedProjectReducer?.selectedProject)

    const dispatch = useDispatch()

    const handleSelectProject = () => {
        dispatch(selectedProject(props?.project))
    }

    return (
        <div style={props?.style}>
            <div style={{display: "flex", flexDirection: "column", height: "200px", width: "200px", alignItems: "center", padding: "8px", justifyContent: "center", color: "#333", border: "1px solid #027ef8", borderRadius: "6px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}}>
                <label style={{textTransform: "uppercase", fontWeight: "semi-bold", fontSize: "18px"}}>
                    {props?.label}
                </label>

                <label style={{padding: "6px", backgroundColor: "#027ef8", color: "#ffffff", marginTop: "4px", borderRadius: "6px", cursor: "pointer"}}>
                    <Link onClick={handleSelectProject} state={{project: props?.label}} style={{color: "#ffffff", fontSize: "12px"}} to={props?.link}>View More</Link>
                </label>
            </div>
            <div style={{position: "relative", float: "right", bottom: 28, right: 10}}><constants.FaTrash onClick={props?.setOpen} style={{color: "#C70000", height: "18px", width: "18px", cursor: "pointer"}} /></div>
            <div style={{position: "relative", float: "right", bottom: 30, right: 15}}><constants.FaEdit style={{color: "#5D5351", height: "20px", width: "20px", cursor: "pointer"}} /></div>
        </div>
    )
}