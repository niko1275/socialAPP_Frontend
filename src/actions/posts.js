
import { useId } from 'react';
import * as api from '../api/index.js';
import {setPosts,createPosts,deletePosts,likePosts,updatePosts, comentariPost} from '../reducers/posts.js'


export const getPosts = () => async (dispatch) => {
  try {
 
    const { data } = await api.fetchPosts();
    dispatch(setPosts(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
    try {
      console.log(post)
      const { data } = await api.createPost(post);

      dispatch(createPosts(data));
    } catch (error) {
      console.log(error.message);
    }
  };

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch(updatePosts(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id,userId) => async (dispatch) => {
  try {
    console.log(id)
    console.log(userId)
    const { data } = await api.likePost(id,userId);
    console.log(data)
    dispatch(likePosts(data));

  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch(deletePosts(id));
  } catch (error) {
    console.log(error.message);
  }
};

export const comentario = (id,text,userId)=> async (dispatch) => {
  try {
    const {data} = await api.comment(id,text,userId)
   
    dispatch(comentariPost(data))
    
  }catch(error){
    console.log(error)
  }
}