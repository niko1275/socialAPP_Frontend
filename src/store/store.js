import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "../reducers/posts";
import {authSlice} from '../reducers/auth'
import {thunk} from 'redux-thunk'; 

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(thunk);


export default configureStore({
    reducer:{
        posts:postsSlice.reducer,
        auth:authSlice.reducer,
    },
    middleware  
})