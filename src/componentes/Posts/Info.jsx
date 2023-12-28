import React, { useEffect, useState } from 'react'
import { Dropdown } from '../ui/Dropdown'
export const Info = () => {

    // const [scrollPosition, setScrollPosition] = useState(0);

    // useEffect(() => {
    //   let animationFrameId;
  
    //   const handleScroll = () => {
    //     animationFrameId = requestAnimationFrame(() => {
    //       setScrollPosition(window.scrollY);
    //     });
    //   };
  
    //   window.addEventListener('scroll', handleScroll);
  
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //     cancelAnimationFrame(animationFrameId);
    //   };
    // }, []);
  
    // const infoStyle = {
    //   transform: `translateY(${scrollPosition}px)`,
    //   transition: 'transform 0.3s linear',
    // };
  
  
  return (

   
      <div  class="max-w-sm rounded overflow-hidden shadow-lg bg-white rounded shadow-xl">
      <Dropdown/>
        <div class="px-6 py-4 ">
          <div class="font-bold text-xl mb-2">Social App</div>
          <p class="text-gray-700 text-base">
          ¡Bienvenido a Social App, el lugar perfecto para expresarte y conectar con otros apasionados como tú! En nuestra plataforma, puedes dar vida a tus momentos especiales compartiendo fotos impactantes y creando posts significativos. Comienza a construir tu comunidad, comparte tus experiencias, y descubre un mundo de historias fascinantes. Únete a nosotros mientras creamos juntos una red llena de diversidad, creatividad y amistad. ¡Haz clic, comparte y forma parte de la comunidad Social App hoy!
          </p>
        </div>

        

  </div>
  )
}
