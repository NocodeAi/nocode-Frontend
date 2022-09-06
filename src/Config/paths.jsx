import { screens } from '../Screens';
import App from '../App';

const BPM_components = screens.BPM
const DATABASE_component = screens.Database
const paths = [
    {
        id: 0,
        name: "App",
        path: "/",
        component: App
    },
    {
        id: 1,
        name: "Projects",
        path: "/projects",
        component: App
    },
    {
        id: 2,
        name: "BPM",
        path: "/usecase_bpm",
        component: BPM_components
    },
    {
        id: 3,
        name: "Workflow",
        path: "/workflow",
        component: screens.WorkFlow
    },
    {
        id: 4,
        name: "Form Builder",
        path: "/form_builder",
        component: screens.CreateForm
    },
    {
        id: 5,
        name: "Form",
        path: "/form",
        component: screens.FormMain
    },
    {
        id: 6,
        name: "All Forms",
        path: "/all_forms",
        component: screens.FormsList
    },
    {
        id: 7,
        name: "Edit Form",
        path: "/edit_form",
        component: screens.EditForm
    },
    {
        id: 8,
        name: "LDAP",
        path: "/ldap",
        component: App
    },
    {
        id: 9,
        name: "DevOps",
        path: "/devops",
        component: App
    },
    {
        id: 10,
        name: "Integrations",
        path: "/integrations",
        component: App
    },
    {
        id: 11,
        name: "IoT",
        path: "/iot",
        component: App
    },
    {
        id: 12,
        name: "Database",
        path: "/database",
        component: DATABASE_component
    },
    {
        id: 13,
        name: "Dashboard",
        path: "/reports-dashboard",
        component: App
    },
    {
        id: 14,
        name: "Hyper Automation",
        path: "/hyper_automation",
        component: App
    },
    {
        id: 15,
        name: "Neo4j",
        path: "/neo4j",
        component: screens.Neo4J
    },
    {
        id: 16,
        name: "Login",
        path: "/login",
        component: screens.Login
    }

]

export { paths }