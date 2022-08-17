import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getMovie } from '../../actions/MovieAction';
import MovieItem from '../movieItem/MovieItem';
import cl from './MovieList.module.css'

const MovieList = () => {

   const items = useSelector(state => state.movie.items);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getMovie());
   }, [])

   return (
      <ul className={cl.list}>
         {items.map(item =>
            <MovieItem movie={item} key={item.id}/>
         )}
      </ul>
   )
}

export default MovieList