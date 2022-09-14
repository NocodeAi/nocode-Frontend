import { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {constants} from '../../../Utils/constants'
import axios from 'axios';
import {
    GET_ALL_FORMS, RENDER_FORM
} from '../../../Utils/apis'
import { Link } from 'react-router-dom';
import AlertDialogSlide from '../../Dialogs/alert';
import { useSelector } from 'react-redux'

export default (props) => {

    const selectedProject = useSelector((store) => store?.selectedProjectReducer?.selectedProject)

    console.log(selectedProject, "==> Listing Selected Project")

    const [rows, setRows] = useState([])
    const [open, setOpen] = useState(false);
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [copied, setCopied] = useState(false)

    const handleDialogOpen = (e, id, name) => {
        setId(id)
        setName(name)
        setOpen(true)
    }

    const copyUrl = async (e, url) => {
        setCopied(false)
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true)
        }
        catch (e) {
            setCopied(false)
        }

    }

    const getData = async () => {
        let result = await axios.get(`${GET_ALL_FORMS}?project_id=${selectedProject?.id}`,)
        setRows(result.data.forms)
        console.log(result.data.forms, "==> All Forms")
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
        <AlertDialogSlide setRows={setRows} open={open} data={{id: id, name: name}} setOpen={setOpen} />
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{fontWeight: "bold"}}>
                        <TableCell>Form Name</TableCell>
                        <TableCell>URL</TableCell>
                        <TableCell align="right">Created On</TableCell>
                        <TableCell align="right">Modified On</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.map((row) => (
                        <TableRow
                            key={row?.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <a href={`${RENDER_FORM}?tk=${row.token}`} target="_blank">{row.name}</a>
                            </TableCell>
                            <TableCell>
                                <div style={{display: "flex"}}>
                                    <label style={{marginRight: "4px"}}>{`${RENDER_FORM}?tk=${row.token}`.slice(0, 80)}{`${RENDER_FORM}?tk=${row.token}`.length > 80 ? "..." : ""}</label>
                                    <constants.MdOutlineContentCopy onClick={(e) => copyUrl(e, `${RENDER_FORM}?tk=${row.token}`)} style={{color: "#027ef8", cursor: "pointer"}} />
                                </div>
                            </TableCell>
                            <TableCell align="right">{row?.created_at}</TableCell>
                            <TableCell align="right">{row?.updated_at}</TableCell>
                            <TableCell align="right">
                                <Link to={'/edit_form'} state={{form_id: row?.id}}><constants.BsGearFill style={{color: "#027ef8", marginRight: "2px", cursor: "pointer"}} /></Link>
                                <constants.FaTrash onClick={(e) => handleDialogOpen(e, row?.id, row?.name)} style={{color: "#e00404", marginLeft: "2px", cursor: "pointer"}} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
}