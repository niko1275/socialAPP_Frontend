import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import { set } from 'react-hook-form';


export const Formulario = ({ currentId, setCurrentId }) => {
  currentId=0
  const [creator, setCreator] = useState('');
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [tags, setTags] = useState('')
  const [selectedFile, setSelectedFile] = useState('')

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('selectedFile', selectedFile);
    formData.append('creator', creator)
    formData.append('title', title)
    formData.append('message', message)
    formData.append('tags', tags)

    if (currentId === 0) {

      await dispatch(createPost(formData));
      setCreator('')
      setTitle('')
      setMessage('')
      setTags('')
      setSelectedFile('')

    } else {
      dispatch(updatePost(currentId, formData));

    }
  };


  return (
    <div className="">
      <form className="mx-auto max-w-md bg-white p-6 rounded-md shadow-md" autoComplete="off" noValidate onSubmit={handleSubmit} encType="multipart/form-data">
        <h2 className="text-2xl font-semibold text-center"></h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Creador</label>
          <input
            type="text"
            name="creator"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            value={creator}
            onChange={(e) => setCreator(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Title</label>
          <input
            type="text"
            name="title"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Message</label>
          <textarea
            name="message"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Tags (comma separated)</label>
          <input
            type="text"
            name="tags"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">File</label>
          <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />

        </div>
        <button
          className="mr-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring  focus:ring-blue-200"
          type="submit"
        >
          Submit
        </button>
        <button
          className="mt-2 bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200"
          type="button"

        >
          Clear
        </button>
      </form>
    </div>
  )
}

