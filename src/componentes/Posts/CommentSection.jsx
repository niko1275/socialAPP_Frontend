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
        <h6 className="mb-4 text-xl font-bold ">Escribe tu comentario</h6>
        <textarea
            rows={4}
            className="w-full border p-2 mb-4 resize-none"
            placeholder="Comment"
            value={comentario2}
            onChange={(e) => setComentario2(e.target.value)}
        />
        <button
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md disabled:opacity-50"
         
        >
            Enviar
        </button>
        </div>
        </form>


        <div className="w-full mt-4 pr-8 ">
        <h6 className="mb-4 text-xl font-bold">Comentarios</h6>
        
        {post?.comments?.map((comentario, index) => (
        <div key={index} className="bg-gray-100 p-2 mb-2 rounded-lg">
            <div className='flex items-center'>
            <p className="text-lg font-semibold mr-1">{comentario.name}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
                
            </div>
            

            <p className="text-gray-700">{comentario.text}</p>
        </div>
        ))}
        
        <div  />
        </div>
    </div>
    </div>
  )
}
