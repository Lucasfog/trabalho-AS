import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns"; // Importando a função de formatação

function Chamados() {
  const [chamados, setChamados] = useState([]);
  const [novoChamado, setNovoChamado] = useState({
    tituloChamado: "",
    descricaoChamado: "",
    dataAbertura: "",
    dataEncerramento: "",
    prioridadeChamado: "",
    idClienteChamado: "",
    idResponsavelChamado: "",
    tipoContato: "",
  });
  const [chamadoEditando, setChamadoEditando] = useState(null);
  const [formularioVisivel, setFormularioVisivel] = useState(false);

  const API_URL = "http://localhost:8080";

  // Função para buscar chamados
  const fetchChamados = async () => {
    try {
      const response = await axios.get(`${API_URL}/chamados`);
      const chamadosFormatados = response.data.map(chamado => ({
        ...chamado,
      }));
      setChamados(chamadosFormatados);
    } catch (error) {
      console.error("Erro ao buscar chamados:", error);
    }
  };

  // Função para adicionar cliente (POST)
  const adicionarChamado = async () => {
    try {
      const response = await axios.post(`${API_URL}/inserirChamado`, novoChamado, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        alert("Chamado adicionado com sucesso!");
        fetchChamados();
        resetFormulario();
      } else {
        console.error("Erro inesperado:", response.data);
        alert("Erro ao adicionar chamado.");
      }
    } catch (error) {
      console.error("Erro ao adicionar chamado:", error);
      alert(error.response?.data?.message || "Erro ao adicionar chamado.");
    }
  };


   // Função para editar cliente (POST)
   const editarChamado = async () => {
    try {
      const chamadoEditado = { ...novoChamado };

      await axios.post(`${API_URL}/alterarChamado`, chamadoEditado, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Chamado editado com sucesso!");
      fetchChamados();
      resetFormulario();
    } catch (error) {
      console.error("Erro ao editar chamado:", error);
    }
  };

  // Função para resetar o formulário
  const resetFormulario = () => {
    setNovoChamado({
      tituloChamado: "",
      descricaoChamado: "",
      dataAbertura: "",
      dataEncerramento: "",
      prioridadeChamado: "",
      idClienteChamado: "",
      idResponsavelChamado: "",
      tipoContato: "",
    });
    setFormularioVisivel(false);
    setChamadoEditando(null);
  };

  // Função para preencher o formulário de edição
  const preencherFormularioEdicao = (index) => {
    setNovoChamado({ ...chamados[index] });
    setChamadoEditando(index);
    setFormularioVisivel(true);
  };

  // Função para excluir chamado
  const excluirChamado = async (id) => {
    try {
      if (id) {
        const response = await axios.get(`${API_URL}/removerChamado/${id}`);
        if (response.status === 200) {
          alert("Chamado excluído com sucesso!");
          fetchChamados();
        } else {
          console.error("Erro ao excluir chamado:", response.data);
          alert("Erro ao excluir chamado.");
        }
      } else {
        console.error("ID do chamado não encontrado.");
      }
    } catch (error) {
      console.error("Erro ao excluir chamado:", error);
    }
  };

  // Atualiza campos do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoChamado({ ...novoChamado, [name]: value });
  };

  useEffect(() => {
    fetchChamados();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Gerenciamento de Chamados</h1>
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
        {formularioVisivel ? "Cancelar" : "Novo Chamado"}
      </button>

      {formularioVisivel && (
        <form style={{ marginTop: "20px" }}>
          {Object.keys(novoChamado).map((key) => (
            <div key={key} style={{ marginBottom: "10px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                {key.replace("_", " ").toUpperCase()}
              </label>
              <input
                type="text"
                name={key}
                value={novoChamado[key]}
                onChange={handleInputChange}
                style={{
                  padding: "8px",
                  width: "100%",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={chamadoEditando !== null ? editarChamado : adicionarChamado}
            style={{
              padding: "10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {chamadoEditando !== null ? "Salvar Alterações" : "Cadastrar"}
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
            <th style={{ padding: "8px", backgroundColor: "#f2f2f2", border: "1px solid #ddd" }}>TÍTULO</th>
            <th style={{ padding: "8px", backgroundColor: "#f2f2f2", border: "1px solid #ddd" }}>DESCRIÇÃO</th>
            <th style={{ padding: "8px", backgroundColor: "#f2f2f2", border: "1px solid #ddd" }}>DATA ABERTURA</th>
            <th style={{ padding: "8px", backgroundColor: "#f2f2f2", border: "1px solid #ddd" }}>DATA ENCERRAMENTO</th>
            <th style={{ padding: "8px", backgroundColor: "#f2f2f2", border: "1px solid #ddd" }}>PRIORIDADE</th>
            <th style={{ padding: "8px", backgroundColor: "#f2f2f2", border: "1px solid #ddd" }}>CLIENTE</th>
            <th style={{ padding: "8px", backgroundColor: "#f2f2f2", border: "1px solid #ddd" }}>RESPONSÁVEL</th>
            <th style={{ padding: "8px", backgroundColor: "#f2f2f2", border: "1px solid #ddd" }}>TIPO CONTATO</th>
            <th style={{ padding: "8px", backgroundColor: "#f2f2f2", border: "1px solid #ddd" }}>AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          {chamados.map((chamado, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{chamado.tituloChamado}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{chamado.descricaoChamado}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{chamado.dataAbertura}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{chamado.dataEncerramento}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{chamado.prioridadeChamado}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{chamado.idClienteChamado}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{chamado.idResponsavelChamado}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{chamado.tipoContato}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              <button
                    onClick={() => preencherFormularioEdicao(index)}
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
                    onClick={() => excluirChamado(chamado.idChamado)}
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

export default Chamados;
