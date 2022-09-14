import { combineReducers } from 'redux'
import { positionsReduser } from './positions/positions-reduser'
import { filterReduser } from './filter/filter-reduser'

export const rootReduser = combineReducers({
   positions: positionsReduser,
   filters: filterReduser
})