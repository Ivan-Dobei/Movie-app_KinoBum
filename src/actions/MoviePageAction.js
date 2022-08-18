import axios from "axios";
import { getNextPageAction } from "../store/reducers/MovieReducer";

export const getPageMovie = (page = 1) => {
   return async (dispatch) => {
   const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=8a889d86688e82341a3066e97fac71f0&language=en-US&page=${page}`)
      dispatch(getNextPageAction(res.data));
   }
}