import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {ToastContainer, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './styles/normalize.css';
import './styles/vars.css';
import './styles/default.css';
import './styles/utilities.css';
import ActivoTabla from './pages/ActivoTabla';
import ActivoFormularioProvider from './context/ActivoFormularioProvider';
import ActivoFormulario from './pages/ActivoFormulario';
import Layout from './components/Layout/Layout';
import FormularioColumnaProvider from './context/FormularioColumnaProvider';
import FormularioColumna from './pages/FormularioColumna/FormularioColumna';
import ColumnasActivo from './pages/ColumnasActivo/ColumnasActivo';
import ColumnasActivoProvider from './context/ColumnasActivoProvider';
import ActivoProvider from './context/ActivoProvider';
import ActivoFormularioEditarProvider from './context/ActivoFormularioEditarProvider';
import ActivoFormularioEditar from './pages/ActivoFormularioEditar';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <ActivoProvider />,
        children: [
          {
            path: '/',
            element: <ActivoTabla />
          }
        ]
      },
      {
        element: <ActivoFormularioProvider />,
        children: [
          {
            path: '/activo/crear',
            element: <ActivoFormulario />
          }
        ]
      },
      {
        element: <ActivoFormularioEditarProvider />,
        children: [
          {
            path: '/activo/editar/:activo_id',
            element: <ActivoFormularioEditar />
          }
        ]
      },
      {
        element: <ColumnasActivoProvider />,
        children: [
          {
            path: '/activo/columna',
            element: <ColumnasActivo />
          }
        ]
      },
      {
        element: <FormularioColumnaProvider />,
        children: [
          {
            path: '/activo/columna/crear',
            element: <FormularioColumna />
          }
        ]
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider 
      router={router}
    />
    <ToastContainer 
      transition={Zoom}
      autoClose={4500}
    />
  </StrictMode>,
)
