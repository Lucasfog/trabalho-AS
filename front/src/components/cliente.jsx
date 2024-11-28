import React, { useState, useEffect } from "react";
import axios from "axios";

function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [novoCliente, setNovoCliente] = useState({
    razaoSocialCliente: "",
    cnpjCliente: "",
    ieCliente: "",
    cepCliente: "",
    enderecoCliente: "",
    numeroCliente: "",
    bairroCliente: "",
    cidadeCliente: "",
    estadoCliente: "",
  });
  const [clienteEditando, setClienteEditando] = useState(null);
  const [formularioVisivel, setFormularioVisivel] = useState(false);

  const API_URL = "http://localhost:8080";

  // Função para buscar clientes
  const fetchClientes = async () => {
    try {
      const response = await axios.get(`${API_URL}/clientes`);
      setClientes(response.data);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  };

  // Função para adicionar cliente (POST)
  const adicionarCliente = async () => {
    try {
      const response = await axios.post(`${API_URL}/inserirCliente`, novoCliente, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        alert("Cliente adicionado com sucesso!");
        fetchClientes(); // Recarrega os clientes após a adição
        resetFormulario();
      } else {
        console.error("Erro inesperado:", response.data);
        alert("Erro ao adicionar cliente.");
      }
    } catch (error) {
      console.error("Erro ao adicionar cliente:", error);
      alert(error.response?.data?.message || "Erro ao adicionar cliente.");
    }
  };

  // Função para editar cliente (POST)
  const editarCliente = async () => {
    try {
      const clienteEditado = { ...novoCliente };

      await axios.post(`${API_URL}/alterarCliente`, clienteEditado, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Cliente editado com sucesso!");
      fetchClientes();
      resetFormulario();
    } catch (error) {
      console.error("Erro ao editar cliente:", error);
    }
  };

  // Função para excluir cliente (GET)
  const excluirCliente = async (id) => {
    try {
      if (id) {
        const response = await axios.get(`${API_URL}/removerCliente/${id}`);
        if (response.status === 200) {
          alert("Cliente excluído com sucesso!");
          fetchClientes();
        } else {
          console.error("Erro ao excluir cliente:", response.data);
          alert("Erro ao excluir cliente.");
        }
      } else {
        console.error("ID do cliente não encontrado.");
      }
    } catch (error) {
      console.error("Erro ao excluir cliente:", error);
    }
  };

  // Reseta o formulário após salvar ou cancelar
  const resetFormulario = () => {
    setNovoCliente({
      razaoSocialCliente: "",
      cnpjCliente: "",
      ieCliente: "",
      cepCliente: "",
      enderecoCliente: "",
      numeroCliente: "",
      bairroCliente: "",
      cidadeCliente: "",
      estadoCliente: "",
    });
    setFormularioVisivel(false);
    setClienteEditando(null);
  };

  // Preenche o formulário para editar cliente
  const preencherFormularioEdicao = (index) => {
    setNovoCliente({ ...clientes[index] }); // Preenche todos os campos
    setClienteEditando(index);
    setFormularioVisivel(true);
  };

  // Atualiza campos do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoCliente({ ...novoCliente, [name]: value });
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Gerenciamento de Clientes</h1>
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
        {formularioVisivel ? "Cancelar" : "Novo Cliente"}
      </button>

      {formularioVisivel && (
        <form style={{ marginTop: "20px" }}>
          {Object.keys(novoCliente).map((key) => (
            <div key={key} style={{ marginBottom: "10px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                {key.replace("Cliente", "").toUpperCase()}
              </label>
              <input
                type="text"
                name={key}
                value={novoCliente[key]}
                onChange={handleInputChange}
                style={{
                  padding: "8px",
                  width: "100%",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
                disabled={key === "idCliente"} // Desabilita o campo ID
              />
            </div>
          ))}
          <button
            type="button"
            onClick={clienteEditando !== null ? editarCliente : adicionarCliente}
            style={{
              padding: "10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {clienteEditando !== null ? "Salvar Alterações" : "Cadastrar"}
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
              RAZÃO SOCIAL
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                backgroundColor: "#f2f2f2",
              }}
            >
              CNPJ
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                backgroundColor: "#f2f2f2",
              }}
            >
              IE
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
              AÇÕES
            </th>
          </tr>
        </thead>
        <tbody>
          {clientes
            .sort((a, b) => a.razaoSocialCliente.localeCompare(b.razaoSocialCliente)) // Ordena por Razão Social
            .map((cliente, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {cliente.razaoSocialCliente}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {cliente.cnpjCliente}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {cliente.ieCliente}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {cliente.cepCliente}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {cliente.enderecoCliente}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {cliente.numeroCliente}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {cliente.bairroCliente}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {cliente.cidadeCliente}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {cliente.estadoCliente}
                </td>
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
                    onClick={() => excluirCliente(cliente.idCliente)}
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

export default Clientes;
