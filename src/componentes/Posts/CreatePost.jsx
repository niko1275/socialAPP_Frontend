import React from 'react'
import {Link} from 'react-router-dom'
export const CreatePost = () => {
  return (
    <div className='text-center border flex items-center  p-4 bg-white  mx-3 rounded-xl shadow-2xl'>
        <div className='text-gray-400'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        </div>
        <div className='w-full'>
            <Link to='/post/createpost'>
                <input placeholder='Crear post' className=' w-full  p-1 '/>
            
            </Link>
        </div>
    </div>
  )
}
