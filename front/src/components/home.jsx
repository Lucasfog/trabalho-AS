import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Busca o usuário logado no localStorage
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if (usuarioLogado) {
      setUsuario(JSON.parse(usuarioLogado));
    } else {
      navigate('/'); // Redireciona para a tela de login se não estiver logado
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    navigate('/'); // Redireciona para a tela de login após logout
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
    box: {
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      width: '300px',
      textAlign: 'center',
    },
    title: {
      fontSize: '2rem',
      color: '#333',
      marginBottom: '20px',
    },
    welcomeMessage: {
      fontSize: '1.2rem',
      color: '#555',
      marginBottom: '20px',
    },
    button: {
      padding: '10px',
      width: '100%',
      margin: '10px 0',
      fontSize: '1rem',
      backgroundColor: '#28a745',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    logoutButton: {
      backgroundColor: '#d9534f',
    },
    buttonHover: {
      backgroundColor: '#218838',
    },
    logoutHover: {
      backgroundColor: '#c82333',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        {usuario && (
          <p style={styles.welcomeMessage}>
            Bem-vindo(a), {usuario.nomeUsuario}!
          </p>
        )}
        <h1 style={styles.title}>Menu Principal</h1>
        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          onClick={() => navigate('/home/cliente')}
        >
          Cadastrar Cliente
        </button>
        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          onClick={() => navigate('/home/cargos')}
        >
          Cargos
        </button>
        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          onClick={() => navigate('/home/colaboradores')}
        >
          Colaboradores
        </button>
        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          onClick={() => navigate('/home/chamados')}
        >
          Realizar Chamados
        </button>
        <button
          style={{ ...styles.button, ...styles.logoutButton }}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.logoutHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.logoutButton.backgroundColor)}
          onClick={handleLogout}
        >
          Encerrar Sessão
        </button>
      </div>
    </div>
  );
}

export default Home;
