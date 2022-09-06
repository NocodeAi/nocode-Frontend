import {
    InputText,
    SplitContainer,
    Container,
    Label,
    Checkbox,
    RadioButton,
    Button,
    Spacer,
    Dropdown,
    TextArea,
    UploadImage,
    HTML,
    Link,
    Tabs,
    Breadcrumbs,
    Switch,
    Accordion,
    Alert,
    RTF,
    Modal,
    Swimlane,
    DatePicker,
    TimePicker,
    Rating,
    TransferList,
    ToggleButton,
    Avatar,
    Badge,
    Progress,
    ImageList
} from '../Nodes'

import { dataDelete, dataProperties } from './baseFunctions'

const handleElements = (getType, node) => {
    const inputField = {
        component: InputText,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const datePicker = {
        component: DatePicker,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const timePicker = {
        component: TimePicker,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const rating = {
        component: Rating,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const label = {
        component: Label,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const link = {
        component: Link,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const tabs = {
        component: Tabs,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const rtf = {
        component: RTF,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const breadcrumbs = {
        component: Breadcrumbs,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const switchProp = {
        component: Switch,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const accordion = {
        component: Accordion,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const alert = {
        component: Alert,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const dropdown = {
        component: Dropdown,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const button = {
        component: Button,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const modal = {
        component: Modal,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const spacer = {
        component: Spacer,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const checkbox = {
        component: Checkbox,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const transferList = {
        component: TransferList,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const toggleButton = {
        component: ToggleButton,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const avatar = {
        component: Avatar,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const badge = {
        component: Badge,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const progress = {
        component: Progress,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const radioButton = {
        component: RadioButton,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const splitContainer = {
        component: SplitContainer,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const container = {
        component: Container,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const swimlane = {
        component: Swimlane,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const textArea = {
        component: TextArea,
        properties: dataProperties,
        delete: dataDelete,
        ...node

    }

    const uploadImage = {
        component: UploadImage,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const imageList = {
        component: ImageList,
        properties: dataProperties,
        delete: dataDelete,
        ...node
    }

    const html = {
        component: HTML,
        properties: dataProperties,
        delete: dataDelete,
        ...node

    }


    const Components = {
        inputfield: inputField,
        datepicker: datePicker,
        timepicker: timePicker,
        rating,
        label,
        link,
        tabs,
        rtf,
        breadcrumbs,
        switch: switchProp,
        accordion,
        alert,
        dropdown,
        button,
        modal,
        spacer,
        checkbox,
        togglebutton: toggleButton,
        transferlist: transferList,
        avatar,
        badge,
        progress,
        radiobutton: radioButton,
        splitcontainer: splitContainer,
        container,
        swimlane,
        textarea: textArea,
        image: uploadImage,
        imagelist: imageList,
        html,
    }

    return Components[getType]

}

export default handleElements;