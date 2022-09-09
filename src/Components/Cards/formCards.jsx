import { Link } from "react-router-dom"
import { constants } from '../../Utils/constants'

export default (props) => {
    return (
        <div style={props?.style}>
            <div style={{display: "flex", flexDirection: "column", height: "200px", width: "200px", alignItems: "center", padding: "8px", justifyContent: "center", color: "#027ef8", border: "1px solid #027ef8", borderRadius: "6px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}}>
                <label style={{textTransform: "uppercase", fontWeight: "semi-bold", fontSize: "18px"}}>
                    {props?.label}
                </label>

                <label style={{padding: "4px", backgroundColor: "#027ef8", color: "#ffffff", marginTop: "4px", borderRadius: "6px", cursor: "pointer"}}>
                    <Link style={{color: "#ffffff"}} to={props?.link}>View More</Link>
                </label>
            </div>
        </div>
    )
}