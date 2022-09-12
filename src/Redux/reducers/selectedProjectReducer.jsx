const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'SELECT_PROJECT': {
            return { ...state, selectedProject: action?.selectedProject }
        }
        default: {
            return state
        }
    }
}

export default reducer