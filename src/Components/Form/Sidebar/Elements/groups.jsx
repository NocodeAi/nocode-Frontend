import React from 'react';
import { constants } from '../../../../Utils/constants';

export default function Groups() {
    const onDragStart = (event, fieldType) => {
        event.dataTransfer.setData('field', fieldType);
        event.dataTransfer.effectAllowed = 'move';
    };
    return (
        <>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'personal')} draggable>
                <constants.FiEdit className='sidebar-icons' /><span>Personal Information</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'modal')} draggable>
                <constants.BsBoxArrowUpRight className='sidebar-icons' /><span>Modal</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'swimlane')} draggable>
                <constants.FaGripLines className='sidebar-icons' /><span>Swimlane</span>
            </div>
        </>
    )
}