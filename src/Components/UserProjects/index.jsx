import { useState, useEffect } from 'react';
import { ViewMoreCard } from '../Cards'
// import Footer from './Components/Footer';
import { Button } from '@mui/material';
import { CreateProjectDialog } from '../Dialogs';
import { GET_ALL_PROJECTS } from '../../Utils/apis'
import axios from 'axios';

export default (props) => {

    const [rows, setRows] = useState([])
    const [open, setOpen] = useState(false);

    const handleDialogOpen = (e) => {
        setOpen(true)
    }

    const getData = async () => {
        let result = await axios.get(`${GET_ALL_PROJECTS}`,)
        setRows(result?.data?.projects)

        // let projectCards = [
        //     {
        //         id: 1,
        //         label: "Project 1",
        //         link: "/form_builder"
        //     },
        //     {
        //         id: 2,
        //         label: "Project 2",
        //         link: "/all_forms"
        //     }
        // ]

        // setRows(projectCards)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <CreateProjectDialog setRows={setRows} open={open} setOpen={setOpen} />
            <div style={{ display: "flex", justifyContent: "right", padding: "18px" }}>
                <Button onClick={handleDialogOpen} variant="contained">Create new project</Button>
            </div>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", padding: "16px" }}>
                {rows?.map((c) => {
                    return <ViewMoreCard key={c?.id} label={c?.label} link={"/project"} style={{ margin: "4px" }} />
                })}
            </div>
        </div>
    )
}