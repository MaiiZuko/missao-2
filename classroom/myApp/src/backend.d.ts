// src/backend.d.ts (ou em qualquer outro lugar que você tenha escolhido)
declare module '../../backend/Alunos' {
    const Alunos: React.FC<{ turmaId: string }>; // Ajuste conforme necessário
    export default Alunos;
  }
  
  declare module '../../backend/Atividades' {
    const Atividades: React.FC<{ turmaId: string }>; // Ajuste conforme necessário
    export default Atividades;
  }
  