import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './assets/components/Layout.jsx'
import About from './assets/components/About/About.jsx'
import Contact from './assets/components/Contact/Contact.jsx'
import Services from './assets/components/Services/Services.jsx'
import Blog from './assets/components/Blog/Blog.jsx'
import Careers from './assets/components/Careers/Careers.jsx'
import Error from './assets/components/Error/Error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "services",
        element: <Services />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "careers",
        element: <Careers />
      }
    ]
  },
  {
    path: "*",
    element: <Error />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
