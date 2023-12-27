
import { useNavigate } from 'react-router-dom';
import * as api from '../api/index.js';
import { authFailure, authSuccess,loginSuccess,logout,registerSuccess } from '../reducers/auth.js';


export const signin = (formData) => async (dispatch) => {

    console.log(formData)

    try {
      const { data } = await api.signIn(formData);

      dispatch(authSuccess({ user: data.result, token:data.token }));
    } 
    catch (error) {
      console.log(error)
      dispatch(authFailure({error: true}))
    }
  };
  
export const signup = (formData) => async (dispatch) => {
try {
    const { data } = await api.signUp(formData);
s
    dispatch(logout(data));

} catch (error) {
    console.log({ success: false, error: error.response.data.msg });
}
};


export const registerUser = (formData) => async (dispatch) => {
    try{
        const {data} = await api.register(formData);
        dispatch(registerSuccess(data))
    }catch(error){
        console.log(error)
    }
}



export const autenticarUsuario = () => async (dispatch)=>{
  
  try {
    const {data } = await api.autenticar();

    dispatch(loginSuccess(data));
    
  }
  catch(error){
    console.log(error)
  }
}


export const logoutAction = () => async (dispatch)=>{
  try {
    dispatch(logout());
  }catch(error){

  }
}
