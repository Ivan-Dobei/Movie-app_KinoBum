const initialState = {
   items: [],
   isFetching: true,
   page: 1
}

const SET_MOVIE = 'SET_MOVIE';
const GET_NEXT_PAGE = 'GET_NEXT_PAGE';

export const MovieReducer = (state = initialState, action) => {
   switch (action.type) {

     case SET_MOVIE:
      return {
         ...state,
         items: action.payload.results,
         page: state.page + 1
      }
      case GET_NEXT_PAGE:
         return {
            ...state,
            items: [...state.items, ...action.payload.results],
            page: state.page + 1
         }

      default:
         return state;
   }
}

export const setMovieAction = payload => ({type: SET_MOVIE, payload});
export const getNextPageAction = payload => ({type: GET_NEXT_PAGE, payload})