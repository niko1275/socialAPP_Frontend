import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { DropDown } from '../DropDown';


export const Formulario = () => {
  const {postId} = useParams();

  const post = useSelector ((state) => state.posts)
  const selectedPost = post?.find((post) => post?._id === postId);
  console.log(selectedPost)
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
  const [selectedFile, setSelectedFile] = useState('')
  const userId = useSelector((state)=>state?.auth?.user?.usuario?._id)

  const dispatch = useDispatch();

  

  useEffect(()=>{
    if (selectedPost) {
    
      setValue('creator', selectedPost?.creator);
      setValue('title', selectedPost?.title);
      setValue('message', selectedPost?.message);
      setValue('tags', selectedPost?.tags?.join(', '));
      setValue('selectedFile', selectedPost?.selectedFile?.secure_url)
    
    }
  },[postId,selectedPost])

  const onSubmit = async (data,e) => {
    e.preventDefault()
 
    const formData = new FormData();
    formData.append('selectedFile', selectedFile);
    formData.append('creator', data.creator);
    formData.append('title', data.title);
    formData.append('message', data.message);
    formData.append('tags', data.tags);
    formData.append('userId', userId);
    console.log(postId)
    if (!postId) {
      console.log('entra1')
      await dispatch(createPost(formData));
             
      reset();
    
    } else {
      toast.success('Post Actualizado Con exito')
      dispatch(updatePost(postId,formData));

    }

  };


  return (
    <div className="">
      <Toaster/>
    
      <form
      className="mx-auto max-w-xl  bg-white p-6 rounded-md shadow-md"
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      encType="multipart/form-data"
    >
      <h2 className="text-2xl font-semibold text-center"></h2>
      
      <div className="mb-4">
        
        <label className="block text-sm font-medium text-gray-600">Creador</label>
        <input
          type="text"
          {...register('creator', { required: 'Este campo es requerido' })}
          className={`mt-1 p-2 w-full border ${
            errors.creator ? 'border-red-500' : 'border-gray-300'
          } rounded-md`}
        />
        {errors.creator && (
          <span className="text-sm text-red-500">{errors.creator.message}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Title</label>
        <input
          type="text"
          {...register('title', { required: 'Este campo es requerido' })}
          className={`mt-1 p-2 w-full border ${
            errors.title ? 'border-red-500' : 'border-gray-300'
          } rounded-md`}
        />
        {errors.title && (
          <span className="text-sm text-red-500">{errors.title.message}</span>
        )}
      </div>


      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Message</label>
        <textarea
          {...register('message', { required: 'Este campo es requerido' })}
          className={`mt-1 p-2 w-full border ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          } rounded-md`}
          rows={4}
        />
        {errors.message && (
          <span className="text-sm text-red-500">{errors.message.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Tags (comma separated)</label>
        <input
          type="text"
          {...register('tags', { required: 'Este campo es requerido' })}
          className={`mt-1 p-2 w-full border ${
            errors.tags ? 'border-red-500' : 'border-gray-300'
          } rounded-md`}
        />
        {errors.tags && (
          <span className="text-sm text-red-500">{errors.tags.message}</span>
        )}
      </div>

      <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">File</label>
          <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />

        </div>

        <div className="">
          <label className="block text-sm font-medium text-gray-600">Imagen Actual</label>
          {selectedPost?.selectedFile && (
            <img
              id="image-preview"
              src={selectedPost.selectedFile.secure_url}
              alt="Imagen Actual"
              className="mt-2"
              style={{ maxWidth: '50%' }}
            />
          )}
        </div>

     

      <button
        className="mr-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring  focus:ring-blue-200"
        type="submit"
      >
        Guardar
      </button>
      <button
        className="mt-2 bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200"
        type="button"
        onClick={() => reset()}
      >
        Limpiar
      </button>
    </form>

    </div>


  )
}

