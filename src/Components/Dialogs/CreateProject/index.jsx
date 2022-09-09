import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import axios from 'axios';
import { Box, CircularProgress, FormControl, TextField } from '@mui/material';
import { CREATE_PROJECT } from '../../../Utils/apis';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateProjectDialog(props) {

    const [saved, setSaved] = React.useState(false)
    const [saveText, setSaveText] = React.useState("")

    const handleClose = () => {
        props?.setOpen(false);
    };

    const createProject = async () => {
        let project_name = document.getElementById("proj_name").value

        setSaved(true)
        setSaveText("")

        try {
            await axios.post(`${CREATE_PROJECT}`, { "name": project_name }, {
                header: {
                    'Content-Type': 'application/json'
                }
            }).then(function (res) {
                setSaved(false)
                props?.setOpen(false);
                if (res?.data) {
                    setSaveText(res?.data?.message)
                    props?.setRows(res?.data?.projects)
                }
            });
        }
        catch (e) {
            setSaved(false)
            setSaveText("Something went wrong!")
            console.error(e)
        }


    }

    return (
        <div>
            <Dialog
                open={props?.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>Create New Project</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To create the project enter project name and click on save.
                    </DialogContentText>
                    <Box>
                        <FormControl sx={{ mt: 2, minWidth: "100%" }}>
                            <TextField id="proj_name" size="small" fullWidth label="Project Name" />
                            <label style={{fontSize: "12px", marginTop: "6px"}}>{saveText}</label>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={createProject}>Save{saved ? <CircularProgress style={{color: "#333", padding: "2px", width: "20px", height: "20px"}} /> : ""}</Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}