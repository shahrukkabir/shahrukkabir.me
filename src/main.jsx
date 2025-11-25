import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import ParticlesComponent from './Components/ParticlesComponent'
import Cursor from './Components/Cursor'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ParticlesComponent></ParticlesComponent>
    <Cursor></Cursor>
    <RouterProvider router={router} />
    <Toaster position="top-right" />
  </StrictMode>,
)
