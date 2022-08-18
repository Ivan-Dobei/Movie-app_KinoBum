import React from 'react'
import { Link } from 'react-router-dom';
import cl from './Logo.module.css'

const Logo = () => {
   return (
      <Link to='/'>
         <h3 className={cl.logo}>Kino<span className={cl.logo__blue}>Bum</span></h3>
      </Link>
   )
}

export default Logo