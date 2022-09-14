
// URL
const formApi = "http://localhost:8080"
const dbApi = "http://localhost:8080"
const projectApi = "http://localhost:8081"


// FORM
let SAVE_FORM = `${formApi}/api/form/add_form`
let GET_ALL_FORMS = `${formApi}/api/form/get_all_forms`
let GET_FORM = `${formApi}/api/form/get_form`
let DELETE_FORM = `${formApi}/api/form/delete_form`

// DATABASE
let AUTHENTICATE_DB = `${dbApi}/api/database/validate_connection`
let EXECUTE_QUERY = `${dbApi}/api/database/execute_query`
let GET_COLUMNS = `${dbApi}/api/database/get_column_list`

// PROJECT
let CREATE_PROJECT = `${projectApi}/api/project/add_project`
let GET_ALL_PROJECTS = `${projectApi}/api/project/get_all_projects`
let DELETE_PROJECT = `${projectApi}/api/project/delete_project`

// RENDER FORM URL
let RENDER_FORM = `http://localhost:3001`


module.exports = {
    SAVE_FORM,
    GET_ALL_FORMS,
    GET_FORM,
    DELETE_FORM,
    AUTHENTICATE_DB,
    EXECUTE_QUERY,
    GET_COLUMNS,
    CREATE_PROJECT,
    GET_ALL_PROJECTS,
    DELETE_PROJECT,
    RENDER_FORM
}