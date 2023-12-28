import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom';
import { likePost } from '../../actions/posts';
import { Dropdown } from '../ui/Dropdown';


export const Post = ({ post }) => {

  const dispatch = useDispatch();

  const auth= useSelector((state)=>state.auth);
  const existe = auth?.user?.usuario?._id;
 

  const handleLike = async (id,userId) => {
      if(userId){
       
        dispatch(likePost(id,userId));
      }
     
  };

  return (
    <div className=" my-4 bg-white shadow-md rounded-md overflow-hidden  ">
        <div className="flex items-center justify-center">
        
          <img
            className="object-cover object-top w-full shadow h-80"
            src={
              post?.selectedFile?.secure_url ||
              'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
            }
            alt={post.title}
          />
      
         
        </div>
        <div className="p-4">
          <div className="flex  justify-between mb-2">      
            <div>
            {Array.isArray(post.tags) ? (
              post.tags.map((tag, index) => (
                <span key={index} className="text-gray-500 text-sm mr-2">
                  #{tag.trim()}
                </span>
              ))
            ) : (
              <span className="text-gray-500 text-sm mr-2">
                #{post.tags.trim()}
              </span>
            )}
            
            </div>
            <p>
              <Dropdown/>
            </p>
          </div>

          <div className="mb-2">
            <p className="text-gray-500 text-sm"></p>
          </div>
          <h5 className="text-2xl font-bold mb-2">{post.title}</h5>
          <p className="text-gray-700">{post.message}</p>
        </div>

        <div className="flex justify-between items-center p-4 bg-gray-100">
          <button
            className="text-sky-900 hover:underline"
            onClick={() => handleLike(post._id,auth?.user?.usuario?._id)}

          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 inline-block mr-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
              </svg>

            </svg>
            Like {post.likes.length}
          </button>


          <button
            className="text-sky-900  hover:underline"

          >
            <Link to={`/post/${post._id}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 inline-block mr-1"

              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>

              </svg>
              Comentar
            </Link>
          </button>

          
        </div>
    </div>



  )
}
