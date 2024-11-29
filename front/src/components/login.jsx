import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  const API_URL = 'http://localhost:8080';

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
        setMensagem('Login realizado com sucesso!');
        setTimeout(() => navigate('/home'), 1000); // Redireciona após 1 segundo
        console.log('Usuário autenticado:', usuarioValido.nomeUsuario);
      } else {
        setMensagem('Erro: Credenciais inválidas ou usuário inativo');
      }
    } catch (error) {
      setMensagem('Erro ao conectar ao servidor.');
    }
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
      color: '#d9534f',
      marginTop: '10px',
    },
    link: {
      color: '#007bff',
      cursor: 'pointer',
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
      <p>
        Não tem conta?{' '}
        <span
          style={styles.link}
          onClick={() => navigate('/cadastro')}
        >
          Cadastre-se aqui
        </span>
      </p>
    </div>
  );
}

export default Login;
