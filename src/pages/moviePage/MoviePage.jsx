import React from 'react'
import { useSelector } from 'react-redux';
import MainButton from '../../components/UI/mainButton/MainButton';

import cl from './MoviePage.module.css'

const MoviePage = () => {

   const movie = useSelector(state => state.movie.item);
   const {
      poster_path,
      title,
      production_countries,
      genres,
      release_date,
      revenue,
      runtime,
      tagline,
      vote_count,
      vote_average,
      overview
   } = movie;
   const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
   const vote = Math.floor(vote_average * 10) / 10;


   return (
      <div className={cl.moivePage}>
         <div className={cl.container}>
            <div className={cl.content}>
               <div className={cl.content__left}>
                  <img src={imgUrl} className={cl.img} />
                  <div className={cl.vote}>{vote}</div>
               </div>
               <div className={cl.content__right}>
                  <h2 className={cl.title}>{title}</h2>
                  <MainButton>Will watch</MainButton>
                  <p className={cl.subtitle}>About Film</p>
                  <ul className={cl.list}>
                     <li className={cl.item}>
                        <span className={cl.caption}>Tagline</span>
                        <span className={cl.value}>{tagline}</span>
                     </li>
                     <li className={cl.item}>
                        <span className={cl.caption}>Release date</span>
                        <span className={cl.value}>{release_date}</span>
                     </li>
                     <li className={cl.item}>
                        <span className={cl.caption}>Revenues</span>
                        <span className={cl.value}>{revenue}$</span>
                     </li>
                     <li className={cl.item}>
                        <span className={cl.caption}>Time</span>
                        <span className={cl.value}>{runtime} min</span>
                     </li>
                     <li className={cl.item}>
                        <span className={cl.caption}>Number of votes</span>
                        <span className={cl.value}>{vote_count}</span>
                     </li>
                  </ul>
               </div>
            </div>
            <div className={cl.overview}>
               <h3 className={cl.overview__title}>Overview</h3>
               <p className={cl.overview__text}>{overview}</p>
            </div>
         </div>
      </div>
   )
}

export default MoviePage