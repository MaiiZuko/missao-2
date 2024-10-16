const API_URL = 'http://localhost:5000';

export const getTurmaAlunos = async (nomeSlug) => {
  try {
    const response = await fetch(`${API_URL}/turma/${nomeSlug}/alunos`);
    if (!response.ok) {
      throw new Error('Erro ao buscar alunos');
    }
    const alunos = await response.json();
    return alunos;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getTurmaAtividades = async (nomeSlug) => {
  try {
    const response = await fetch(`${API_URL}/turma/${nomeSlug}/atividades`);
    if (!response.ok) {
      throw new Error('Erro ao buscar atividades');
    }
    const atividades = await response.json();
    return atividades;
  } catch (error) {
    console.error(error);
    return [];
  }
};
