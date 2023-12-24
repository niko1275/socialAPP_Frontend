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

    useEffect(() => {
      dispatch(getPosts())
  }, [])


  const selectedPost = post?.find(item => item._id === id);
  console.log(post)

  if (selectedPost) {
    console.log("Post seleccionado:", selectedPost.title);
  } else {
    console.log("No se encontró ningún post con el ID proporcionado");
  }


  return (
    <div className='min-h-screen mx-60'>
    <div className=''>
    <div className=" bg-white p-8 mx-20 shadow rounded-lg shadow-md">
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
  </div>
  </div>
  )
}
