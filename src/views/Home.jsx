import { useState } from 'react';
import itens from '../datasets/Carrosel';
import produtosDataSet from '../datasets/Produto';
import Carrosel from '../components/Carrosel';
import ComprasCard from '../components/ComprasCard';

const Home = () => {
  let [produtos, setProdutos] = useState([...produtosDataSet]);

  return (
    <>
      function Home() {
      <h2>Home Page</h2>
}
    </>
  );
};

export default Home;
