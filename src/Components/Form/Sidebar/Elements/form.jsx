import React from 'react';
import { constants } from '../../../../Utils/constants';

export default function Form() {
    const onDragStart = (event, fieldType) => {
        event.dataTransfer.setData('field', fieldType);
        event.dataTransfer.effectAllowed = 'move';
    };

    const elements = [
        { id: "0", name: "Container", type: "container", icon: constants.FaRegWindowMaximize },
        { id: "1", name: "Input Field", type: "inputfield", icon: constants.AiOutlineEdit },
        { id: "2", name: "Dropdown", type: "dropdown", icon: constants.FaRegListAlt },
        { id: "3", name: "Button", type: "button", icon: constants.FaRegSquare },
        { id: "4", name: "Toggle Button", type: "togglebutton", icon: constants.BsSquareHalf },
        { id: "5", name: "Label", type: "label", icon: constants.FaHeading },
        { id: "6", name: "Checkbox", type: "checkbox", icon: constants.AiOutlineCheckCircle },
        { id: "7", name: "Radio Button", type: "radiobutton", icon: constants.BiRadioCircleMarked },
        { id: "8", name: "Image", type: "image", icon: constants.BsCardImage },
        { id: "9", name: "Text Area", type: "textarea", icon: constants.BsTextareaT },
        { id: "10", name: "HTML", type: "html", icon: constants.BsCodeSlash },
        { id: "11", name: "Rich Text Editor", type: "rtf", icon: constants.FiEdit },
        { id: "12", name: "Switch", type: "switch", icon: constants.MdToggleOn },
        { id: "13", name: "Alert", type: "alert", icon: constants.FiAlertCircle },
        { id: "14", name: "Progress", type: "progress", icon: constants.CgLoadbar }
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