import { Link } from "react-router-dom"

export default (props) => {
    return (
        <div style={props?.style}>
            <Link to={props?.link}>

                <div style={{ display: "flex", flexDirection: "column", height: "200px", width: "200px", alignItems: "center", padding: "8px", justifyContent: "center", color: "#027ef8", border: "1px solid #027ef8", borderRadius: "6px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" }}>
                    <label style={{ textTransform: "uppercase", fontWeight: "semi-bold", fontSize: "16px" }}>
                        {props?.label}
                    </label>
                </div>
            </Link>
        </div>
    )
}