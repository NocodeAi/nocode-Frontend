import React from 'react';
import { constants } from '../../../../Utils/constants';

export default function PersonalIdentity() {
    const onDragStart = (event, fieldType) => {
        event.dataTransfer.setData('field', fieldType);
        event.dataTransfer.effectAllowed = 'move';
    };
    
    const elements = [
        { id: "0", name: "Full Name", type: "fullname", icon: constants.BsFillPersonFill },
        { id: "1", name: "Name PK", type: "namepk", icon: constants.BsFillPersonFill }
    ]

    return (
        <>
            {elements?.map((el) => {
                return (
                    <div key={el?.id} className='form-field-palette' onDragStart={(event) => onDragStart(event, el?.type)} draggable>
                        <el.icon className='sidebar-icons' /><span>{el?.name}</span>
                    </div>
                )
            })}
        </>
    )
}