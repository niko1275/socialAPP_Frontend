import React, {  useState } from 'react'
import { PostContainer } from './Posts/PostContainer'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from './pagination/Pagination'
import { CreatePost } from './Posts/CreatePost'
import { Info } from './Posts/Info'
import {Link}from 'react-router-dom'



export const Home = () => {

  const state = useSelector((state) => state.posts);
  const state2 = useSelector((state)=>state.auth)
  console.log(state)
  console.log(state2)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = state?.slice(firstPostIndex, lastPostIndex);

  return (

    <div className=" min-h-screen flex flex-col ">
      <div className=" flex-grow">
        <div className="max-w-screen-lg mx-auto">
          <div className="grid grid-cols-[1fr]  xs:grid-cols-[1fr_0.5fr]  xl:grid-cols-[1fr_0.4fr]  ">
            <div className='flex flex-col items-end '>
              <div className=' '>
                <Link to='/post/createpost'>
                <CreatePost />  
                </Link>
              
                <PostContainer state={currentPosts} />
              </div>
           
            </div>
           
              <div className="w-[350px]  max-xl:hidden">
                <Info/>
              </div>
           
          </div>
        </div>
      </div>



      

      <Pagination
        totalPosts={state.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        className="mt-auto"
      />

    </div>

  )
}
