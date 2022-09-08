import { screens } from '../Screens';
import App from '../App';

const paths = [
    {
        id: 0,
        name: "Home",
        path: "/",
        component: screens.Home
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
        component: screens.BPM
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
        name: "View Form",
        path: "/view_form",
        component: screens.ViewForm
    },
    {
        id: 9,
        name: "LDAP",
        path: "/ldap",
        component: App
    },
    {
        id: 10,
        name: "DevOps",
        path: "/devops",
        component: App
    },
    {
        id: 11,
        name: "Integrations",
        path: "/integrations",
        component: App
    },
    {
        id: 12,
        name: "IoT",
        path: "/iot",
        component: App
    },
    {
        id: 13,
        name: "Database",
        path: "/database",
        component: screens.Database
    },
    {
        id: 14,
        name: "Dashboard",
        path: "/reports-dashboard",
        component: App
    },
    {
        id: 15,
        name: "Hyper Automation",
        path: "/hyper_automation",
        component: App
    },
    {
        id: 16,
        name: "Neo4j",
        path: "/neo4j",
        component: screens.Neo4J
    },
    {
        id: 17,
        name: "Login",
        path: "/login",
        component: screens.Login
    }

]

export { paths }