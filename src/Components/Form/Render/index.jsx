import './style.css'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios'

function RenderBase(props) {
    let data = props?.elements;

    const selectableItems = useRef([]);

    const style = {
        color: '#333',
        border: '1px solid #dedede',
        borderRadius: '1px',
        backgroundColor: '#f9f9f9',
        width: '100%',
        minHeight: "80vh",
        height: "80vh",
        outline: 'none',
        overflow: 'hidden'
    }

    const containerStyle = {
        position: "relative",
        height: "100vh",
        width: "100%"
    };

    const componentDidMount = () => {

        selectableItems.current = [];
        if (document.getElementById('formRender')) {
            Array.from(document.getElementById('formRender')).forEach((item, index) => {
                const { left, top, width, height } = item.getBoundingClientRect();
                // const topUpdated = top +110;

                selectableItems.current.push({
                    left,
                    top: top + 110,
                    width,
                    height
                });
            });
        }
    };

    return (
        <div className="container-render">
            {data?.nodes?.map(element => {
                if (element.type) {
                    return (
                        <div style={
                            {
                                position: "absolute", 
                                top: element?.position?.y, 
                                left: element?.position?.x,
                                width: element?.width,
                                height: element?.height
                            }} key={element?.id}>
                            {<element.component
                                data={element}
                                componentDidMount={componentDidMount} />}
                        </div>
                    )

                }
            })}
        </div>
    );
}

export default RenderBase;