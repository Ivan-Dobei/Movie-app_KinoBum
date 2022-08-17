import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage'
import MoviePage from './pages/moviePage/MoviePage'
import './App.css'
import Header from './components/header/Header'

const App = () => {


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
