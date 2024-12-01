import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  const API_URL = 'http://localhost:8080';

  // Checa se há um usuário armazenado na sessão ao carregar a tela
  useEffect(() => {
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if (usuarioLogado) {
      setMensagem(`Bem-vindo(a) de volta, ${JSON.parse(usuarioLogado).nomeUsuario}!`);
      setTimeout(() => navigate('/home'), 2000);
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get(`${API_URL}/usuarios`);
      const usuarios = response.data;

      const usuarioValido = usuarios.find(
        (usuario) =>
          usuario.emailUsuario === email &&
          usuario.senhaUsuario === senha &&
          usuario.ativoUsuario
      );

      if (usuarioValido) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioValido)); // Salva na sessão
        setMensagem(`Login realizado com sucesso! Bem-vindo, ${usuarioValido.nomeUsuario}!`);
        setTimeout(() => navigate('/home'), 1000); // Redireciona após 1 segundo
      } else {
        setMensagem('Erro: Credenciais inválidas ou usuário inativo');
      }
    } catch (error) {
      setMensagem('Erro ao conectar ao servidor.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    setMensagem('Você saiu da sessão.');
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f9f9f9',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: '2rem',
      color: '#333',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
    },
    input: {
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '10px',
      backgroundColor: '#28a745',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
    },
    message: {
      color: mensagem.includes('sucesso') ? '#28a745' : '#d9534f',
      marginTop: '10px',
    },
    link: {
      color: '#007bff',
      cursor: 'pointer',
    },
    logoutButton: {
      padding: '10px',
      backgroundColor: '#d9534f',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Entrar</button>
      </form>
      {mensagem && <p style={styles.message}>{mensagem}</p>}
    </div>
  );
}

export default Login;
