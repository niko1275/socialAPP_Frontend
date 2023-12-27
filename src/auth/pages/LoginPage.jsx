import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { signin } from '../../actions/auth';


export const LoginPage = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const navigate = useNavigate()
    
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth);
    console.log(authState)

    const onSubmit = async (data)  => {
      
        try{
          const result = await dispatch(signin(data))
          navigate('/')
        }catch(error){

        }

      };

  return (
    <>
    <div className='container mx-auto mt-5 md:w-1/3 lg:w-2/7'>
    
     <form onSubmit={handleSubmit(onSubmit)} className='my-10 bg-white shadow rounded-lg px-10 py-10'>

        <h1 className='font-bold text-xl'>Crea Tu cuenta en social app</h1>

        <div className='my-5'>
          <label className='uppercase text-gray-500 text-xl block font-bold' htmlFor='Email'>Email</label>
          <input
            type='email'
            placeholder='Ingresar email'
            className={`w-full mt-3 p-3 border rounded-xl ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            {...register('email', { required: 'Este campo es obligatorio' })}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>



        <div className='my-5'>
          <label className='uppercase text-gray-500 text-xl block font-bold' htmlFor='Password'>Password</label>
          <input
            type='password'
            placeholder='Ingresar passwrod'
            className={`w-full mt-3 p-3 border rounded-xl ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            {...register('password', { required: 'Este campo es obligatorio' })}
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>




        <input type='submit' className='py-3 text-white uppercase font-bold bg-sky-600 rounded w-full hover:cursor-pointer hover:bg-sky-700 transition-colors ' value='Ingresar'/>

    </form>

    <nav className='lg:flex lg:justify-between'>
        <Link className='block text-center my-5 text-slate-500 uppercase text-sm' to='/auth/register'>¿Ni tienes una cuenta? <span className='text-sky-500 hover:text-sky-700'>Registrate</span></Link>
        <Link className='block text-center my-5 text-slate-500 uppercase text-sm' to='/olvide-password'>Olvide mi <span className='text-sky-500 hover:text-sky-700'>Password</span> </Link>
    </nav>


    </div>



    
 

   </>
  )

}