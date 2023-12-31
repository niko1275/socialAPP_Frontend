import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import {  useDispatch, useSelector } from 'react-redux';

import { DropDown } from '../componentes/DropDown';






export const Navbar = ({}) => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.auth);
  const authenticado = localStorage.getItem('autenticado')
  console.log(state)
  const nombre = state?.user?.usuario?.name


 

    return (
        <>

  <div className="flex px-20 bg-white shadow p-3 flex-col items-center md:flex-row md:justify-between mb-4">
    
         <div className='flex items-center'>
          <h1 className='font-bold text-black text-2xl mr-2'>Social APP</h1>
  
        </div>
        <Link to='/post/home'>

        <p className='font-bold text-1xl'>Publicaciones</p> 
        </Link>
      
        <button  className="text-white cursor-pointer">
          <div className=' flex flex-col mt-1 md:flex-row '>

 
            {authenticado  ? (
              <DropDown/>              
            ) : (
              <Link to={'/auth/login'}>
                <p className='text-black font-bold'>
                  ¡Hola!<span></span> <br/> Inicia Sesión o regístrate
                </p>
              </Link>
            )}


          </div>
        </button>
      </div>
        </>
       

    
       
    )
}
