const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'DB_CONFIG': {
            return { ...state, dbConfig: action.dbConfig }
        }
        case 'REMOVE_DB': {
            return { dbConfig: null }
        }
        default: {
            return state
        }
    }
}

export default reducer