import './App.css';
import { CreateBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './templates/Layout';
import Home from './views/Home';
import NoPage from './views/NoPage';
import Cardapio from './views/Cardapio';
import Login from './views/Login';

function App() {
  return (
    <CreateBrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cardapio" element={<Cardapio />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </CreateBrowserRouter>
  );
}

export default App;
