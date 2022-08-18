import React from 'react'
import cl from './MovieItem.module.css'

const MovieItem = ({ movie }) => {
   const { poster_path, release_date, title, vote_average } = movie;
   const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

   return (
      <li className={cl.movieItem}>
         <img
            src={imgUrl}
            className={cl.movieItem__img}
         />
         <h2 className={cl.movieItem__title}>{title}</h2>
         <p className={cl.movieItem__subtitle}>{release_date}</p>
         <p className={cl.movieItem__rating}>{vote_average}</p>
      </li>
   )
}

export default MovieItem