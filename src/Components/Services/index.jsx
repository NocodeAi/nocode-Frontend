import { useState, useEffect } from 'react';
import { nav } from '../Header/navbarComponents';
import { ServiceCard } from '../Cards'
import { useLocation, useNavigate } from 'react-router-dom';
import Titlebar from '../Header/Titlebar'

export default (props) => {

    const [rows, setRows] = useState([])
    const [project, setProject] = useState("")

    const location = useLocation()
    const navigate = useNavigate()

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
            <Titlebar path={location?.state?.project} />
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", padding: "16px" }}>
                {rows?.map((c) => {
                    return <ServiceCard key={c?.id} label={c?.label} link={c?.url} Icon={c?.icon} style={{ margin: "6px" }} />
                })}
            </div>
        </div>
    )
}