import './style.css'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios'

function RenderBase(props) {
    let data = props?.elements;

    const selectableItems = useRef([]);

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
        <div style={{ alignItems: "center", paddingLeft: "20%", paddingRight: "20%", minHeight: "50vh", height: "85vh" }}>
            <div style={{textAlign: "center", padding: "12px", backgroundColor: "#027ef8", color: "#ffffff"}}>
                <label style={{fontSize: "22px", fontWeight: "bold"}}>{data?.formName}</label>
            </div>
            <div style={{display: "block", overflow: "auto", border: "1px solid #a1a1a1"}}>
                <div className="container-render">
                    {data?.nodes?.map(element => {
                        if (element?.type) {
                            return (
                                <div style={
                                    {
                                        position: "relative",
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
            </div>
        </div>
    );
}

export default RenderBase;