import React from 'react'
import cl from './MovieItem.module.css'

const MovieItem = ({ movie }) => {
   const { poster_path, release_date, title, vote_average } = movie;
   const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

   return (
      <li >
         <img
            src={imgUrl}
            className={cl.img}
         />
         <h2>{title}</h2>
         <p>{release_date}</p>
         <p>{vote_average}</p>
      </li>
   )
}

export default MovieItem