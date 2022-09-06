import React, { useState } from 'react'
import LeftPanel from './LeftPanel'
import MidPanel from './MidPanel'
import RightPanel from './RightPanel'
const DBPanel = () => {
    const [schemaTable, setSchemaTable] = useState([])
    // const { pco, setPCO } = useState()
    console.log("schemaTable=>", schemaTable)
    return (
        <div className="flex_container">
            <div className="flex_item_left"><LeftPanel setSchemaTable={setSchemaTable} /></div>
            <div className="flex_item_mid"><MidPanel /></div>
            <div className="flex_item_right"><RightPanel schemaTable={schemaTable} /></div>
        </div>
    )
}

export default DBPanel