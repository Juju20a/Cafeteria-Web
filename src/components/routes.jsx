import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Cardapio from './pages/Cardapio';
import Login from './pages/Login';
import NotPage from './pages/NotPage';

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
        path: 'cardapio',
        element: <Cardapio />,  // Página Sobre
      },
      {
        path: 'login',
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

