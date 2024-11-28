import React, { useState, useEffect } from "react";
import axios from "axios";

function Cargos() {
  const [cargos, setCargos] = useState([]);
  const [novoCargo, setNovoCargo] = useState({
    nomeCargo: "",
    nivelCargo: "",
    salarioBase: "",
  });
  const [cargoEditando, setCargoEditando] = useState(null);
  const [formularioVisivel, setFormularioVisivel] = useState(false);

  const API_URL = "http://localhost:8080";

  // Função para buscar cargos
  const fetchCargos = async () => {
    try {
      const response = await axios.get(`${API_URL}/cargos`);  // Corrigido: adicionadas crases
      setCargos(response.data);
    } catch (error) {
      console.error("Erro ao buscar cargos:", error);
    }
  };

  // Função para adicionar cargo (POST)
  const adicionarCargo = async () => {
    try {
      const response = await axios.post(`${API_URL}/inserirCargo`, novoCargo, {  // Corrigido: adicionadas crases
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        alert("Cargo adicionado com sucesso!");
        fetchCargos();
        resetFormulario();
      } else {
        console.error("Erro inesperado:", response.data);
        alert("Erro ao adicionar cargo.");
      }
    } catch (error) {
      console.error("Erro ao adicionar cargo:", error);
      alert(error.response?.data?.message || "Erro ao adicionar cargo.");
    }
  };

  // Função para editar cargo (POST)
  const editarCargo = async () => {
    try {
      await axios.post(`${API_URL}/alterarCargo`, novoCargo, {  // Corrigido: adicionadas crases
        headers: { "Content-Type": "application/json" },
      });
      alert("Cargo editado com sucesso!");
      fetchCargos();
      resetFormulario();
    } catch (error) {
      console.error("Erro ao editar cargo:", error);
    }
  };

  // Função para excluir cargo (GET)
  const excluirCargo = async (id) => {
    try {
      if (id) {
        const response = await axios.get(`${API_URL}/removerCargo/${id}`);  // Corrigido: adicionadas crases
        if (response.status === 200) {
          alert("Cargo excluído com sucesso!");
          fetchCargos();
        } else {
          console.error("Erro ao excluir cargo:", response.data);
          alert("Erro ao excluir cargo.");
        }
      } else {
        console.error("ID do cargo não encontrado.");
      }
    } catch (error) {
      console.error("Erro ao excluir cargo:", error);
    }
  };

  // Reseta o formulário após salvar ou cancelar
  const resetFormulario = () => {
    setNovoCargo({
      nomeCargo: "",
      nivelCargo: "",
      salarioBase: "",
    });
    setFormularioVisivel(false);
    setCargoEditando(null);
  };

  // Preenche o formulário para editar cargo
  const preencherFormularioEdicao = (index) => {
    setNovoCargo({ ...cargos[index] });
    setCargoEditando(index);
    setFormularioVisivel(true);
  };

  // Atualiza campos do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoCargo({ ...novoCargo, [name]: value });
  };

  useEffect(() => {
    fetchCargos();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Gerenciamento de Cargos</h1>
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
        {formularioVisivel ? "Cancelar" : "Novo Cargo"}
      </button>

      {formularioVisivel && (
        <form style={{ marginTop: "20px" }}>
          {Object.keys(novoCargo).map((key) => (
            <div key={key} style={{ marginBottom: "10px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                {key.replace("Cargo", "").toUpperCase()}
              </label>
              <input
                type="text"
                name={key}
                value={novoCargo[key]}
                onChange={handleInputChange}
                style={{
                  padding: "8px",
                  width: "100%",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
                disabled={key === "idCargos"} // Desabilita o campo ID
              />
            </div>
          ))}
          <button
            type="button"
            onClick={cargoEditando !== null ? editarCargo : adicionarCargo}
            style={{
              padding: "10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {cargoEditando !== null ? "Salvar Alterações" : "Cadastrar"}
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
            <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#f2f2f2" }}>
              NOME
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#f2f2f2" }}>
              DESCRIÇÃO
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#f2f2f2" }}>
              SALÁRIO
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#f2f2f2" }}>
              AÇÕES
            </th>
          </tr>
        </thead>
        <tbody>
          {cargos
            .sort((a, b) => a.nomeCargo.localeCompare(b.nomeCargo))
            .map((cargo, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{cargo.nomeCargo}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{cargo.nivelCargo}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{cargo.salarioBase}</td>
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
                    onClick={() => excluirCargo(cargo.idCargo)}
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

export default Cargos;
