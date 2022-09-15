import React from 'react';
import { constants } from '../../../../Utils/constants';

export default function DateTime() {
    const onDragStart = (event, fieldType) => {
        event.dataTransfer.setData('field', fieldType);
        event.dataTransfer.effectAllowed = 'move';
    };
    
    const elements = [
        { id: "0", name: "Date", type: "datepicker", icon: constants.BsCalendarDate },
        { id: "1", name: "Time", type: "timepicker", icon: constants.BiTimeFive }
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
