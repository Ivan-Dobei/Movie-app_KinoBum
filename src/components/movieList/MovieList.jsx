import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getMovie } from '../../actions/MovieAction';
import { getPageMovie } from '../../actions/MoviePageAction';
import MovieItem from '../movieItem/MovieItem';
import MainButton from '../UI/mainButton/MainButton';
import cl from './MovieList.module.css'

const MovieList = () => {

   const items = useSelector(state => state.movie.items);
   const page = useSelector(state => state.movie.page);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getMovie());
   }, [])

   const getNextPage = () => {
      dispatch(getPageMovie(page));
   }

   return (
      <>
         <ul className={cl.list}>
            {items.map(item =>
               <MovieItem movie={item} key={item.id} />
            )}
         </ul>
         <MainButton onClick = {getNextPage}>Show more</MainButton>
      </>
   )
}

export default MovieList