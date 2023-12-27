import { createSlice } from '@reduxjs/toolkit';


export const authSlice = createSlice({
  name: 'auth',
  initialState: {  
    user: null,
    token: localStorage.getItem('tokenn') || null,
    isAuthenticated: false,
    error: null, },
  reducers: {
    authSuccess: (state, action) => {
      console.log('autentitacion?')
      console.log(action.payload)
      localStorage.setItem('tokenn', action.payload.token);
      localStorage.setItem('autenticado',action.payload.isAuthenticated=true)
      state.user=  action.payload.user;
      state.token= action.payload.token;
      state.isAuthenticated=action.payload.isAuthenticated=true;
      state.error= null;
    
    },
    authFailure: (state, action) => {
      console.log("llega aqui??")
      const { error } = action.payload;
      localStorage.removeItem('tokenn');
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = error;

    },
    registerSuccess: (state, action) => {
        state.user = action.payload;
        state.token = '',
        state.isAuthenticated = false;
        state.error = null;
      },
    logout: (state) => {
      localStorage.clear();
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    loginSuccess: (state,action) =>{
      console.log(action.payload)
      
      state.user= action.payload;
      state.isAuthenticated=true;
      state.error = false
    }
  },
});

export const { authSuccess, logout,registerSuccess,authFailure,loginSuccess } = authSlice.actions;
