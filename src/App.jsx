
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'

import { Home } from './componentes/Home'


import { Navbar } from './layout/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import {PublicRoute} from './router/PublicRouter'
import { PrivateRoute } from './router/PrivateRouter'
import { useEffect } from 'react'
import { autenticarUsuario } from './actions/auth'


function App() {


  const auth = localStorage.getItem('tokenn');
  const state = useSelector((state) => state.auth);
  const nombre = state?.user?.usuario?.name
  const authenticado = state?.isAuthenticated
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

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* <Route index element={<Navigate to="/posts" />} />
        <Route path="/posts" element={<Home />} /> */}
        <Route
          
            path="/auth/*"
            element={<PublicRoute isAuthenticated={authenticado} />}
          />
           <Route
          path="/post/*"
          element={<PrivateRoute isAuthenticated={authenticado} />}
          />

        {/* <Route path='/auth' element={<LoginPage/>}/>
        <Route path="/posts/:id" element={<PostDetails/>} />
        <Route path='posts/createpost' element={<Formulario/>}/> */}

      
      </Routes>
    </BrowserRouter>


    
      
  )
}

export default App
