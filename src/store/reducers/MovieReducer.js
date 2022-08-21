const initialState = {
   items: [],
   item: [],
   isFetching: true,
   page: 1,
   id: 0
}

const SET_MOVIE = 'SET_MOVIE';
const GET_NEXT_PAGE = 'GET_NEXT_PAGE';
const GET_ID = 'GET_ID';
const GET_MOVIE = 'GET_MOVIE';

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
      case GET_ID:
         return {
            ...state,
            id: action.payload
         }
      case GET_MOVIE:
         return {
            ...state,
            item: action.payload
         }

      default:
         return state;
   }
}

export const setMovieAction = payload => ({ type: SET_MOVIE, payload });
export const getNextPageAction = payload => ({ type: GET_NEXT_PAGE, payload });
export const getIdAction = payload => ({ type: GET_ID, payload });
export const getMovieAction = payload => ({ type: GET_MOVIE, payload });