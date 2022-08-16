import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import HomePage from './pages/homePage/HomePage'
import MoviePage from './pages/moviePage/MoviePage'
import './App.css'
import { getMovie } from './actions/MovieAction'
import Header from './components/header/Header'

const App = () => {

   const dispatch = useDispatch();
   const items = useSelector(state => state.movie.items)

   useEffect(() => {
      dispatch(getMovie())
   }, [])

   console.log(items);

   return (
      <>
         <Header/>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<HomePage />} />
               <Route path='movie' element={<MoviePage />} />
            </Routes>
         </BrowserRouter>
      </>
   )
}

export default App
