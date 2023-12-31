import { useEffect } from 'react';
import Swal from 'sweetalert2';

const useSweetAlert = () => {
    const showAlert = async (title, text, icon = 'info') => {
      try {
        const result = await Swal.fire({
          title,
          text,
          icon,
          showCancelButton: true,
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancelar',
        });
  
        // Devuelve el objeto result o una versión modificada según tus necesidades
        return result;
      } catch (error) {
        // Manejar cualquier error que pueda ocurrir al mostrar la alerta
        console.error('Error al mostrar la alerta', error);
        throw error; // Re-lanza el error para que pueda ser manejado por el código que llama a showAlert
      }
    };
  
    return {
      showAlert,
    };
  };
  
  export default useSweetAlert;