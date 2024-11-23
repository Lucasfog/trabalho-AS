-- Inserção de dados fictícios na tabela Clientes
INSERT INTO clientes (razao_social, cnpj, ie, cep, endereco, numero, bairro, cidade, estado)
VALUES
('Empresa A Ltda', '12.345.678/0001-99', '123456789', '12345-678', 'Rua A', 100, 'Centro', 'São Paulo', 'SP'),
('Empresa B S/A', '98.765.432/0001-55', '987654321', '87654-321', 'Avenida B', 200, 'Bairro B', 'Rio de Janeiro', 'RJ'),
('Empresa C ME', '11.222.333/0001-88', '1122334455', '11222-333', 'Travessa C', 300, 'Bairro C', 'Belo Horizonte', 'MG'),
('Empresa D EPP', '44.555.666/0001-77', '6677889900', '44556-667', 'Alameda D', 400, 'Bairro D', 'Porto Alegre', 'RS'),
('Empresa E LTDA', '55.666.777/0001-66', '9988776655', '55667-778', 'Rodovia E', 500, 'Bairro E', 'Curitiba', 'PR');

-- Inserção de dados fictícios na tabela Cargos
INSERT INTO cargos (nome, nivel, salario_base)
VALUES
('Desenvolvedor', 'Junior', 3000.00),
('Desenvolvedor', 'Pleno', 5000.00),
('Desenvolvedor', 'Senior', 7000.00),
('Analista', 'Junior', 3500.00),
('Analista', 'Pleno', 5500.00),
('Analista', 'Senior', 7500.00),
('Gerente', 'N/A', 10000.00),
('Diretor', 'N/A', 15000.00);

-- Inserção de dados fictícios na tabela Colaboradores
INSERT INTO colaboradores (nome_colaborador, genero, cpf, cep, endereco, numero, bairro, cidade, estado, id_cargo, salario)
VALUES
('João Silva', 'Masculino', '123.456.789-00', '12345-678', 'Rua A', 100, 'Centro', 'São Paulo', 'SP', 1, 3000.00),
('Maria Oliveira', 'Feminino', '987.654.321-00', '87654-321', 'Avenida B', 200, 'Bairro B', 'Rio de Janeiro', 'RJ', 2, 5000.00),
('Carlos Souza', 'Masculino', '456.789.123-00', '11222-333', 'Travessa C', 300, 'Bairro C', 'Belo Horizonte', 'MG', 3, 7000.00),
('Ana Costa', 'Feminino', '321.654.987-00', '44556-667', 'Alameda D', 400, 'Bairro D', 'Porto Alegre', 'RS', 4, 3500.00),
('Lucas Pereira', 'Masculino', '789.123.456-00', '55667-778', 'Rodovia E', 500, 'Bairro E', 'Curitiba', 'PR', 5, 5500.00);

-- Inserção de dados fictícios na tabela Chamados
INSERT INTO chamados (titulo, descricao, data_abertura, data_encerramento, prioridade, id_cliente, id_responsavel, tipo_contato)
VALUES
('Problema no sistema', 'O sistema está travando constantemente.', '2024-01-01 08:00:00', '2024-01-02 17:00:00', 'Alta', 1, 1, 'Email'),
('Erro de login', 'Usuário não consegue fazer login.', '2024-02-01 09:00:00', '2024-02-02 15:00:00', 'Média', 2, 2, 'Telefone'),
('Solicitação de acesso', 'Necessário liberar acesso para novo usuário.', '2024-03-01 10:00:00', '2024-03-03 14:00:00', 'Baixa', 3, 3, 'Chat'),
('Atualização de sistema', 'Solicitação para atualizar sistema para nova versão.', '2024-04-01 11:00:00', '2024-04-05 11:00:00', 'Média', 4, 4, 'Email'),
('Problema de performance', 'Sistema está lento durante o uso.', '2024-05-01 12:00:00', '2024-05-03 16:00:00', 'Alta', 5, 5, 'Telefone');

-- Inserção de dados fictícios na tabela Usuarios
INSERT INTO usuarios (nome, email, senha, ativo) VALUES
('Carlos Souza', 'carlos.souza@trabalhoerp.com', 'senha123', TRUE),
('Maria Oliveira', 'maria.oliveira@trabalhoerp.com', 'senha456', TRUE),
('José Pereira', 'jose.pereira@trabalhoerp.com', 'senha789', FALSE),
('Ana Costa', 'ana.costa@trabalhoerp.com', 'senha101', TRUE),
('Lucas Gomes', 'lucas.gomes@trabalhoerp.com', 'senha202', TRUE),
('Fernanda Lima', 'fernanda.lima@trabalhoerp.com', 'senha303', FALSE),
('Roberto Alves', 'roberto.alves@trabalhoerp.com', 'senha404', TRUE),
('Patrícia Santos', 'patricia.santos@trabalhoerp.com', 'senha505', TRUE),
('Felipe Martins', 'felipe.martins@trabalhoerp.com', 'senha606', TRUE),
('Juliana Rocha', 'juliana.rocha@trabalhoerp.com', 'senha707', FALSE);
