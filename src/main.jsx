import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'


/* Router */
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import App from './App'
import Admin from './Admin.jsx'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ/index.jsx'
import Erro from './pages/Erro/index.jsx'
import PoliticasTermo from './pages/PoliticasTermos/index.jsx'
import HomeAdmin from './pages-adimin/Home/index.jsx'
import Login from './pages-adimin/Login/index.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Erro />,
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
        element: <PoliticasTermo />
      },
      {
        path: 'loginadmin',
        element: <Login />}
    ]
  },

  {
    path: '/admin',
    element: <Admin />,
    errorElement: <Erro />,
    children: [
      {
        path: 'home',
        element: <HomeAdmin />}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
