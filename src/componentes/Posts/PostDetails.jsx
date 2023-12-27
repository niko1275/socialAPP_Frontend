import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {  getPosts } from '../../actions/posts';
import { useDispatch, useSelector } from 'react-redux';
import { CommentSection } from './CommentSection';
import moment from 'moment';


export const PostDetails = () => {
    const { id } = useParams();
    console.log(id)
    const post = useSelector(state => state.posts);
    console.log(post)


  const selectedPost = post?.find(item => item._id === id);
  console.log(post)

  if (selectedPost) {
    console.log("Post seleccionado:", selectedPost.title);
  } else {
    console.log("No se encontró ningún post con el ID proporcionado");
  }


  return (
    <div className='min-h-screen max-w-2xl mx-auto mb-10 '>

      <div className='max-w-xs md:max-w-2xl bg-white rounded-lg shadow-sm mx-auto'>
        <div >
          <p className='text-xs mt-4 ml-5'>Creado por {selectedPost?.creator} //  {moment(post.createdAt).fromNow()}</p> 
          <h3 className="text-2xl ml-5 font-bold">{selectedPost?.title}</h3>
          <p className="text-base ml-5">{selectedPost?.message}</p>
        </div>
        <div className='max-w-[300px] md:max-w-md bg-white mx-auto'>
        <img className="object-contain  w-full h-full" src={ selectedPost?.selectedFile?.secure_url ||  'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
        </div>

        <CommentSection post={selectedPost}/>
        
      </div>
     
  

  </div>
  )
}
