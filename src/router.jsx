import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
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
import Sales from './views/sales'
import Purchases from './views/purchases'
import Publications from './views/publications'
import Location from './views/location'
import Reports from './views/reports'
import Notifications from './views/notifications'
import PublishMaterial from './views/publishMaterial'
import ProductDetail from './views/productDetail'
import Checkout from './views/checkout'
import PurchaseDetail from './views/purchaseDetail'
import SaleDetail from './views/saleDetail'



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
                path: 'productDetail',
                element: <ProductDetail />
            },
            {
                path: 'checkout',
                element: <Checkout />
            },
            {
                path:'sales',
                element: <Sales />
            },
            {
                path: 'sales/detail',
                element: <SaleDetail />
            },
            {
                path:'purchases',
                element: <Purchases />
            },
            {
                path: 'purchases/detail',
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
                path:'location',
                element: <Location />
            },
            {
                path:'reports',
                element: <Reports />
            },
            {
                path:'notifications',
                element: <Notifications />
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