import { useState, useEffect } from 'react';
import { ProjectCard } from '../Cards'
// import Footer from './Components/Footer';
import { Button } from '@mui/material';
import { CreateProjectDialog, RemoveProjectDialog } from '../Dialogs';
import { GET_ALL_PROJECTS } from '../../Utils/apis'
import axios from 'axios';

export default (props) => {

    const [rows, setRows] = useState([])
    const [createModal, setCreateModal] = useState(false);
    const [removeModal, setRemoveModal] = useState(false);

    const handleDialogCreateModal = (e) => {
        setCreateModal(true)
    }

    const handleDialogRemoveModal = (e) => {
        setRemoveModal(true)
    }

    const getData = async () => {
        let result = await axios.get(`${GET_ALL_PROJECTS}`,)
        setRows(result?.data?.projects)

    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <CreateProjectDialog setRows={setRows} open={createModal} setOpen={setCreateModal} />
            <RemoveProjectDialog setRows={setRows} open={removeModal} data={rows} setOpen={setRemoveModal} />
            <div style={{ display: "flex", justifyContent: "right", padding: "18px" }}>
                <Button onClick={handleDialogCreateModal} variant="contained">Create new project</Button>
            </div>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", padding: "16px" }}>
                {rows?.map((c) => {
                    return <ProjectCard key={c?.id} label={c?.label} link={"/project"} setOpen={handleDialogRemoveModal} style={{ margin: "4px" }} />
                })}
            </div>
        </div>
    )
}