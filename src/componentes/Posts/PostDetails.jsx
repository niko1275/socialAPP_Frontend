import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {  getPosts } from '../../actions/posts';
import { useDispatch, useSelector } from 'react-redux';
import { CommentSection } from './CommentSection';
import moment from 'moment';


export const PostDetails = () => {
    const { id } = useParams();
    const post = useSelector(state => state.posts);
    
  const selectedPost = post?.find(item => item._id === id);
  return (
    <div className=' max-w-2xl mx-auto mb-10 shadow-2xl '>

      <div className='max-w-xs md:max-w-2xl bg-white rounded-lg shadow-sm mx-auto'>
        
        <div className=''>
          
          <p className='text-xs mt-4 ml-5 pt-2 font-bold'>Creado por {selectedPost?.creator} //  {moment(post.createdAt).fromNow()}</p> 
          <h3 className="text-2xl ml-5 font-bold ">{selectedPost?.title}</h3>
          
        </div>
        <div class="border-b-8 h-2 mb-1 border-slate-500-500 w-full"></div>
        <div className='max-w-[300px] md:max-w-md bg-white mx-auto  '>
        <img className="object-contain  w-full h-full " src={ selectedPost?.selectedFile?.secure_url ||  'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
        
        </div>
      
        <div className=' pt-2'>
          <p className='mx-10 mb-3 text-gray-500 dark:text-gray-400'>{selectedPost?.message}</p>
        </div>
        <div class="border-b-8 mb-1 border-slate-500-500 w-full mt-1"></div>
        
        <CommentSection post={selectedPost}/>
        
      </div>
     
  

  </div>
  )
}
