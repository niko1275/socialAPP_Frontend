import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { registerUser } from '../../actions/auth';


export const RegisterPage = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        console.log(data);
        dispatch(registerUser(data))
      };

  return (
    <>
    <div className='container mx-auto mt-5 w-[400px] md:w-1/2 lg:w-2/7'>
    
     <form onSubmit={handleSubmit(onSubmit)} className='my-10 bg-white shadow rounded-lg px-10 py-10'>

        <h1 className='font-bold text-xl'>Crea Tu cuenta en social app</h1>

        <div className='my-5'>
          <label className='uppercase text-gray-500 text-xl block font-bold' htmlFor='name'>Nombre</label>
          <input
            type='text'
            placeholder='Ingresar Nombre'
            className={`w-full mt-3 p-3 border rounded-xl ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            {...register('name', { required: 'Este campo es obligatorio' })}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>



        <div className='my-5'>
          <label className='uppercase text-gray-500 text-xl block font-bold' htmlFor='nombre'>Email</label>
          <input
            type='email'
            placeholder='Ingresar Email'
            className={`w-full mt-3 p-3 border rounded-xl ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            {...register('email', { required: 'Este campo es obligatorio' })}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div className='my-5'>
          <label className='uppercase text-gray-500 text-xl block font-bold' htmlFor='nombre'>password</label>
          <input
            type='password'
            placeholder='Ingresar password'
            className={`w-full mt-3 p-3 border rounded-xl ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            {...register('password', { required: 'Este campo es obligatorio' })}
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>


        <div className='my-5'>
          <label className='uppercase text-gray-500 text-xl block font-bold' htmlFor='nombre'>Repetir password</label>
          <input
            type='password'
            placeholder='Repetir password'
            className={`w-full mt-3 p-3 border rounded-xl ${errors.Repetirpassword ? 'border-red-500' : 'border-gray-300'}`}
            {...register('Repetirpassword', { required: 'Este campo es obligatorio' })}
          />
          {errors.Repetirpassword && <p className="text-red-500 text-xs mt-1">{errors.Repetirpassword.message}</p>}
        </div>



        <input type='submit' className='py-3 text-white uppercase font-bold bg-sky-600 rounded w-full hover:cursor-pointer hover:bg-sky-700 transition-colors ' value='Crear Cuenta'/>

    </form>

    <nav className='lg:flex lg:justify-between'>
        <Link className='block text-center my-5 text-slate-500 uppercase text-sm' to='/auth/login'>¿Ya tienes una cuenta? <span className='text-sky-500 hover:text-sky-700'>Inicia Sesión</span></Link>
        <Link className='block text-center my-5 text-slate-500 uppercase text-sm' to='/olvide-password'>Olvide mi <span className='text-sky-500 hover:text-sky-700'>Password</span> </Link>
    </nav>


    </div>



    
 

   </>
  )

}