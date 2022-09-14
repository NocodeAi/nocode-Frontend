import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useState, useEffect } from 'react';
import './style.css';
import Tooltip from '../../Tooltip';
import { constants } from '../../../../Utils/constants'
import { Resizable } from "re-resizable";
import { flagBottom, flagTop, flagLeft, flagRight } from '../nodesFlag';
import ResizeHandle from "../resizeHandle";
import {
    copyNode,
    handleSelectNode,
    handleUpdateNode,
    selectMultipleNodes
} from '../../FunctionalData';

function PersonalGroup(props) {
    let data = props?.data;
    data.type = "personal";

    const [dimension, setDimension] = useState();
    const [multiple, setMultiple] = useState(false);
    const [fired, setFired] = useState(false);
    const [width, setWidth] = useState(data?.width);
    const [height, setHeight] = useState(data?.height);


    useEffect(() => {
        props?.componentDidMount();
    }, []);


    const onClickSetting = (event) => {
        data?.properties(event, data, props?.setNodeProperty, props?.setPropertyVisible);
    }

    const onClickDelete = (event) => {
        data?.delete(event, data, props?.elements, props?.setElements);
    }

    const handleResizeStart = (e, direction) => {
        if (
            // direction !== "bottomLeft" &&
            direction !== "topLeft" &&
            direction !== "top" &&
            direction !== "left"
        ) {
            e.stopPropagation();
        }
    };

    const handleClick = (event) => {
        multiple ? selectMultipleNodes(event, data?.id, props?.elements, props?.setElements) : handleSelectNode(event, data?.id, props?.elements, props?.setElements);
    }

    const handleKeyDown = (event) => {
        if (!fired) {
            if (event.key === 'Shift') {
                setMultiple(true);
            }
            else {
                setMultiple(false);
            }
            setFired(true);
        }
        copyNode(event, props?.elements, props?.setElements, props?.copiedNodes, props?.setCopiedNodes);
    }

    const handleKeyUp = (event) => {
        setFired(false);
        setMultiple(false);
    }

    const handleStyles = {
        top: data?.selected
            ? flagTop
            : "",
        left: data?.selected
            ? flagLeft
            : "",
        bottom: data?.selected && flagBottom,
        right: data?.selected
            ? flagRight
            : ""
    }

    const containerStyle = {
        height: "100%",
        width: `100%`,
        borderStyle:'groove',
        borderRadius:'15px'
        // zoom: `${baseZoom}%`,
    };

    const handleComponent = {
        topRight: data?.selected ? <ResizeHandle /> : "",
        topLeft: data?.selected ? <ResizeHandle /> : "",
        bottomLeft: data?.selected ? <ResizeHandle /> : "",
        bottomRight: data?.selected ? <ResizeHandle /> : ""
    }

    let element = (
        <Resizable
            size={{ width, height }}
            onResizeStop={(e, direction, ref, d) => {
                let w = width + d.width;
                let h = height + d.height
                setWidth(width + d.width);
                setHeight(height + d.height);
                handleUpdateNode(e, data?.id, data?.position, w, h, props?.elements, props?.setElements)
            }}
            style={{ textAlign: "center" }}
            defaultSize={{ width: data?.width, height: data?.height }}
            onResizeStart={handleResizeStart}
            minWidth={data?.minWidth}
            minHeight={data?.minHeight}
            maxHeight={data?.maxHeight}
            maxWidth={data?.maxWidth}
            handleStyles={handleStyles}
            handleComponent={handleComponent}
            resizeRatio={1}
        >
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
        </Resizable>
    )

    const iconStyle = { height: "23px", width: "23px", marginTop: "4px", marginLeft: "4px", marginRight: "4px", cursor: "pointer" };

    return (
        <div
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            className="inputtext"
            style={{ outline: "none" }}
            tabIndex="0">
            <Tooltip element={element} tooltip={<div style={{ display: "block" }}>
                <constants.AiOutlineSetting onClick={onClickSetting} style={iconStyle} />
                <constants.AiOutlineDelete onClick={onClickDelete} style={iconStyle} />
            </div>} />
        </div>
    );
}

export default PersonalGroup