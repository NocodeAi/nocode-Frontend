import React from 'react';
import { constants } from '../../../../Utils/constants';

export default function Feedback() {
    const onDragStart = (event, fieldType) => {
        event.dataTransfer.setData('field', fieldType);
        event.dataTransfer.effectAllowed = 'move';
    };

    const elements = [
        { id: "0", name: "Alert", type: "alert", icon: constants.FiAlertCircle },
        { id: "1", name: "Progress", type: "progress", icon: constants.CgLoadbar },
        { id: "2", name: "Rating", type: "rating", icon: constants.AiFillStar }
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
