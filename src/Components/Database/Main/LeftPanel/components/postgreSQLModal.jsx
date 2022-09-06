import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { constants } from '../../../../../Utils/constants';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux'
import { dbConfig } from '../../../../../Redux/actions/dbAction'
import { schemaTable } from '../../../../../Redux/actions/schemaTableAction'

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


const PostgresqlModal = ({ setSchemaTable }) => {
    const db_config = useSelector((store) => store?.dbReducer?.dbConfig)
    const table_schema = useSelector((store) => store?.schemaTableReducer?.schemaTable)
    console.log(table_schema, '<== table_schema')
    console.log(db_config, '<===dbConfig')
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [host, setHost] = useState(db_config?.host);
    const [database, setDatabase] = useState(db_config?.database);
    const [port, setPort] = useState(db_config?.port);
    const [msg, setMsg] = useState();

    const [username, setUsername] = useState(db_config?.username);
    const [password, setPassword] = useState(db_config?.password);
    // const [propsss, setPropsss] = useState("");
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
        // setPropsss("YASIR")
        // console.log(propsss, 'propsss')

        await axios.post(`${AUTHENTICATE_DB}`,
            config, {
            header: {
                'Content-Type': 'application/json'
            }
        }).then(function (data) {
            // console.log(data, '<==data')
            if (data?.data?.success) {
                setMsg('database is cennected successfully')
                dispatch(dbConfig(config))
                console.log(data?.data?.data, '<=+data')
                dispatch(schemaTable(data?.data?.data))
                setSchemaTable(data?.data?.data)
                // setAgProp("setAgProps")
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
                                defaultValue={host}
                                style={{ width: '100%', marginBottom: '10px' }}

                            />
                            <TextField
                                type="database"
                                id="outlined-host"
                                label="Database"
                                onChange={(e) => setDatabase(e.target.value)}
                                defaultValue={database}
                                style={{ width: '100%', marginBottom: '10px' }}

                            />
                            <TextField
                                type="5432"
                                id="outlined-port"
                                label="Port"
                                onChange={(e) => setPort(e.target.value)}
                                defaultValue={port}
                                style={{ width: '100%', marginBottom: '10px' }}

                            />
                            <TextField
                                type="postgres"
                                id="outlined-port"
                                label="Username"
                                onChange={(e) => setUsername(e.target.value)}
                                defaultValue={username}
                                style={{ width: '100%', marginBottom: '10px' }}

                            />

                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                                defaultValue={password}
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