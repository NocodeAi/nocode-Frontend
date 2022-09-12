import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useState, useEffect } from 'react';
import './style.css';

function PersonalGroup(props) {
    let data = props?.data;
    data.type = "personal";

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [isMale, setIsMale] = useState();
    const [email, setEmail] = useState();
    const [streetAddress, setStreetAddress] = useState();
    const [streetAddressLine2, setStreetAddressLine2] = useState();
    const [city, setCity] = useState();
    const [province, setProvince] = useState();
    const [country, setCountry] = useState();
    const [postal, setPostal] = useState();
    const [phone, setPhone] = useState();
    
    


    useEffect(() => {
        props?.componentDidMount();
    }, []);


  

    const containerStyle = {
        height: "100%",
        width: `100%`,
        borderStyle:'groove',
        borderRadius:'15px'
        // zoom: `${baseZoom}%`,
    };

  

    return (
    <div style={containerStyle}>
                <Box
                    sx={{
                        position: 'absolute',
                        left: '0%',
                        width: "20%",
                        maxWidth: '40%',
                        marginTop: "10px"
                    }}
                >
                    <label style={{ fontSize: '18px', fontWeight: "bold" }}>Name</label>
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        left: '20%',
                        width: "37%",
                        maxWidth: '40%',
                        marginTop: "4px"
                    }}
                >
                    <TextField size="small" fullWidth label='First Name' />
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '0%',
                        right: '2%',
                        width: "37%",
                        maxWidth: '47%',
                        marginTop: "4px"
                    }}
                >
                    <TextField size="small" fullWidth label='Last Name' />
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        left: '0%',
                        top: '12%',
                        width: "20%",
                        maxWidth: '40%',
                        marginTop: "10px"
                    }}
                >
                    <label style={{ fontSize: '18px', fontWeight: "bold" }}>Gender</label>
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '12%',
                        left: '30%',
                        width: "40%",
                        maxWidth: '40%',
                        marginTop: "4px"
                    }}
                >
                    <FormGroup style={{ position: 'absolute' }}>
                        <div style={{display:'flex'}}>
                            <FormControlLabel value={'male'} control={<Checkbox checked={false} />} key={1} label={'male'} />
                            <FormControlLabel value={'female'} control={<Checkbox checked={false} />} key={1} label={'female'} />
                        </div>
                    </FormGroup>
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        left: '0%',
                        top: '24%',
                        width: "20%",
                        maxWidth: '40%',
                        marginTop: "10px"
                    }}
                >
                    <label style={{ fontSize: '18px', fontWeight: "bold" }}>Email</label>
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '24%',
                        left: '30%',
                        width: "40%",
                        maxWidth: '40%',
                        marginTop: "4px"
                    }}
                >
                    <TextField size="small" fullWidth label='Email' />
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        left: '0%',
                        top: '36%',
                        width: "100%",
                        maxWidth: '100%',
                        marginTop: "10px"
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            left: '0%',
                            width: "20%",
                            maxWidth: '40%',
                            marginTop: "10px"
                        }}
                    >
                        <label style={{ fontSize: '18px', fontWeight: "bold" }}>Address</label>
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '0%',
                            left: '30%',
                            width: "68%",
                            maxWidth: '68%',
                            marginTop: "4px"
                        }}
                    >
                        <TextField size="small" fullWidth label='Street Address' />
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50px',
                            left: '30%',
                            width: "68%",
                            maxWidth: '68%',
                            marginTop: "4px"
                        }}
                    >
                        <TextField size="small" fullWidth label='Street Address Line 2' />
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '100px',
                            left: '30%',
                            width: "34%",
                            maxWidth: '34%',
                            marginTop: "4px"
                        }}
                    >
                        <TextField size="small" fullWidth label='City' />
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '100px',
                            left: '65%',
                            width: "33%",
                            maxWidth: '100%',
                            marginTop: "4px"
                        }}
                    >
                        <TextField size="small" fullWidth label='Province/state' />
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '150px',
                            left: '30%',
                            width: "34%",
                            maxWidth: '34%',
                            marginTop: "4px"
                        }}
                    >
                        <TextField size="small" fullWidth label='Postal/Zip Code' />
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '150px',
                            left: '65%',
                            width: "33%",
                            maxWidth: '100%',
                            marginTop: "4px"
                        }}
                    >
                        <TextField size="small" fullWidth label='Country' />
                    </Box>
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        left: '0%',
                        bottom: '2%',
                        width: "30%",
                        maxWidth: '40%',
                        marginTop: "10px"
                    }}
                >
                    <label style={{ fontSize: '18px', fontWeight: "bold" }}>Phone Number</label>
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: '2%',
                        left: '30%',
                        width: "33%",
                        maxWidth: '40%',
                        marginTop: "4px"
                    }}
                >
                    <TextField size="small" fullWidth label='Phone No' />
                </Box>

            </div>
    );
}

export default PersonalGroup;