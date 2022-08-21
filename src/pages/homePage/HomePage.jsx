import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getIdMovie } from '../../actions/MovieIdAction';
import MovieList from '../../components/movieList/MovieList';
import MainButton from '../../components/UI/mainButton/MainButton';
import { getIdAction } from '../../store/reducers/MovieReducer';
import cl from './HomePage.module.css'

const HomePage = () => {

   const dispatch = useDispatch();
   const id = 453395;
   const linkUrl = `/movie:${id}`;

   const getItemId = () => {
      dispatch(getIdAction(id));
      dispatch(getIdMovie(id));
   }


   return (
      <div className={cl.homePage}>
         <div className={cl.container}>
            <div className={cl.hero}>
               <div className={cl.hero__container}>
                  <h1 className={cl.hero__title}>Doctor Strange: In the Multiverse of Madness</h1>
                  <Link
                     to={linkUrl}
                     onClick={getItemId}
                  >
                     <MainButton>Learn more</MainButton>
                  </Link>
               </div>
            </div>
            <div className={cl.movieList}>
               <div className={cl.movieList__top}>
                  <h2 className={cl.movieList__title}>Top rated movies</h2>
                  <Link to='/movies'>
                     <MainButton>See all</MainButton>
                  </Link>
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