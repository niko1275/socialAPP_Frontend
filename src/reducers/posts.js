import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    setPosts: (state, action) => {
      return state =  action.payload;
    },
    likePosts: (state, action) => {
      console.log('payload es ')
      console.log(action.payload)
      return state.map((post) => (post._id === action?.payload?.updatedPost?._id ? action.payload.updatedPost : post));
    },
    createPosts: (state, action) => {
      return [...state, action.payload];
    },
    updatePosts: (state, action) => {
      return state.map((post) => (post._id === action.payload._id ? action.payload.updatePost : post));
    },
    deletePosts: (state, action) => {
      return state.filter((post) => post._id !== action.payload);
    },
    comentariPost: (state,action) => {
      return state.map((post)=>(post._id=== action?.payload._id? action.payload : post))
    }
  },
});

export const { setPosts, likePosts, createPosts, updatePosts, deletePosts  ,fetchPost,comentariPost} = postsSlice.actions;

