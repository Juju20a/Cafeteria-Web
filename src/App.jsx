import './App.css';
import { CreateBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './templates/Layout';
import Home from './views/Home';
import NoPage from './views/NoPage';
import Cardapio from './views/Cardapio';
import Login from './views/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // Rota padrão para "/"
        element: <Home />,
      },
      {
        path: "cardapio",
        element: <Cardapio />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NoPage />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}


export default App;
