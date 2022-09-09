import { Link } from "react-router-dom"
import './servicesCardStyle.css'

export default (props) => {
    return (
        <div style={props?.style}>
            <Link to={props?.link}>

                <div className="service-card-style">
                    {<props.Icon style={{height: "30px", width: "30px"}} />}
                    <label style={{ textTransform: "uppercase", fontWeight: "semi-bold", fontSize: "16px", cursor: "pointer" }}>
                        {props?.label}
                    </label>
                </div>
            </Link>
        </div>
    )
}