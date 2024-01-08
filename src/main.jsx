import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'

import App from './App';
import Error from './pages/Error';
import Contact from './pages/Contact';
import About from './pages/About';
import Project from './pages/Project';
import Resume from './pages/Resume';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <About />,
        },
        {
          path: '/About',
          element: <About />,
        },
        {
          path: '/Project',
          element: <Project />,
        },
        {
          path: '/Contact',
          element: <Contact />,
        },
        {
          path: '/Resume',
          element: <Resume />,
        },
        
      ],
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );