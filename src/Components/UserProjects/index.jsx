import { useState, useEffect } from 'react';
import { ProjectCard } from '../Cards'
// import Footer from './Components/Footer';
import { Button } from '@mui/material';
import { CreateProjectDialog, RemoveProjectDialog } from '../Dialogs';
import { GET_ALL_PROJECTS } from '../../Utils/apis'
import axios from 'axios';
import { Skeleton } from '@material-ui/lab'

export default (props) => {

    const [rows, setRows] = useState([])
    const [loading, setLoading] = useState(false)
    const [createModal, setCreateModal] = useState(false);
    const [removeModal, setRemoveModal] = useState(false);
    const [deleteData, setDeleteData] = useState({})

    const handleDialogCreateModal = (e) => {
        setCreateModal(true)
    }

    const handleDialogRemoveModal = (e, id, name) => {
        setRemoveModal(true)
        setDeleteData({id, name})
    }

    const getData = async () => {
        setLoading(true)
        try {
            let result = await axios.get(`${GET_ALL_PROJECTS}?user_id=123`)
            setRows(result?.data?.projects)
            setLoading(false)
        }
        catch(e) {
            let msg = "Something went wront!"
        }

    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <CreateProjectDialog setRows={setRows} open={createModal} setOpen={setCreateModal} />
            <RemoveProjectDialog setRows={setRows} open={removeModal} data={deleteData} setOpen={setRemoveModal} />
            <div style={{ padding: "42px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "16px" }}>
                    <div style={{ textAlign: "left", fontSize: "24px", fontWeight: "bold" }}>
                        <label>Welcome User!</label>
                    </div>
                    <div style={{}}>
                        <Button onClick={handleDialogCreateModal} variant="contained">Create new project</Button>
                    </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", padding: "16px" }}>
                    {loading ? [1, 2, 3, 4, 5, 6].map((el) => { return <Skeleton key={el} variant="rect" style={{ margin: "4px", width: "200px", height: "200px", border: "1px solid transparent", borderRadius: "6px" }} /> }) :
                        rows?.map((c) => {
                            return <ProjectCard key={c?.id} project={c} label={c?.name} link={"/project"} setOpen={(e) => handleDialogRemoveModal(e, c?.id, c?.name)} style={{ margin: "4px" }} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}