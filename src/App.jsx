
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'

import { Home } from './componentes/Home'


import { Navbar } from './layout/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import {PublicRoute} from './router/PublicRouter'
import { PrivateRoute } from './router/PrivateRouter'
import { useEffect } from 'react'
import { autenticarUsuario } from './actions/auth'
import { getPosts } from './actions/posts'
import { Footer } from './layout/Footer'


function App() {


  const auth = localStorage.getItem('tokenn');
  const authenticated = localStorage.getItem('autenticado')
  console.log(authenticated)
  const state = useSelector((state) => state.auth);

  console.log(state)
  const dispatch = useDispatch()
  
  useEffect(()=>{

      const autenticaruser= async()=>{
          try{
              await dispatch(autenticarUsuario())
          }
          catch(error){
          }
      }
      if(!auth){
        return
      }
      autenticaruser();
      
  },[auth])



  useEffect(() => {
    dispatch(getPosts())
}, [])

  return (
 

    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route
        index
        element={<Navigate to="/post/home" />} 
        // Puedes ajustar la ruta según tus necesidades
      />
     
      
        <Route
          
            path="/auth/*"
            element={<PublicRoute isAuthenticated={authenticated} />}
          />
           <Route
          path="/post/*"
          element={<PrivateRoute isAuthenticated={authenticated} />}
          />

        {/* <Route path='/auth' element={<LoginPage/>}/>
        <Route path="/posts/:id" element={<PostDetails/>} />
        <Route path='posts/createpost' element={<Formulario/>}/> */}

      
      </Routes>
      <Footer/>
    </BrowserRouter>
    


   
    
      
  )
}

export default App
