import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import {  useDispatch, useSelector } from 'react-redux';
import {  logoutAction } from '../actions/auth';




export const Navbar = ({}) => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.auth);
  const authenticado = localStorage.getItem('autenticado')
  console.log(state)
  const nombre = state?.user?.usuario?.name


    const logout = ()=>{
        try {
            dispatch(logoutAction())
        }catch(error){

        }
    }


    return (

        <>

  <div className="flex bg-white shadow p-3 flex-col items-center md:flex-row md:justify-between m-4 rounded-xl">
         <div className='flex items-center'>
          <h1 className='font-bold text-black text-2xl mr-2'>Social APP</h1>
        </div>
        <Link to='/post/home'>

        <p className='font-bold text-1xl'>Publicaciones</p> 
        </Link>
      
        <button  className="text-white cursor-pointer">
          <div className=' flex flex-col mt-1 md:flex-row '>

            


            {state.isAuthenticated && <button onClick={logout} className='mx-2 text-black rounded bg-sky-300 p-2 font-bold'>Cerrar session</button>}


            {authenticado  ? (
               
              <p className='text-black font-bold font-sans p-2 '>
                Bienvenido: {nombre}  
              </p>
              
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
