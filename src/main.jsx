import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'


/* User Routers */
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import User from './User.jsx'
import Admin from './Admin.jsx'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import PrivacyPoliciesAndTermsOfUse from './pages/Privacy-Policies-And-Terms-Of-Use'
import Erro404 from './pages/Erro404'

/* Admin Routers */
import LoginAdmin from './backoffice/Login'
import Dashboard from './backoffice/Dashboard'
import Management from './backoffice/Management'
import ContentManagement  from './backoffice/ContentManagement'

import useScrollToTop from './components/common/ScrollToTop.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <User />,
    errorElement: <Erro404 />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contato",
        element: <Contact />
      },
      {
        path: "sobrenos",
        element: <AboutUs />
      },
      {
        path: "faq",
        element: <FAQ />
      },
      {
        path: "politicasdeprivacidadeetermosdeuso",
        element: <PrivacyPoliciesAndTermsOfUse />
      }
    ]
  },

  {
    path: '/admin',
    element: <Admin />,
    errorElement: <Erro404 />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'management',
        element: <Management />,
      },
      {
        path: 'management/content',
        element: <ContentManagement />,
      }
    ],
  },

  {
    path: '/admin/login',
    element: <LoginAdmin /> 
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <useScrollToTop /> {/* Adicione o ScrollToTop aqui */}
    </RouterProvider>
  </React.StrictMode>,
)
