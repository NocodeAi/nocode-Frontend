
// Form
const formApi = "http://localhost:8080"
const dbApi = "http://localhost:8080"


let SAVE_FORM = `${formApi}/form/add_form`
let GET_ALL_FORMS = `${formApi}/form/get_all_forms`
let GET_FORM = `${formApi}/form/get_form`
let AUTHENTICATE_DB = `${dbApi}/connection/validate_connection`


module.exports = {
    SAVE_FORM,
    GET_ALL_FORMS,
    GET_FORM,
    AUTHENTICATE_DB
}