import {useState} from 'react';
import {
    singleDataChange
} from '../../../FunctionalData'

export default function Alert(props) {
    const [name, setName] = useState(props?.data?.label);
    const [type, setType] = useState(props?.data?.label);

    return (
        <div className='properties'>
            <span className='properties-header'>Properties</span>
            <div visibility={props?.visibility?.toString()} className='properties-components'>
                <h3 style={{ textAlign: "center" }}>Alert</h3>
                <span>Message:</span>
                <input value={name} onChange={(e) => {setName(e.target.value); singleDataChange(e.target.value, props?.data?.id, "label", props?.elements, props?.setElements);}} type="text" />
                <span>Type:</span>
                <select onChange={(e) => {setType(e.target.value); singleDataChange(e.target.value, props?.data?.id, "selectedType", props?.elements, props?.setElements);}}>
                    <option value="error">Error</option>
                    <option value="warning">Warning</option>
                    <option value="info">Info</option>
                    <option value="success">Success</option>
                </select>
            </div>
        </div>
    )
}