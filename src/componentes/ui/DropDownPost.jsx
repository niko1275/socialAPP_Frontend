import React, { useState } from 'react'
import { deletePost } from '../../actions/posts';
import { Link } from 'react-router-dom';
import useSweetAlert from '../Alerta';
export const DropDownPost = ({postId}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdownState = () => {
        console.log(isOpen)
      setIsOpen(!isOpen);
    };

    const sweetAlert = useSweetAlert()
    const handleDeleteClick =  (postId) => {
        sweetAlert
          .showAlert('Confirmar acción', '¿Estás seguro de que deseas borrar este elemento?', 'warning')
          .then((result) => {
            console.log(result)
            if (result.isConfirmed) {
             
              dispatch(deletePost(postId))
              toast.success('El elemento ha sido borrado con éxito'); 
              
            }
          });
      };
  
  return (
    <div className='relative inline-block'>

      {/* Botón para activar/desactivar el dropdown */}
      <button
        id="dropdownMenuIconHorizontalButton"
        data-dropdown-toggle="dropdownDotsHorizontal"
        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        type="button"
        onClick={toggleDropdownState}
      >
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
        </svg>
      </button>

      {isOpen && (
        <div id="dropdownDots" className="z-10 absolute right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
            <li>
              <Link to={`/post/editPost/${postId}`}>
                <button  className="b font-bold px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Editar
                    </button>
              </Link>
            </li>

            <li>
                <button onClick={()=>handleDeleteClick(postId)}  className="block px-4 py-2 w-full font-bold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Borrar
                </button>
         
            </li>
          
          </ul>
        
        </div>
      )}

    </div>
  )
}
