import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { DELETE_PROJECT } from '../../../Utils/apis';
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function RemoveProjectDialog(props) {


    const handleClose = () => {
        props?.setOpen(false);
    };

    const deleteData = async () => {
        let result = await axios.post(`${DELETE_PROJECT}`, {project_id: props?.data?.id, user_id: "123"})
        props?.setRows(result?.data?.data)
        props?.setOpen(false);
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
                <DialogTitle>{`Delete ${props?.data && props?.data?.name}`}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Do you want to delete {props?.data && props?.data?.name}?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={deleteData}>Yes</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}