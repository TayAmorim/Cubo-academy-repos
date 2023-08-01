import React from 'react';
import './App.css';
import ProdutoImagem from './assets/produto.png';

function App() {
  return (
  <div className="produtos">
    <div className="produto">
      <img src={ProdutoImagem} alt="Produto" className="produtoImagem"/>
      <h1 className="produtoNome">Produto de Teste 1</h1>
      <p className="produtoDescricao">Esse produto é um produto de teste, favor não realizar a compra.</p>
      <h2 className="produtoPreco">R$ 100</h2>
      <button className="botaoComprar">Adicionar ao Carrinho</button>
    </div>
    <div className="produto">
      <img src={ProdutoImagem} alt="Produto" className="produtoImagem"/>
      <h1 className="produtoNome">Produto de Teste 1</h1>
      <p className="produtoDescricao">Esse produto é um produto de teste, favor não realizar a compra.</p>
      <h2 className="produtoPreco">R$ 100</h2>
      <button className="botaoComprar">Adicionar ao Carrinho</button>
    </div>
    <div className="produto">
      <img src={ProdutoImagem} alt="Produto" className="produtoImagem"/>
      <h1 className="produtoNome">Produto de Teste 1</h1>
      <p className="produtoDescricao">Esse produto é um produto de teste, favor não realizar a compra.</p>
      <h2 className="produtoPreco">R$ 100</h2>
      <button className="botaoComprar">Adicionar ao Carrinho</button>
    </div>
    <div className="produto">
      <img src={ProdutoImagem} alt="Produto" className="produtoImagem"/>
      <h1 className="produtoNome">Produto de Teste 1</h1>
      <p className="produtoDescricao">Esse produto é um produto de teste, favor não realizar a compra.</p>
      <h2 className="produtoPreco">R$ 100</h2>
      <button className="botaoComprar">Adicionar ao Carrinho</button>
    </div>
    <div className="produto">
      <img src={ProdutoImagem} alt="Produto" className="produtoImagem"/>
      <h1 className="produtoNome">Produto de Teste 1</h1>
      <p className="produtoDescricao">Esse produto é um produto de teste, favor não realizar a compra.</p>
      <h2 className="produtoPreco">R$ 100</h2>
      <button className="botaoComprar">Adicionar ao Carrinho</button>
    </div>
   
  </div>
  )
}
export default App;
