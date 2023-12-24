import axios from 'axios';

const url = 'http://localhost:4000/posts';
const url2 = 'http://localhost:4000';

export const fetchPost = (id) => axios.get(`${url}/${id}`);
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost ,{
    headers:{
        'Content-Type': 'multipart/form-data',
    }
});

export const likePost = (id,userId) => axios.patch(`${url}/likePost/${id}`,{userId});

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);



export const signIn = (formData) => axios.post(`${url2}/user/signin`, formData);
export const signUp = (formData) => axios.post(`${url2}/user/signup`, formData);
export const register = (formData) => axios.post(`${url2}/user/register`,formData);

export const comment = (id, text, userId) =>  axios.patch(`${url}/comment/${id}`, { text, userId });

  
const token = localStorage.getItem('tokenn');


const config = ({
    headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
    }
})

export const autenticar = () => axios.get(`${url2}/user/perfil`,config)