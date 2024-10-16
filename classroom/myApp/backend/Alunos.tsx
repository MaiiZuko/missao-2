// src/backend/Alunos.tsx
import React, { useEffect, useState } from 'react';
import { getTurmaAlunos } from './mockData'; // Ajuste o caminho conforme necessário

interface AlunosProps {
  turmaId: string; // Definindo a propriedade que receberá o ID da turma
}

const Alunos: React.FC<AlunosProps> = ({ turmaId }) => {
  const [alunos, setAlunos] = useState<string[]>([]); // Estado como um array de strings

  useEffect(() => {
    const fetchAlunos = async () => {
      const alunosData = await getTurmaAlunos(turmaId);
      setAlunos(alunosData);
    };

    fetchAlunos();
  }, [turmaId]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: '0 20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          width: '100%',
          maxWidth: '900px',
          marginBottom: '20px',
          fontFamily: 'Roboto, sans-serif',
          borderBottom: '1px solid #e0e0e0',
          paddingBottom: '20px',
        }}
      >
        <h2 style={{ margin: 0, fontWeight: 'bold', fontSize: '24px', fontFamily: 'Roboto, sans-serif' }}>Colegas de turma</h2>
        <span style={{ fontSize: '16px', fontFamily: 'Roboto, sans-serif' }}>{alunos.length} estudantes</span>
      </div>

      <ul style={{ listStyleType: 'none', padding: 0, width: '100%', maxWidth: '900px' }}>
        {alunos.map((aluno, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px 0',
              borderBottom: '1px solid #e0e0e0',
              fontSize: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontWeight: 'normal', color: '#333' }}>{aluno}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alunos;
