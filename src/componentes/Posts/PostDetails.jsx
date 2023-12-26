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
    const dispatch= useDispatch();



  const selectedPost = post?.find(item => item._id === id);
  console.log(post)

  if (selectedPost) {
    console.log("Post seleccionado:", selectedPost.title);
  } else {
    console.log("No se encontró ningún post con el ID proporcionado");
  }


  return (
    <div className='min-h-screen mx-80 max-sm:mx-0 flex justify-center  '>
    {/* <div className='justify-start'>
    <div className=" flex bg-white p-8 max-sm:mx-12  shadow rounded-lg shadow-md max-sm:w-[400px] max-sm:bg-red-300 ">
    <div className="flex">
      <div className="flex-1">
        <h3 className="text-2xl font-bold">{selectedPost?.title}</h3>
        <p className="text-sm text-gray-500 mb-2">
          {selectedPost?.tags?.map((tag, index) => (
            <span key={index} className="mr-2">
              <Link to={`/tags/${tag}`} className="text-blue-500">
                {`#${tag}`}
              </Link>
            </span>
          ))}
        </p>
        <p className="text-base">{selectedPost?.message}</p>
        <p className="text-sm">
          Created by:
          <Link to={`/creators/${selectedPost?.cretor}`} className="text-blue-500">
            {` ${selectedPost?.creator}`}
          </Link>
        </p>
        <p className="text-sm">{moment(post.createdAt).fromNow()}</p>
        <hr className="my-4" />
     
        <CommentSection post={selectedPost}/>
 
        
        <hr className="my-4" />
      </div>
      <div className="flex-1 ml-4">
        <img className="w-400 h-400" src={ selectedPost?.selectedFile?.secure_url ||  'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
      </div>
    </div>
  

 
  </div>
  </div> */}

    <div className='bg-white w-full mx-60 w-[800px] h-full mb-10 mt-2 flex flex-col shadow-xl rounded-lg '>
      <div>
        <p className='text-xs mt-4 ml-5'>Creado por {selectedPost?.creator} //  {moment(post.createdAt).fromNow()}</p> 
        <h3 className="text-2xl ml-5 font-bold">{selectedPost?.title}</h3>
        <p className="text-base ml-5">{selectedPost?.message}</p>
      </div>

      <div className="w-[400px] h-[400px] sm:w-[700px]  sm:h-[700px] flex mx-auto  ">
        
          <img className="object-contain  w-full h-full" src={ selectedPost?.selectedFile?.secure_url ||  'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
      </div>


      <div>
      <CommentSection post={selectedPost}/>
      </div>

    </div>

  </div>
  )
}
