// src/pages/Turma.tsx
import React, { useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import HeaderTabs from '../components/header/HeaderTabs';

interface TurmaProps {
  turmaId: string;
}
/*
const Turma: React.FC<TurmaProps> = ({ turmaId }) => {
  const [activeTab, setActiveTab] = useState<'Atividades' | 'Alunos'>('Atividades');

  const handleTabChange = (newValue: 'Atividades' | 'Alunos') => {
    setActiveTab(newValue); 
  };

  return (
    <IonPage>
      <IonContent className="p-8 bg-white min-h-screen mt-4">
        <HeaderTabs tabs={['Atividades', 'Alunos']} onTabChange={handleTabChange} />
        <div className="mt-4">
          {activeTab === 'Atividades' ? (
            //<Atividades turmaId={turmaId} />
          ) : (
            //<Alunos turmaId={turmaId} />
          )} 
        </div> 
      </IonContent>
    </IonPage>
  );
};

export default Turma;*/
