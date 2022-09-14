import {
    AiOutlineDown,
    AiOutlineUser,
    AiOutlineSetting,
    AiOutlineDelete,
    AiOutlineEdit,
    AiOutlineCheckCircle,
    AiOutlineSplitCells,
    AiOutlineUpload,
    AiOutlineArrowRight,
    AiOutlineArrowLeft,
    AiOutlineArrowDown,
    AiOutlineArrowUp,
    AiTwotoneStar,
    AiOutlineDownload,
    AiOutlineMail,
    AiFillStar,
    AiOutlineDatabase,
    AiOutlinePhone,
    AiOutlineInbox,
    AiOutlineWarning,
    AiOutlineRedo,
    AiOutlineZoomIn,
    AiOutlineZoomOut,
    AiOutlineProject, 
    AiOutlineFundProjectionScreen,
    AiOutlineForm,
    AiOutlineRobot
} from 'react-icons/ai';
import axios from 'axios';

import {
    TiStarburstOutline
} from 'react-icons/ti';

import {
    RiStackOverflowLine,
    RiOrganizationChart,
    RiNotificationBadgeLine,
    RiFlowChart,
    RiDashboardLine
} from 'react-icons/ri';

import {
    SiOpslevel,
    SiGooglecloud,
    SiMysql,
    SiMicrosoftazure,
    SiPostgresql,
    SiMongodb,
    SiOracle,
    SiNeo4J
} from 'react-icons/si';

import {
    MdOutlineLink,
    MdOutlineArrowDropDownCircle,
    MdToggleOn,
    MdUnsubscribe,
    MdPublish,
    MdOutlineInventory,
    MdOutlineTagFaces,
    MdKeyboardArrowDown,
    MdKeyboardArrowUp,
    MdSettingsSuggest,
    MdOutlineWorkOutline,
    MdOutlineIntegrationInstructions,
    MdOutlineDeviceHub,
    MdOutlineContentCopy
} from 'react-icons/md'

import {
    CgShapeCircle,
    CgArrowsExchange,
    CgTab,
    CgRemove,
    CgLoadbar
} from 'react-icons/cg';

import {
    FaFont,
    FaRegSquare,
    FaRegListAlt,
    FaRegWindowMaximize,
    FaHeading,
    FaDatabase,
    FaGripLines,
    FaLink,
    FaLaptop,
    FaFax,
    FaTrash,
    FaEdit,
    FaProjectDiagram
} from 'react-icons/fa';

import {
    FiAlertCircle,
    FiEdit
} from 'react-icons/fi';

import {
    BsArrowsExpand,
    BsTextareaT,
    BsCodeSlash,
    BsCardImage,
    BsImages,
    BsFileArrowDownFill,
    BsDiamondFill,
    BsStopCircleFill,
    BsBoxArrowUpRight,
    BsDiamond,
    BsCalendarDate,
    BsSquareHalf,
    BsArrowLeftRight,
    BsTriangle,
    BsHexagon,
    BsKanban,
    BsStackOverflow,
    BsEyeglasses,
    BsGearFill,
    BsBoundingBox
} from 'react-icons/bs';

import {
    BiRadioCircleMarked,
    BiRectangle,
    BiCylinder,
    BiCircle,
    BiTimeFive
} from 'react-icons/bi';

import {
    VscDebugStart,
    VscEditorLayout,
    VscArrowRight
}
    from 'react-icons/vsc';
import {
    DiDatabase,
    DiMysql
}
    from "react-icons/di";
import {
    GiLogicGateAnd,
    GiLogicGateOr,
    GiResize,
    GiCommercialAirplane,
    GiCargoShip,
    GiForklift,
    GiTruck
}
    from 'react-icons/gi';
import {
    ImLoop
}
    from 'react-icons/im'


import { GrMysql } from "react-icons/gr";
// db_Connection
export function postApi(data) {
    axios.post("http://localhost:4000/connection/auth_connection", data)
        .then((res) => {
            console.log(res?.data?.msg)
            console.log(res,"waesdfghfdsadfsghf")
        }).catch((error) => {
            console.log(error,"Error")
        })
}
// LOGO
const logo = "https://nocodeai.cloud/wp-content/uploads/2022/04/nocode-main-logo-300x41.png";
const constants = {
    logo,
    FaLaptop,
    AiOutlineDatabase,
    AiOutlineDown,
    AiOutlineUser,
    AiOutlineDelete,
    AiOutlineSetting,
    AiOutlineUpload,
    AiOutlineProject, 
    AiOutlineFundProjectionScreen,
    AiOutlineForm,
    AiOutlineRobot,
    AiFillStar,
    FaFont,
    FaRegSquare,
    FaRegListAlt,
    FaLink,
    FaRegWindowMaximize,
    FaHeading,
    FaDatabase,
    FaGripLines,
    FaTrash,
    FaEdit,
    BsArrowsExpand,
    BsTextareaT,
    BsCodeSlash,
    BsCardImage,
    BsFileArrowDownFill,
    BsBoxArrowUpRight,
    BsCalendarDate,
    BsGearFill,
    BiRadioCircleMarked,
    BiRectangle,
    AiOutlineEdit,
    MdOutlineIntegrationInstructions,
    MdOutlineDeviceHub,
    AiOutlineCheckCircle,
    AiOutlineSplitCells,
    CgShapeCircle,
    CgArrowsExchange,
    CgTab,
    CgRemove,
    MdOutlineLink,
    MdSettingsSuggest,
    MdKeyboardArrowDown,
    MdKeyboardArrowUp,
    MdOutlineContentCopy,
    FiAlertCircle,
    FiEdit,
    VscEditorLayout,
    MdOutlineArrowDropDownCircle,
    MdToggleOn,
    AiOutlineArrowRight,
    AiOutlineArrowLeft,
    AiOutlineArrowDown,
    AiOutlineArrowUp,
    AiTwotoneStar,
    VscDebugStart,
    BsDiamondFill,
    BsStopCircleFill,
    AiOutlineDownload,
    AiOutlineMail,
    GiLogicGateAnd,
    GiLogicGateOr,
    MdUnsubscribe,
    MdPublish,
    GiResize,
    GiCommercialAirplane,
    GiCargoShip,
    GiForklift,
    TiStarburstOutline,
    GiTruck,
    MdOutlineInventory,
    RiStackOverflowLine,
    SiOpslevel,
    BiCylinder,
    BsDiamond,
    BiCircle,
    BiTimeFive,
    BsBoundingBox,
    RiOrganizationChart,
    RiNotificationBadgeLine,
    BsSquareHalf,
    BsArrowLeftRight,
    CgLoadbar,
    MdOutlineTagFaces,
    BsTriangle,
    ImLoop,
    BsHexagon,
    BsImages,
    DiDatabase,
    DiMysql,
    SiMysql,
    SiGooglecloud,
    SiMicrosoftazure,
    SiPostgresql,
    SiMongodb,
    SiOracle,
    SiNeo4J,
    RiFlowChart,
    RiDashboardLine,
    GrMysql,
    MdOutlineWorkOutline,
    AiOutlinePhone,
    FaFax,
    AiOutlineInbox,
    VscArrowRight,
    AiOutlineWarning,
    BsKanban,
    BsStackOverflow,
    VscArrowRight,
    AiOutlineRedo,
    BsEyeglasses,
    AiOutlineZoomIn,
    AiOutlineZoomOut,
    FaProjectDiagram
}

export { constants }