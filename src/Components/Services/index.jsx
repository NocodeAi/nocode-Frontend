import { useState, useEffect } from 'react';
import { nav } from '../Header/navbarComponents';
import { ServiceCard } from '../Cards'
import { useLocation } from 'react-router-dom';
import { constants } from '../../Utils/constants';

export default (props) => {

    const [rows, setRows] = useState([])
    const [project, setProject] = useState("")

    const location = useLocation()

    const getData = async () => {
        // let result = await axios.get(`${GET_ALL_PROJECTS}`,)
        setProject(location?.state?.project)
        setRows(nav)

    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "left", padding: "18px", backgroundColor: "#027ef8", color: "#ffffff", fontSize: "16px", fontWeight: "bold", textTransform: "uppercase" }}>
                <constants.AiOutlineArrowLeft style={{marginLeft: "14px", height: "24px", width: "24px", cursor: "pointer"}} />
                <label style={{marginLeft: "10px"}}>{location?.state?.project}</label>
            </div>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", padding: "16px" }}>
                {rows?.map((c) => {
                    return <ServiceCard key={c?.id} label={c?.label} link={c?.url} Icon={c?.icon} style={{ margin: "6px" }} />
                })}
            </div>
        </div>
    )
}