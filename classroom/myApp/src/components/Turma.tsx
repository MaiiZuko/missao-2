// src/pages/Turma.tsx
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import HeaderTabs from '../components/header/HeaderTabs'; // Certifique-se de que o caminho está correto
import Alunos from '../../backend/Alunos'; // Importe seu componente Alunos
import Atividades from '../../backend/Atividades'; // Importe seu componente Atividades

interface TurmaProps {
  turmaId: string; // ID da turma, se necessário
}

const Turma: React.FC<TurmaProps> = ({ turmaId }) => {
  const [activeTab, setActiveTab] = useState<'Atividades' | 'Alunos'>('Atividades'); // Inicializa com a aba "Atividades"

  const handleTabChange = (newValue: string) => {
    setActiveTab(newValue as 'Atividades' | 'Alunos'); // Certifique-se de que o novo valor é um dos tipos
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Turma</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="p-8 bg-white min-h-screen mt-4">
        <HeaderTabs tabs={['Atividades', 'Alunos']} onTabChange={handleTabChange} />
        <div className="mt-4">
          {activeTab === 'Atividades' ? (
            <Atividades turmaId={turmaId} /> // Renderiza o componente de atividades
          ) : (
            <Alunos turmaId={turmaId} /> // Renderiza o componente de alunos
          )} 
        </div> 
      </IonContent>
    </IonPage>
  );
};

export default Turma;
