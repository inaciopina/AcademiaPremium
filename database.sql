-- Criação do banco de dados
CREATE DATABASE academia_premium;
USE academia_premium;

-- Tabela de usuários
CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    data_nascimento DATE,
    telefone VARCHAR(15),
    altura DECIMAL(3,2),
    peso DECIMAL(5,2),
    objetivo VARCHAR(50),
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ultimo_acesso TIMESTAMP,
    ativo BOOLEAN DEFAULT TRUE
);

-- Tabela de planos
CREATE TABLE planos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL,
    periodo VARCHAR(20) NOT NULL,
    popular BOOLEAN DEFAULT FALSE,
    ativo BOOLEAN DEFAULT TRUE
);

-- Tabela de assinaturas
CREATE TABLE assinaturas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    plano_id INT NOT NULL,
    data_inicio DATE NOT NULL,
    data_fim DATE NOT NULL,
    status VARCHAR(20) NOT NULL,
    valor_pago DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (plano_id) REFERENCES planos(id)
);

-- Tabela de instrutores
CREATE TABLE instrutores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefone VARCHAR(15),
    cref VARCHAR(20) NOT NULL UNIQUE,
    especialidades TEXT,
    experiencia INT,
    bio TEXT,
    ativo BOOLEAN DEFAULT TRUE
);

-- Tabela de treinos
CREATE TABLE treinos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    tipo VARCHAR(50) NOT NULL,
    nivel VARCHAR(20) NOT NULL,
    duracao INT NOT NULL, -- em minutos
    instrutor_id INT,
    ativo BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (instrutor_id) REFERENCES instrutores(id)
);

-- Tabela de exercícios
CREATE TABLE exercicios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    grupo_muscular VARCHAR(50) NOT NULL,
    equipamento VARCHAR(50),
    video_url VARCHAR(255),
    ativo BOOLEAN DEFAULT TRUE
);

-- Tabela de treino_exercicios (relacionamento entre treinos e exercícios)
CREATE TABLE treino_exercicios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    treino_id INT NOT NULL,
    exercicio_id INT NOT NULL,
    series INT NOT NULL,
    repeticoes INT NOT NULL,
    carga DECIMAL(5,2),
    descanso INT, -- em segundos
    ordem INT NOT NULL,
    FOREIGN KEY (treino_id) REFERENCES treinos(id),
    FOREIGN KEY (exercicio_id) REFERENCES exercicios(id)
);

-- Tabela de histórico de treinos
CREATE TABLE historico_treinos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    treino_id INT NOT NULL,
    data_treino TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    duracao INT, -- em minutos
    observacoes TEXT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (treino_id) REFERENCES treinos(id)
);

-- Tabela de avaliações físicas
CREATE TABLE avaliacoes_fisicas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    instrutor_id INT NOT NULL,
    data_avaliacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    peso DECIMAL(5,2) NOT NULL,
    altura DECIMAL(3,2) NOT NULL,
    imc DECIMAL(4,2) NOT NULL,
    percentual_gordura DECIMAL(4,2),
    massa_muscular DECIMAL(4,2),
    circunferencias TEXT,
    objetivos TEXT,
    observacoes TEXT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (instrutor_id) REFERENCES instrutores(id)
);

-- Inserção de dados iniciais para planos
INSERT INTO planos (nome, descricao, preco, periodo, popular) VALUES
('Básico', 'Acesso à academia e treino básico', 99.90, 'mensal', FALSE),
('Premium', 'Acesso à academia, treino personalizado e aulas em grupo', 149.90, 'mensal', TRUE),
('Elite', 'Acesso completo com personal trainer e nutricionista', 199.90, 'mensal', FALSE);

-- Inserção de dados iniciais para instrutores
INSERT INTO instrutores (nome, email, telefone, cref, especialidades, experiencia, bio) VALUES
('João Silva', 'joao.silva@academia.com', '(11) 99999-9999', 'CREF 123456', 'Hipertrofia, Força, Crossfit', 8, 'Especialista em treinamento de força e hipertrofia'),
('Maria Santos', 'maria.santos@academia.com', '(11) 98888-8888', 'CREF 789012', 'Pilates, Funcional, Yoga', 5, 'Especialista em Pilates e correção postural'),
('Pedro Oliveira', 'pedro.oliveira@academia.com', '(11) 97777-7777', 'CREF 345678', 'Funcional, Emagrecimento', 6, 'Especialista em treinamento funcional');

-- Inserção de dados iniciais para exercícios
INSERT INTO exercicios (nome, descricao, grupo_muscular, equipamento) VALUES
('Supino Reto', 'Exercício para peitoral', 'Peitoral', 'Barra'),
('Agachamento', 'Exercício para pernas', 'Quadríceps', 'Barra'),
('Puxada Frontal', 'Exercício para costas', 'Costas', 'Polia'),
('Rosca Direta', 'Exercício para bíceps', 'Bíceps', 'Halteres'),
('Elevação Lateral', 'Exercício para ombros', 'Deltóides', 'Halteres');

-- Criação de índices para melhor performance
CREATE INDEX idx_usuarios_email ON usuarios(email);
CREATE INDEX idx_usuarios_cpf ON usuarios(cpf);
CREATE INDEX idx_assinaturas_usuario ON assinaturas(usuario_id);
CREATE INDEX idx_historico_treinos_usuario ON historico_treinos(usuario_id);
CREATE INDEX idx_avaliacoes_fisicas_usuario ON avaliacoes_fisicas(usuario_id); 