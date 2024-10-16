"use client";

import React, { useEffect, useState } from 'react';
import { getTurmaAlunos } from '../mockData';
import MailOutlineIcon from '@mui/icons-material/MailOutline'; 
import PersonIcon from '@mui/icons-material/Person'; 

const Alunos = ({ turmaId }) => {
  const [alunos, setAlunos] = useState([]);

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
        <span style={{ fontSize: '16x', color: '#666', fontFamily: 'Roboto, sans-serif' }}>{alunos.length} estudantes</span>
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
              <PersonIcon style={{ marginRight: '10px', color: '#9e9e9e' }} />
              <span style={{ fontWeight: 'normal', color: '#333' }}>{aluno}</span>
            </div>
            <MailOutlineIcon style={{ fontSize: '20px', color: '#333' }} /> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alunos;
