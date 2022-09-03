import { combineReducers } from 'redux'
// import { flowDesignerReducer, authReducer, artifactReducer,  chartData, hideShutdown, allowCellEdits, dataId, editedCell, iframe, columnMenuOpen, selectedCol, selectedToggle, xarray, xarrayDim, getHiddenValue, commentsReducer } from './reducers'

import * as AllReducers from './reducers'

export default combineReducers(AllReducers)

