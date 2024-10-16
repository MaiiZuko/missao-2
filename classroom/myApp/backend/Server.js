import express from 'express';
import cors from 'cors';


const app = express();
const PORT = 5000;

const mockTurmas = [
  {
    nomeSlug: "estrutura-de-software",
    nome: "IJ - Estrutura de Software",
    alunos: [
      'João Silva Santos',
      'Maria Oliveira Lima',
      'Pedro Santos Carvalho',
      'Ana Costa Ribeiro',
      'Carlos Almeida',
      'Ana Beatriz',
      'Luiz Fernando',
      'Mariana Souza',
      'Renato Silva',
      'Cláudia Oliveira',
      'Gabriel Ferreira',
      'Sofia Martins',
    ],
    atividades: [
      'Trabalho 1 - Sistema',
      'Prova 1 - Estrutura de Dados',
      'Projeto Final - Software',
      'Exercício 3 - Análise de Requisitos',
      'Apresentação de Projeto',
      'Desenvolvimento de Aplicação Móvel',
      'Relatório de Pesquisa',
      'Atividade Prática - UML',
    ],
  },
  {
    nomeSlug: "programacao",
    nome: "IJ - Programação",
    alunos: [
      'Lucas Pereira da Silva',
      'Carla Dias Nascimento',
      'Fernando Almeida Costa',
      'Sofia Ribeiro Santos',
      'Júlio César',
      'Fernanda Lima',
      'Roberto Carlos',
      'Cláudia Tavares',
      'Paulo Henrique',
      'Luciana Santos',
      'Marcos Vinícius',
      'Patrícia Almeida',
    ],
    atividades: [
      'Exercício 1 - Algoritmos',
      'Projeto Final - Aplicação Web',
      'Prova 1 - Algoritmos',
      'Trabalho de Revisão',
      'Desafio de Código',
      'Laboratório de Programação',
      'Estudo de Caso - Sistema',
      'Implementação de API REST',
    ],
  },
];

app.use(cors());
app.use(express.json());

// Busca alunos pela turma utilizando o nomeSlug
app.get('/turma/:nomeSlug/alunos', (req, res) => {
  const turmaNomeSlug = req.params.nomeSlug;
  const turma = mockTurmas.find(t => t.nomeSlug === turmaNomeSlug);
  if (turma) {
    res.json(turma.alunos);
  } else {
    res.status(404).send('Turma não encontrada');
  }
});

// Busca atividades pela turma utilizando o nomeSlug
app.get('/turma/:nomeSlug/atividades', (req, res) => {
  const turmaNomeSlug = req.params.nomeSlug;
  const turma = mockTurmas.find(t => t.nomeSlug === turmaNomeSlug);
  if (turma) {
    res.json(turma.atividades);
  } else {
    res.status(404).send('Turma não encontrada');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
