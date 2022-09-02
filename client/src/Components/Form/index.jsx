import React, { useState } from "react";
import "./style.css";
import Base from "./Base";
import Sidebar from "./Sidebar";
import Properties from "./Properties";

export default function FormBuilder(props) {
  const [nodeProperty, setNodeProperty] = useState();
  const [propertyVisible, setPropertyVisible] = useState(false);
  const [copiedNodes, setCopiedNodes] = useState([]);
  const [splitElements, setSplitElements] = useState([]);


  return (
    <div className="formbuilder">
      <Sidebar />
      <Base
        elements={props?.elements}
        setNodeProperty={setNodeProperty}
        setPropertyVisible={setPropertyVisible}
        setElements={props?.setElements}
        copiedNodes={copiedNodes}
        setCopiedNodes={setCopiedNodes}
      />
      <Properties
        elements={props?.elements}
        setElements={props?.setElements}
        setNodeProperty={setNodeProperty}
        nodeDetail={nodeProperty}
        visible={propertyVisible} />
    </div>
  );
}