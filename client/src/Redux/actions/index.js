import { loginUser, removeUser } from './authActions'


const reduxActions = (dispatch) => (
    {
        loginUser: (u) => dispatch(loginUser(u)),
        removeUser: () => dispatch(removeUser())
    })

export default reduxActions