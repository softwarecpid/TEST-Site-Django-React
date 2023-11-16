import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/root.tsx';
import Login from './pages/auth/Login.tsx';
import Register from './pages/auth/Register.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
