import React from 'react';
import { constants } from '../../../../Utils/constants';

export default function Navigation() {
    const onDragStart = (event, fieldType) => {
        event.dataTransfer.setData('field', fieldType);
        event.dataTransfer.effectAllowed = 'move';
    };

    const elements = [
        { id: "0", name: "Link", type: "link", icon: constants.MdOutlineLink },
        { id: "1", name: "Breadcrumbs", type: "breadcrumbs", icon: constants.CgArrowsExchange },
        { id: "2", name: "Tabs", type: "tabs", icon: constants.CgTab }
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
