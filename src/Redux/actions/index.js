import { loginUser, removeUser } from './authActions'
import { schemaTable } from './schemaTableAction'
import { selectedProject } from './selectedProjectAction'


const reduxActions = (dispatch) => (
    {
        loginUser: (u) => dispatch(loginUser(u)),
        removeUser: () => dispatch(removeUser()),
        schemaTable: (u) => dispatch(schemaTable(u)),
        selectedProject: (u) => dispatch(selectedProject(u))
    })

export default reduxActions