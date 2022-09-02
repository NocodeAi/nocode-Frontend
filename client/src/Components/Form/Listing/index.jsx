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
    GET_ALL_FORMS
} from '../../../Utils/apis'
import { Link } from 'react-router-dom';

export default (props) => {

    const [rows, setRows] = useState([])

    const getData = async () => {
        let result = await axios.get(GET_ALL_FORMS)
        console.log(result.data.forms, "==> result")
        setRows(result.data.forms)

        console.log(rows, "==> rows")
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Form Name</TableCell>
                        <TableCell align="right">Created On</TableCell>
                        <TableCell align="right">Modified On</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.created_at}</TableCell>
                            <TableCell align="right">{row.updated_at}</TableCell>
                            <TableCell align="right">
                                <Link to={'/edit_form'} state={{form_id: row?.id}}><constants.BsGearFill style={{color: "#027ef8", marginRight: "2px", cursor: "pointer"}} /></Link>
                                <constants.FaTrash style={{color: "#e00404", marginLeft: "2px", cursor: "pointer"}} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}