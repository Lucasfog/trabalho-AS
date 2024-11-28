import React, { useState, useEffect } from "react";
import axios from "axios";

function Colaboradores() {
  const [colaboradores, setColaboradores] = useState([]);
  const [novoColaborador, setNovoColaborador] = useState({
    nomeColaborador: "",
    generoColaborador: "",
    cpfColaborador: "",
    cepColaborador: "",
    enderecoColaborador: "",
    numeroColaborador: "",
    bairroColaborador: "",
    cidadeColaborador: "",
    estadoColaborador: "",
    idCargoColaborador: "",
    salarioColaborador: "",
  });
  const [colaboradorEditando, setColaboradorEditando] = useState(null);
  const [formularioVisivel, setFormularioVisivel] = useState(false);

  const API_URL = "http://localhost:8080";

  // Função para buscar colaboradores
  const fetchColaboradores = async () => {
    try {
      const response = await axios.get(`${API_URL}/colaboradores`);
      setColaboradores(response.data);
    } catch (error) {
      console.error("Erro ao buscar colaboradores:", error);
    }
  };

  // Função para adicionar cliente (POST)
  const adicionarColaborador = async () => {
    try {
      const response = await axios.post(`${API_URL}/inserirColaborador`, novoColaborador, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        alert("Colaborador adicionado com sucesso!");
        fetchColaboradores(); // Recarrega os clientes após a adição
        resetFormulario();
      } else {
        console.error("Erro inesperado:", response.data);
        alert("Erro ao adicionar colaborador.");
      }
    } catch (error) {
      console.error("Erro ao adicionar colaborador:", error);
      alert(error.response?.data?.message || "Erro ao adicionar colaborador.");
    }
  };

  // Função para editar cliente (POST)
  const editarColaborador = async () => {
    try {
      const colaboradorEditando = { ...novoColaborador };

      await axios.post(`${API_URL}/alterarColaborador`, colaboradorEditando, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Colaborador editado com sucesso!");
      fetchColaboradores();
      resetFormulario();
    } catch (error) {
      console.error("Erro ao editar Colaborador:", error);
    }
  };


  // Função para excluir cliente (GET)
  const excluirColaborador = async (id) => {
    try {
      if (id) {
        const response = await axios.get(`${API_URL}/removerColaborador/${id}`);
        if (response.status === 200) {
          alert("Colaborador excluído com sucesso!");
          fetchColaboradores();
        } else {
          console.error("Erro ao excluir colaborador:", response.data);
          alert("Erro ao excluir colaborador.");
        }
      } else {
        console.error("ID do colaborador não encontrado.");
      }
    } catch (error) {
      console.error("Erro ao excluir colaborador:", error);
    }
  };

  // Reseta o formulário após salvar ou cancelar
  const resetFormulario = () => {
    setNovoColaborador({
      nomeColaborador: "",
      generoColaborador: "",
      cpfColaborador: "",
      cepColaborador: "",
      enderecoColaborador: "",
      numeroColaborador: "",
      bairroColaborador: "",
      cidadeColaborador: "",
      estadoColaborador: "",
      idCargoColaborador: "",
      salarioColaborador: "",
    });
    setFormularioVisivel(false);
    setColaboradorEditando(null);
  };

  // Preenche o formulário para editar colaborador
  const preencherFormularioEdicao = (index) => {
    setNovoColaborador({ ...colaboradores[index] });
    setColaboradorEditando(colaboradores[index].idColaborador);
    setFormularioVisivel(true);
  };

  // Atualiza campos do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoColaborador({ ...novoColaborador, [name]: value });
  };

  useEffect(() => {
    fetchColaboradores();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Gerenciamento de Colaboradores</h1>
      <button
        onClick={() => setFormularioVisivel(!formularioVisivel)}
        style={{
          padding: "10px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {formularioVisivel ? "Cancelar" : "Novo Colaborador"}
      </button>

      {formularioVisivel && (
        <form style={{ marginTop: "20px" }}>
          {Object.keys(novoColaborador).map((key) => (
            <div key={key} style={{ marginBottom: "10px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                {key.replace("_", " ").toUpperCase()}
              </label>
              <input
                type="text"
                name={key}
                value={novoColaborador[key]}
                onChange={handleInputChange}
                style={{
                  padding: "8px",
                  width: "100%",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
                disabled={key === "idColaborador"} // Desabilita o campo ID
              />
            </div>
          ))}
          <button
            type="button"
            onClick={colaboradorEditando !== null ? editarColaborador : adicionarColaborador}
            style={{
              padding: "10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {colaboradorEditando !== null ? "Salvar Alterações" : "Cadastrar"}
          </button>
        </form>
      )}

      <table
        style={{
          marginTop: "20px",
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                backgroundColor: "#f2f2f2",
              }}
            >
              NOME
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                backgroundColor: "#f2f2f2",
              }}
            >
              GÊNERO
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                backgroundColor: "#f2f2f2",
              }}
            >
              CPF
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                backgroundColor: "#f2f2f2",
              }}
            >
              CEP
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                backgroundColor: "#f2f2f2",
              }}
            >
              ENDEREÇO
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                backgroundColor: "#f2f2f2",
              }}
            >
              NÚMERO
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                backgroundColor: "#f2f2f2",
              }}
            >
              BAIRRO
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                backgroundColor: "#f2f2f2",
              }}
            >
              CIDADE
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                backgroundColor: "#f2f2f2",
              }}
            >
              ESTADO
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                backgroundColor: "#f2f2f2",
              }}
            >
              CARGO
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                backgroundColor: "#f2f2f2",
              }}
            >
              SALÁRIO
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                backgroundColor: "#f2f2f2",
              }}
            >
              AÇÕES
            </th>
          </tr>
        </thead>
        <tbody>
          {colaboradores
            .sort((a, b) => a.nomeColaborador.localeCompare(b.nomeColaborador))
            .map((colaborador) => (
              <tr key={colaborador.idColaborador}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {colaborador.nomeColaborador}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {colaborador.generoColaborador}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {colaborador.cpfColaborador}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {colaborador.cepColaborador}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {colaborador.enderecoColaborador}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {colaborador.numeroColaborador}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {colaborador.bairroColaborador}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {colaborador.cidadeColaborador}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {colaborador.estadoColaborador}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {colaborador.idCargoColaborador}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {colaborador.salarioColaborador}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <button
                    onClick={() => preencherFormularioEdicao(colaboradores.indexOf(colaborador))}
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "#ffc107",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => excluirColaborador(colaborador.idColaborador)}
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "#dc3545",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      marginLeft: "10px",
                    }}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Colaboradores;
