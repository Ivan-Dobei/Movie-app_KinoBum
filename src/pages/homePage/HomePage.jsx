import React from 'react'
import MovieList from '../../components/movieList/MovieList';
import MainButton from '../../components/UI/mainButton/MainButton';
import cl from './HomePage.module.css'

const HomePage = () => {

   return (
      <div className={cl.homePage}>
         <div className={cl.container}>
            <div className={cl.hero}>
               <div className={cl.hero__container}>
                  <h1 className={cl.hero__title}>Doctor Strange: In the Multiverse of Madness</h1>
                  <MainButton>Learn more</MainButton>
               </div>
            </div>
            <div className={cl.movieList}>
               <div className={cl.movieList__top}>
                  <h2 className={cl.movieList__title}>Top rated movies</h2>
                  <MainButton>See all</MainButton>
               </div>
               <div className={cl.movieList__bottom}>
                  <MovieList />
               </div>
            </div>
         </div>
      </div>
   )
}

export default HomePage