import { createBrowserRouter } from 'react-router-dom'
//USERS
import Layout from './layouts/Layout'
import LayoutAuth from './layouts/LayoutAuth'
import Login from './views/usuarios/login'
import LandingPage from './views/usuarios/landingPage'
import Register from './views/usuarios/register'
import Verification from './views/usuarios/verification'
import Home from './views/productos/home'
import Profile from './views/usuarios/profile'
import LayoutLanding from './layouts/LayoutLanding'
import ConoceMas from './views/usuarios/conoceMas'
import Nosotros from './views/usuarios/nosotros'
import Reports from './views/usuarios/reports'
//PRODUCTS
import Sales from './views/productos/sales'
import Purchases from './views/productos/purchases'
import Publications from './views/productos/publications'
import PublishMaterial from './views/productos/publishMaterial'
import ProductDetail from './views/productos/productDetail'
import Checkout from './views/productos/checkout'
import PurchaseDetail from './views/productos/purchaseDetail'
import SaleDetail from './views/productos/saleDetail'
//ADMIN
import LayoutAdmin from './layouts/LayoutAdmin'
import Admincategorias from './views/admins/Admincategorias'
import Admin_productos from './views/admins/Admin_productos' 
import Adminpuntos from './views/admins/Adminpuntos'
import Admintransacciones from './views/admins/Admintransacciones'  
import AdminReportes from './views/admins/Adminreportes'
import Adminusuarios from './views/admins/Adminusuarios'
import Adminverificacion from './views/admins/Adminverificacion'

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
            },

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
                path: 'productDetail/:idProducto',
                element: <ProductDetail />
            },
            {
                path: 'checkout/:idProducto',
                element: <Checkout />
            },
            {
                path:'sales',
                element: <Sales />
            },
            {
                path: 'sales/detail/:idProducto',
                element: <SaleDetail />
            },
            {
                path:'purchases',
                element: <Purchases />
            },
            {
                path: 'purchases/detail/:idPedido',
                element: <PurchaseDetail />
            },
            {
                path:'publications',
                element: <Publications />
            },
            {
                path: 'publications/new',
                element: <PublishMaterial />
            },
            {
                path:'reports',
                element: <Reports />
            },
            {
                path:'profile',
                element: <Profile />
            }
           
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