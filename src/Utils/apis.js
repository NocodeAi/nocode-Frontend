
// Form
const formApi = "http://localhost:8080"
const dbApi = "http://localhost:8080"


let SAVE_FORM = `${formApi}/api/form/add_form`
let GET_ALL_FORMS = `${formApi}/api/form/get_all_forms`
let GET_FORM = `${formApi}/api/form/get_form`
let AUTHENTICATE_DB = `${dbApi}/api/database/validate_connection`
let EXECUTE_QUERY = `${dbApi}/api/database/execute_query`
let GET_COLUMNS = `${dbApi}/api/database/get_column_list`



module.exports = {
    SAVE_FORM,
    GET_ALL_FORMS,
    GET_FORM,
    AUTHENTICATE_DB,
    EXECUTE_QUERY,
    GET_COLUMNS
}