import React from 'react'
import Logo from '../UI/logo/Logo'
import cl from './Footer.module.css'

const Footer = () => {
   return (
      <footer className={cl.footer}>
         <div className={cl.container}>
            <Logo />
            <nav className={cl.nav}>
               <ul className={cl.list}>
                  <li className={cl.item}>Movies</li>
                  <li className={cl.item}>Serylals</li>
                  <li className={cl.item}>Cartoon</li>
               </ul>
            </nav>
            <small className={cl.copyright}>@ 2022 KinoBum</small>
         </div>
      </footer>
   )
}

export default Footer