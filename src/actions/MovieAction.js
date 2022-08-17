import axios from "axios";
import { setMovieAction } from "../store/reducers/MovieReducer";

export const getMovie = () => {
   return async (dispatch) => {
      const res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=8a889d86688e82341a3066e97fac71f0&language=en-US&page=1')
      dispatch(setMovieAction(res.data));
   }
}