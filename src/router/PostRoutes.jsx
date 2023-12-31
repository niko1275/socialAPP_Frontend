import { Route, Routes } from "react-router-dom";

import React from 'react'
import { Home } from "../componentes/Home";
import { PostDetails } from "../componentes/Posts/PostDetails";
import { Formulario } from "../componentes/form/Formulario";


export const PostRoutes = () => {
  return (
    <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path=":id" element={<PostDetails/>} />
        <Route path='createpost' element={<Formulario/>}/>
        <Route path="editPost/:postId" element={<Formulario/>}/>

    </Routes>
  )
}
