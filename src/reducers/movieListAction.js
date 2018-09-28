const initialState = {
    isLoading:false,
    hasErrored: false,
    filteredData: [],
    items: [],
    filter: '',
    movieDetails: {}
}
export function movieListisLoadingReducer(state=initialState, action) {
    switch(action.type) {
        case "MOVIE_LIST_IS_LOADING": 
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state;
    }
}

export function movieListErrorReducer(state=initialState, action) {
    switch(action.type) {
        case "MOVIE_LIST_ERROR":
            return {
                ...state,
                hasErrored: action.hasErrored
            }
        default:
            return state;
    }
}
export function movieListReducer(state=initialState, action) {
    switch(action.type) {
        case "MOVIE_LIST":
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}

export function movieListFilterReducer(state=initialState, action) {
    switch(action.type) {
        case "SET_VISIBILITY_FILTER":
            return {
                ...state,
                filter: action.filter
            }
        default: 
            return state;
    }
}

export function movieListDataWithFilterReducer(state=initialState, action) {
    switch(action.type) {
        case "FETCH_DATA_WITH_FILTER":
            return {
                ...state,
                filteredData: action.filteredData
            }
        default:
            return state;
    }
}

export function movieDetailsReducer(state=initialState, action) {
    switch(action.type) {
        case "SET_MOVIE_DETAILS":
            return {
                ...state,
                movieDetails: action.movieDetails
            }
        default:
            return state;
    }
}