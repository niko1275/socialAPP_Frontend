import axios from 'axios';


const url = import.meta.env.VITE_BACKEND_URL;


export const fetchPost = (id) => axios.get(`${import.meta.env.VITE_BACKEND_URL}/posts/${id}`);
export const fetchPosts = () => axios.get(`${import.meta.env.VITE_BACKEND_URL}/posts`);
export const createPost = (newPost) => axios.post(`${import.meta.env.VITE_BACKEND_URL}/posts`, newPost ,{
    headers:{
        'Content-Type': 'multipart/form-data',
    }
});

export const likePost = (id,userId) => axios.patch(`${import.meta.env.VITE_BACKEND_URL}/posts/likePost/${id}`,{userId});

export const updatePost = (id, updatedPost) => axios.patch(`${import.meta.env.VITE_BACKEND_URL}/posts/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${import.meta.env.VITE_BACKEND_URL}/posts/${id}`);



export const signIn = (formData) => axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/signin`, formData);
export const signUp = (formData) => axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/signup`, formData);
export const register = (formData) => axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/register`,formData);

export const comment = (id, text, userId) =>  axios.patch(`${import.meta.env.VITE_BACKEND_URL}/posts/comment/${id}`, { text, userId });

  
const token = localStorage.getItem('tokenn');


const config = ({
    headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
    }
})

export const autenticar = () => axios.get(`${import.meta.env.VITE_BACKEND_URL}/user/perfil`,config)