export function movieListIsLoadingAction(bool) {
    return {
        type: "MOVIE_LIST_IS_LOADING",
        isLoading: bool
    }
}
export function movieListError(bool) {
    return {
        type: "MOVIE_LIST_ERROR",
        hasErrored: bool
    }
}

export function movieListAction(items) {
    return {
        type:"MOVIE_LIST",
        payload: items
    };
}

export function setVisibilityFilter(filter) {
    return {
        type: "SET_VISIBILITY_FILTER",
        filter
    }
}

export function movieListFilterAction(filteredData) {
    return {
        type: "FETCH_DATA_WITH_FILTER",
        filteredData: filteredData
    }
}

export function movieDetailsAction(item) {
    return {
        type: "SET_MOVIE_DETAILS",
        movieDetails: item
    }
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(movieListIsLoadingAction(true));
        fetch(url)
        .then((response)=> {
            if(!response.ok) {
                throw Error(response.statusText);
            }
            dispatch(movieListIsLoadingAction(false));
            return response;
        })
        .then((response) => response.json())
        .then((items) => {
                dispatch(movieListAction(items))
        })
        .catch(() => dispatch(movieListError(true)))
    }
}

export function fetchDataWithFilter(newValue, itemsVal) {
    return (dispatch) => {
        dispatch(setVisibilityFilter(newValue));
        let newItems = [];
        if(newValue === 'None') {
            dispatch(movieListFilterAction(itemsVal));  
        } else {
            itemsVal.map((item) => {
                let genre = item.Genre.split(", ");
                return genre.map(gen => {
                    return (gen === newValue)?newItems.push(item):null;
                })
            })
            dispatch(movieListFilterAction(newItems));   
        }
    }
}

export function setMovieDetails(item) {
    return (dispatch) => {
        dispatch(movieDetailsAction(item));
    }
}