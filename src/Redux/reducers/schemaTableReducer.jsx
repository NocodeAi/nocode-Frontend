const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'SCHEMA_TABLE': {
            return { ...state, schemaTable: action.schemaTable }
        }
        default: {
            return state
        }
    }
}

export default reducer