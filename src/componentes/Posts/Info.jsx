import React, { useEffect, useState } from 'react'

export const Info = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      let animationFrameId;
  
      const handleScroll = () => {
        animationFrameId = requestAnimationFrame(() => {
          setScrollPosition(window.scrollY);
        });
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
        cancelAnimationFrame(animationFrameId);
      };
    }, []);
  
    const infoStyle = {
      transform: `translateY(${scrollPosition}px)`,
      transition: 'transform 0.3s linear',
    };
  
  
  return (
    <div style={infoStyle} class="max-w-sm rounded overflow-hidden shadow-lg">

  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Social App</div>
    <p class="text-gray-700 text-base">
    ¡Bienvenido a Social App, el lugar perfecto para expresarte y conectar con otros apasionados como tú! En nuestra plataforma, puedes dar vida a tus momentos especiales compartiendo fotos impactantes y creando posts significativos. Comienza a construir tu comunidad, comparte tus experiencias, y descubre un mundo de historias fascinantes. Únete a nosotros mientras creamos juntos una red llena de diversidad, creatividad y amistad. ¡Haz clic, comparte y forma parte de la comunidad Social App hoy!
    </p>
  </div>
  {/* <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div> */}
</div>
  )
}
