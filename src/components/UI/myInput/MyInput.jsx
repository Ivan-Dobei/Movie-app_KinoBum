import React from 'react'
import cl from './MyInput.module.css'

const MyInput = ({ ...props }) => {
   return (
      <form className = {cl.myInput__form}>
         <input
            {...props}
            className={cl.myInput}
         />
         <button className={cl.myInput__btn} type='submit'></button>
      </form>
   )
}

export default MyInput