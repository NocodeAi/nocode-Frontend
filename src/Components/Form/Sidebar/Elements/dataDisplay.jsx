import React from 'react';
import { constants } from '../../../../Utils/constants';

export default function DataDisplay() {
    const onDragStart = (event, fieldType) => {
        event.dataTransfer.setData('field', fieldType);
        event.dataTransfer.effectAllowed = 'move';
    };

    const elements = [
        { id: "0", name: "Image", type: "image", icon: constants.BsCardImage },
        { id: "1", name: "Avatar", type: "avatar", icon: constants.MdOutlineTagFaces },
        { id: "2", name: "Badge", type: "badge", icon: constants.RiNotificationBadgeLine },
        { id: "3", name: "HTML", type: "html", icon: constants.BsCodeSlash },
        { id: "4", name: "Image List", type: "imagelist", icon: constants.BsImages },
        { id: "5", name: "Spacer", type: "spacer", icon: constants.BsArrowsExpand }
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
