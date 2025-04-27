import { createBrowserRouter, RouterProvider} from 'react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './layouts/Layout'
import Index from './pages/Index/Index'
import Tramites from './pages/Tramites/Tramites'
import Horarios from './pages/Horarios/Horarios'
import Confesiones from './pages/Confesiones/Confesiones'
import Celebraciones from './pages/Celebraciones/Celebraciones'
import Retiros from './pages/Retiros/Retiros'
import Catecismo from './pages/Catecismo/Catecismo'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: '/tramites',
        element: <Tramites />
      },
      {
        path: '/horarios',
        element: <Horarios />
      },
      {
        path: '/confesiones',
        element: <Confesiones />
      },
      {
        path: '/celebraciones',
        element: <Celebraciones />
      },
      {
        path: '/retiros',
        element: <Retiros />
      },
      {
        path: '/catecismo',
        element: <Catecismo />
      }
    ]
  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
