import {combineReducers} from 'redux';
import {movieDetailsReducer, movieListDataWithFilterReducer, movieListisLoadingReducer, movieListErrorReducer, movieListReducer, movieListFilterReducer} from '../reducers/movieListAction'
export default combineReducers({
    movieListisLoadingReducer,
    movieListErrorReducer,
    movieListReducer,
    movieListFilterReducer,
    movieListDataWithFilterReducer,
    movieDetailsReducer
})