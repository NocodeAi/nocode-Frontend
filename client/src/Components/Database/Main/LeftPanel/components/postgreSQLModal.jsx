import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { constants } from '../../../../../Utils/constants';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux'
import { dbConfig } from '../../../../../Redux/actions/dbAction'
import axios from 'axios'
import {
    AUTHENTICATE_DB
} from '../../../../../Utils/apis'
const Fade = forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    return (
        <div ref={ref} style={style} {...other}>
            {children}
        </div>
    );
});

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const PostgresqlModal = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [host, setHost] = useState();
    const [database, setDatabase] = useState();
    const [port, setPort] = useState();
    const [msg, setMsg] = useState();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const onConnect = async () => {
        const config = {
            username,
            password,
            database,
            host,
            dialect: 'postgres',
            port
        }
        console.log('button clicked', host, port, username, password)
        await axios.post(`${AUTHENTICATE_DB}`,
            config, {
            header: {
                'Content-Type': 'application/json'
            }
        }).then(function (data) {
            console.log(data, '<==data')
            if (data?.data?.success) {
                setMsg('database is cennected successfully')
                dispatch(dbConfig(config))

            }
            else {
                setMsg('unable to connect to database!')
            }
        });

    }
    return (
        <>
            <div>
                <Button onClick={handleOpen} className='zoom'> <constants.SiPostgresql className='sidebar-icons' /></Button>
                <Modal
                    aria-labelledby="spring-modal-title"
                    aria-describedby="spring-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <TextField
                                type="localhost"
                                id="outlined-host"
                                label="Host"
                                onChange={(e) => setHost(e.target.value)}
                                defaultValue=""
                                style={{ width: '100%', marginBottom: '10px' }}

                            />
                            <TextField
                                type="database"
                                id="outlined-host"
                                label="Database"
                                onChange={(e) => setDatabase(e.target.value)}
                                defaultValue=""
                                style={{ width: '100%', marginBottom: '10px' }}

                            />
                            <TextField
                                type="5432"
                                id="outlined-port"
                                label="Port"
                                onChange={(e) => setPort(e.target.value)}
                                defaultValue=""
                                style={{ width: '100%', marginBottom: '10px' }}

                            />
                            <TextField
                                type="postgres"
                                id="outlined-port"
                                label="Username"
                                onChange={(e) => setUsername(e.target.value)}
                                defaultValue=""
                                style={{ width: '100%', marginBottom: '10px' }}

                            />

                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                                style={{ width: '100%', marginBottom: '10px' }}

                            />

                            <div>
                                <Button variant="outlined" onClick={onConnect} size="small" style={{ marginRight: '10px' }}
                                >
                                    Connect
                                </Button>
                                <Button onClick={handleClose} variant="outlined" size="small">
                                    Cancel
                                </Button>
                            </div>
                            <p>{msg ? msg : 'press connect to make connection with database'}</p>
                        </Box>
                    </Fade>
                </Modal>
            </div>
        </>
    )
}


export default PostgresqlModal