-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS erp 
  DEFAULT CHARACTER SET utf8mb4 
  COLLATE utf8mb4_general_ci;

USE erp;

-- Criação da tabela Clientes
CREATE TABLE clientes (
  id_cliente INT NOT NULL AUTO_INCREMENT,
  razao_social VARCHAR(45) NOT NULL,
  cnpj VARCHAR(20) NOT NULL,
  ie VARCHAR(16) DEFAULT NULL,
  cep VARCHAR(10) NOT NULL,
  endereco VARCHAR(200) NOT NULL,
  numero INT DEFAULT NULL,
  bairro VARCHAR(50) NOT NULL,
  cidade VARCHAR(50) NOT NULL,
  estado VARCHAR(2) NOT NULL,
  PRIMARY KEY (id_cliente)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Criação da tabela Cargos
CREATE TABLE cargos (
  id_cargo INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(25) NOT NULL,
  nivel VARCHAR(25) NOT NULL,
  salario_base FLOAT NOT NULL,
  PRIMARY KEY (id_cargo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Criação da tabela Colaboradores
CREATE TABLE colaboradores (
  id_colaborador INT NOT NULL AUTO_INCREMENT,
  nome_colaborador VARCHAR(50) NOT NULL,
  genero VARCHAR(20) DEFAULT NULL,
  cpf VARCHAR(14) NOT NULL,
  cep VARCHAR(10) NOT NULL,
  endereco VARCHAR(200) NOT NULL,
  numero INT DEFAULT NULL,
  bairro VARCHAR(50) NOT NULL,
  cidade VARCHAR(50) NOT NULL,
  estado VARCHAR(2) NOT NULL,
  id_cargo INT NOT NULL,
  salario FLOAT NOT NULL,
  PRIMARY KEY (id_colaborador),
  FOREIGN KEY (id_cargo) REFERENCES cargos(id_cargo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Criação da tabela Chamados
CREATE TABLE chamados (
  id_chamado INT NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(100) NOT NULL,
  descricao TEXT NOT NULL,
  data_abertura DATETIME NOT NULL,
  data_encerramento DATETIME DEFAULT NULL,
  prioridade VARCHAR(20) DEFAULT NULL,
  id_cliente INT NOT NULL,
  id_responsavel INT NOT NULL,
  tipo_contato VARCHAR(20) DEFAULT NULL,
  PRIMARY KEY (id_chamado),
  FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
  FOREIGN KEY (id_responsavel) REFERENCES colaboradores(id_colaborador)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
