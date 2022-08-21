import axios from "axios";
import { getMovieAction } from "../store/reducers/MovieReducer";

export const getIdMovie = (id) => {
   return async (dispatch) => {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8a889d86688e82341a3066e97fac71f0&language=en-US`)
      dispatch(getMovieAction(res.data));
   }
}