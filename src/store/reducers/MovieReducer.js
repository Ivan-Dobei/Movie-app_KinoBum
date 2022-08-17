const initialState = {
   items: [],
   isFetching: true,
}

const SET_MOVIE = 'SET_MOVIE';

export const MovieReducer = (state = initialState, action) => {
   switch (action.type) {

     case SET_MOVIE:
      return {
         ...state,
         items: action.payload.results
      }

      default:
         return state;
   }
}

export const setMovieAction = payload => ({type: SET_MOVIE, payload});