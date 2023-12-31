
import React, { useState } from 'react'
import { Post } from './Post';

export const PostContainer = ({state}) => {
  return (
    <div> 
      <div className="justify-end" >
        {state.map((post) => (
          <div key={post?._id} className="px-4">
            <Post post={post} />
          </div>
        ))}
      </div>
  </div>
   
  )
}
