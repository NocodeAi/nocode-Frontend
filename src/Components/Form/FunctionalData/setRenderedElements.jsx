import {
    InputText,
    // SplitContainer,
    Container,
    Label,
    Checkbox,
    RadioButton,
    Button,
    Card,
    Spacer,
    Dropdown,
    TextArea,
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
} from '../Render/Nodes'

const handleElements = (getType, node) => {
    const inputField = {
        component: InputText,
        ...node
    }

    const datePicker = {
        component: DatePicker,
        ...node
    }

    const card = {
        component: Card,
        ...node
    }

    const timePicker = {
        component: TimePicker,
        ...node
    }

    const rating = {
        component: Rating,
        ...node
    }

    const label = {
        component: Label,
        ...node
    }

    const link = {
        component: Link,
        ...node
    }

    const tabs = {
        component: Tabs,
        ...node
    }

    const rtf = {
        component: RTF,
        ...node
    }

    const breadcrumbs = {
        component: Breadcrumbs,
        ...node
    }

    const switchProp = {
        component: Switch,
        ...node
    }

    const accordion = {
        component: Accordion,
        ...node
    }

    const alert = {
        component: Alert,
        ...node
    }

    const dropdown = {
        component: Dropdown,
        ...node
    }

    const button = {
        component: Button,
        ...node
    }

    const modal = {
        component: Modal,
        ...node
    }

    const spacer = {
        component: Spacer,
        ...node
    }

    const checkbox = {
        component: Checkbox,
        ...node
    }

    const transferList = {
        component: TransferList,
        ...node
    }

    const toggleButton = {
        component: ToggleButton,
        ...node
    }

    const avatar = {
        component: Avatar,
        ...node
    }

    const badge = {
        component: Badge,
        ...node
    }

    const progress = {
        component: Progress,
        ...node
    }

    const radioButton = {
        component: RadioButton,
        ...node
    }

    // const splitContainer = {
    //     component: SplitContainer,
    //     ...node
    // }

    const container = {
        component: Container,
        ...node
    }

    const swimlane = {
        component: Swimlane,
        ...node
    }

    const textArea = {
        component: TextArea,
        ...node

    }

    // const uploadImage = {
    //     component: UploadImage,
    //     ...node
    // }

    const imageList = {
        component: ImageList,
        ...node
    }

    const html = {
        component: HTML,
        ...node

    }


    const Components = {
        inputfield: inputField,
        datepicker: datePicker,
        timepicker: timePicker,
        card,
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
        // splitcontainer: splitContainer,
        container,
        swimlane,
        textarea: textArea,
        // image: uploadImage,
        imagelist: imageList,
        html,
    }

    return Components[getType]

}

export default handleElements;