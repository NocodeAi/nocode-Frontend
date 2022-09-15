import React from 'react';
import { constants } from '../../../../Utils/constants';

export default function Utils() {
    const onDragStart = (event, fieldType) => {
        event.dataTransfer.setData('field', fieldType);
        event.dataTransfer.effectAllowed = 'move';
    };

    const elements = [
        { id: "0", name: "Rich Text Editor", type: "rtf", icon: constants.FiEdit },
        { id: "1", name: "Modal", type: "modal", icon: constants.BsBoxArrowUpRight },
        { id: "2", name: "Swimlane", type: "swimlane", icon: constants.FaGripLines }
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