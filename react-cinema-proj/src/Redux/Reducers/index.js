import movies from './movies.js'
import seances from './seances.js'
import tickets from './tickets.js'
import { combineReducers } from 'redux'

export const allReducers = combineReducers({
    movies, seances, tickets
})

