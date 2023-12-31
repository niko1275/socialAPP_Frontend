import React, { useState } from 'react'
import {} from '../../public/user.png'
import {  logoutAction } from '../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
export const DropDown = () => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const dispatch = useDispatch();
    const auth = useSelector((state)=> state.auth);
    console.log(auth)
    const toggleDropDown = () => {
      setIsDropDownOpen(!isDropDownOpen);
    };
  
    const logout = ()=>{
    
        try {
            dispatch(logoutAction())
        }catch(error){
            
        }
    }

  return (
    <>
    <div className="relative inline-block">


      <button id="dropdownAvatarNameButton" onClick={toggleDropDown}
        onMouseDown={(e) => e.preventDefault()} data-dropdown-toggle="dropdownAvatarName" class="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white" type="button">

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
    <p className='font-bold'>
    {auth?.user?.usuario?.name}
    </p>
   
    <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
    </svg>
    </button>
      

      {isDropDownOpen && (
        <div
          id="dropdownInformation"
          className="absolute right-0   mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div className="font-medium truncate ">{auth?.user?.usuario?.email}</div>
          </div>
    
          <div className="py-2">
            <button
              href="#"
              onClick={logout}
              className=" w-full px-4 py-2 text-sm text-gray-700 font-bold hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      )}
      </div>
    </>
  )
}
