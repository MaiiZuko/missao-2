"use client";

import React, { useEffect, useState } from 'react';
import { getTurmaAtividades } from '../src/app/mockData';
import AssignmentIcon from '@mui/icons-material/Assignment'; // Ícone de atividade genérico

const Atividades = ({ turmaId }) => {
  const [atividades, setAtividades] = useState([]);

  useEffect(() => {
    const fetchAtividades = async () => {
      const atividadesData = await getTurmaAtividades(turmaId);
      setAtividades(atividadesData);
    };

    fetchAtividades();
  }, [turmaId]);

  // Função para gerar data fictícia para cada atividade
  const gerarDataFicticia = (index) => {
    const diasAtras = (index + 1) * 7; // Gera datas fictícias com 7 dias de diferença
    const hoje = new Date();
    const data = new Date(hoje.setDate(hoje.getDate() - diasAtras));
    return data.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
  };

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
      {/* Cabeçalho com título "Atividades" */}
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
        <h2 style={{ margin: 0, fontWeight: 'bold', fontSize: '24px', fontFamily: 'Roboto, sans-serif' }}>Atividades</h2>
        <span style={{ fontSize: '16px', color: '#666', fontFamily: 'Roboto, sans-serif' }}>{atividades.length} atividades</span>
      </div>

      <ul style={{ listStyleType: 'none', padding: 0, width: '100%', maxWidth: '900px' }}>
        {atividades.map((atividade, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px 0',
              borderBottom: '1px solid #e0e0e0',
              fontSize: '16px',
              fontFamily: 'Roboto, sans-serif',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* Ícone da atividade */}
              <AssignmentIcon style={{ marginRight: '10px', color: '#9e9e9e' }} />
              <span style={{ fontWeight: 'normal', color: '#333' }}>{atividade}</span>
            </div>
            <span style={{ fontSize: '14px', color: '#666' }}>{gerarDataFicticia(index)}</span> {/* Data fictícia */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Atividades;
