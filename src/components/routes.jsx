import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Crie o roteador com as rotas
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,  // Componente layout principal
    children: [
      {
        path: '/',
        element: <Home />,  // Página inicial
      },
      {
        path: 'about',
        element: <//Layood />,  // Página Sobre
      },
      {
        path: 'contact',
        element: <Contact />,  // Página de Contato
      },
      {
        path: '*',
        element: <NotFound />,  // Página não encontrada
      },
    ],
  },
]);

// Componente Router
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;

