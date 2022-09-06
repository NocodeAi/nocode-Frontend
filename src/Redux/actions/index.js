import { loginUser, removeUser } from './authActions'
import {schemaTable} from './schemaTableAction'

const reduxActions = (dispatch) => (
    {
        loginUser: (u) => dispatch(loginUser(u)),
        removeUser: () => dispatch(removeUser()),
        schemaTable:(u) => dispatch(schemaTable(u))
    })

export default reduxActions