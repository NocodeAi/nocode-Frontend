
// Form
const formApi = "http://localhost:8080"
const dbApi = "http://localhost:8080"


let SAVE_FORM = `${formApi}/form/add_form`
let AUTHENTICATE_DB = `${dbApi}/connection/validate_connection`


module.exports = {
    SAVE_FORM,
    AUTHENTICATE_DB
}