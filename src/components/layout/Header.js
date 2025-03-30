import React from 'react'
import AuthForm from '../templates/authForm/AuthForm'


const Header = () => {
  return (
    <div className="flex justify-between items-center w-[calc(100%-8rem)] h-[74px] mx-auto bg-white">

      <div className="btn btn-outline btn-success md:w-40 w-32 h-11">
        <AuthForm/>
      </div>
    </div>
  )
}

export default Header

