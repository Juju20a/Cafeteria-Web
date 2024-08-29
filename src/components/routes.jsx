import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/Cardapio';
import Contact from './pages/Login';
import NotFound from './pages/NotPage';

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
        element: <//Cardapio />,  // Página Sobre
      },
      {
        path: 'contact',
        element: <Login />,  // Página de Contato
      },
      {
        path: '*',
        element: <NotPage />,  // Página não encontrada
      },
    ],
  },
]);

// Componente Router
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;

