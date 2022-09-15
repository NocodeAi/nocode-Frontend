import React from 'react';
import { constants } from '../../../../Utils/constants';

export default function Surfaces() {
    const onDragStart = (event, fieldType) => {
        event.dataTransfer.setData('field', fieldType);
        event.dataTransfer.effectAllowed = 'move';
    };

    const elements = [
        { id: "0", name: "Accordion", type: "accordion", icon: constants.MdOutlineArrowDropDownCircle },
        { id: "1", name: "Container", type: "container", icon: constants.FaRegWindowMaximize },
        { id: "2", name: "Transfer List", type: "transferlist", icon: constants.BsArrowLeftRight }
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
