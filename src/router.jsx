import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/layout'
import LayoutAuth from './layouts/LayoutAuth'
import Login from './views/login'
import LandingPage from './views/landingPage'
import Register from './views/register'
import Verification from './views/verification'
import Home from './views/home'
import Profile from './views/profile'
import LayoutLanding from './layouts/LayoutLanding'
import ConoceMas from './views/conoceMas'
import Nosotros from './views/nosotros'


import LayoutAdmin from './layouts/LayoutAdmin'
import Admincategorias from './views/Admincategorias'
import Admin_productos from './views/Admin_productos' 
import Adminpuntos from './views/Adminpuntos'
import Admintransacciones from './views/Admintransacciones'  
import AdminReportes from './views/Adminreportes'
import Adminusuarios from './views/Adminusuarios'
import Adminverificacion from './views/Adminverificacion'






export const router = createBrowserRouter([
    
     {
        path: '/',
        element: <LayoutLanding />,
        children: [
            {
                index: true,
                element: <LandingPage />
            },
            {
                path:'conoceMas',
                element: <ConoceMas />
            },
            {
                path:'nosotros',
                element: <Nosotros />
            }

            ]
    
    },
    {
        path: 'home',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:'profile',
                element: <Profile />
            },
           
        ]
    },
    {
        path: 'auth',
        element: <LayoutAuth />,
        children: [
            {
                index: true,
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'verification',
                element: <Verification />
            }

        ]
    },
   {
            path: 'admin',
            element: <LayoutAdmin />,
            children: [
                {
                    index: true,
                    element: <Adminverificacion />
                },
                {
                    path:'Adminverification',
                    element: <Adminverificacion />
                },
                {
                    path:'Adminusuarios',
                    element: <Adminusuarios />
                },
                {
                    path:'Admincategorias',
                    element: <Admincategorias />
                },
                {
                    path:'Admin_productos',
                    element: <Admin_productos />
                },
                {
                    path:'Adminpuntos',
                    element: <Adminpuntos />
                },
                {
                    path:'Admintransacciones',
                    element: <Admintransacciones />
                },
                {
                    path:'Adminreportes',
                    element: <AdminReportes />
                }

            ]
        }

])