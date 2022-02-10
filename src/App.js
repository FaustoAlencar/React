import './App.css';

import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';

import { Home } from './Views/Home';

import { ListarClientes } from './Views/Cliente/ListarCliente';
import { ListarPedidos } from './Views/Pedido/ListarPedido';
import { ListarServicos } from './Views/Servico/ListarServico';
import { ListarCompras } from './Views/Compra/ListarCompra';
import { ListarProdutos } from './Views/Produto/ListarProduto';
import { Menu } from './components/Menu';
import { Item } from './Views/Cliente/Item';
import { CadastrarCliente } from './Views/Cliente/Cadastrar/Index';
import { CadastrarPedido } from './Views/Pedido/Cadastrar/index';
import { CadastrarProduto } from './Views/Produto/Cadastrar/index';
import { CadastrarServico } from './Views/Servico/Cadastrar';
import { CadastrarCompra } from './Views/Compra/Cadastrar/index'

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Switch>
          <Route path="/" element={<Home />} /> 
          <Route path="/listar-clientes" element={<ListarClientes />} />
          <Route path="/listar-pedidos" element={<ListarPedidos />} />
          <Route path="/listar-servicos" element={<ListarServicos />} />
          <Route path="/listar-compras" element={<ListarCompras />} />
          <Route path="/listar-produtos" element={<ListarProdutos />} />
          <Route path="/listar-cliente/:id" element={<Item/>}/>
          <Route path='/cadastrarcliente' element={<CadastrarCliente />} />
          <Route path='/cadastrarpedido' element={<CadastrarPedido />} />
          <Route path='/cadastrarproduto' element={<CadastrarProduto/>} />
          <Route path='/cadastrarservico' element = {<CadastrarServico/>} />
          <Route path='/CadastrarCompra' element = {<CadastrarCompra/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
