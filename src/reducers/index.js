import { combineReducers } from 'redux';
import users from './user';
import movies from './movies';
import movieBooking from './movieBooking';
const appReducer = combineReducers({
    users,
    movies,
    movieBooking
})
export default appReducer;