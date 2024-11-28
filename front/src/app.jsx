import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/cadastro';
import Home from './components/home';
import Clientes from './components/cliente';
import Cargos from './components/cargos';
import Colaboradores from './components/colaboradores';
import Chamados from './components/chamados';
// Importe outros componentes aqui quando forem criados

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para login */}
        <Route path="/" element={<Login />} />
        {/* Rota para cadastro de usuários */}
        <Route path="/cadastro" element={<Register />} />
        {/* Rota para o menu principal */}
        <Route path="/home" element={<Home />} />
        {/* Rota para gerenciamento de clientes */}
        <Route path="/home/cliente" element={<Clientes />} />
        {/* Futuras rotas para cargos, colaboradores, chamados, etc. */}
        <Route path="/home/cargos" element={<Cargos />} />
        <Route path="/home/colaboradores" element={<Colaboradores />} />
        <Route path="/home/chamados" element={<Chamados />} />
      </Routes>
    </Router>
  );
}

export default App;

