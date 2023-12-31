import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { comentario } from '../../actions/posts'
import { useParams } from 'react-router-dom'

export const CommentSection = ({ post }) => {
    const [comentario2,setComentario2] = useState('')
    const state = useSelector((state) => state.auth)
    const userId= state?.user?.usuario?._id
  
    const {id} = useParams();
    console.log('id')
    console.log(state)
    const dispatch = useDispatch();
    const handleSubmit= (e)=>{
        e.preventDefault(); 
        dispatch(comentario(id,comentario2,userId))
    }

  return (
    <div>
        <div className="flex items-center flex-col mx-10 sm:mx-10">
            <form className='w-full' onSubmit={handleSubmit}>
            <div className=" flex flex-col mt-10">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Escribe tu comentario</label>
            <textarea id="message" rows="4" 
                value={comentario2}
                onChange={(e) => setComentario2(e.target.value)} className="block mb-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="
                ...">
            </textarea>
    
            <button
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-md disabled:opacity-50"
            
            >
                Comentar
            </button>
            </div>
            </form>


            <div className="w-full mt-4 pr-8 ">
            <h6 className="mb-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">Comentarios</h6>
            
            {post?.comments?.map((comentario, index) => (
           
           <ol key={index} class="relative border-s border-gray-200 dark:border-gray-700">                  
                <li class="mb-2 ms-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                    </span>
             
                    <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                        <div class="items-center justify-between mb-3 sm:flex">
                            
                            <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">{comentario.name} </div>
                        </div>
                        <div class="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                            {comentario.text}
                        
                        </div>
                    </div>
                </li>
            </ol>
            ))}





            
            <div  />
            </div>
        </div>

        <div className='flex items-end'>  
            
        </div>
    </div>
  )
}
