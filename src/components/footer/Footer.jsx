import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../UI/logo/Logo'
import cl from './Footer.module.css'

const Footer = () => {
   return (
      <footer className={cl.footer}>
         <div className={cl.container}>
            <Logo />
            <nav className={cl.nav}>
               <ul className={cl.list}>
                  <li className={cl.item}>
                     <Link className={cl.link} to='/'>Home</Link>
                  </li>
                  <li className={cl.item}>
                     <Link className={cl.link} to='/movies'>Movies</Link>
                  </li>
                  <li className={cl.item}>
                     <Link className={cl.link} to='/favorites'>Favorites</Link>
                  </li>
               </ul>
            </nav>
            <small className={cl.copyright}>@ 2022 KinoBum</small>
         </div>
      </footer>
   )
}

export default Footer