import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getIdMovie } from '../../actions/MovieIdAction';
import { getIdAction } from '../../store/reducers/MovieReducer';
import cl from './MovieItem.module.css'

const MovieItem = ({ movie }) => {
   const { poster_path, release_date, title, vote_average, id } = movie;
   const dispatch = useDispatch();
   const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
   const linkUrl = `/movie:${id}`;

   const getItemId = () => {
      dispatch(getIdAction(id));
      dispatch(getIdMovie(id));
   }

   return (
      <li className={cl.movieItem}>
         <Link
            to={linkUrl}
            onClick={getItemId}
         >
            <img src={imgUrl} className={cl.movieItem__img} />
         </Link>
         <Link
            to={linkUrl}
            onClick={getItemId}
         >
            <h2 className={cl.movieItem__title}>{title}</h2>
         </Link>
         <p className={cl.movieItem__subtitle}>{release_date}</p>
         <p className={cl.movieItem__rating}>{vote_average}</p>
      </li>
   )
}

export default MovieItem