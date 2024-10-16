import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router-dom';
import HeaderTabs from '../components/header/HeaderTabs';
import Alunos from '../../backend/Alunos';
import Atividades from '../../backend/Atividades';

const Turma: React.FC = () => {
  const { turmaId } = useParams<{ turmaId: string }>(); // Captura o parametro da URL
  const [activeTab, setActiveTab] = useState<'Atividades' | 'Alunos'>('Atividades'); // Inicializa com "Atividades"

  const handleTabChange = (newValue: string) => {
    setActiveTab(newValue as 'Atividades' | 'Alunos');
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
            <Atividades turmaId={turmaId} /> // Passa o turmaId capturado da URL para Atividades
          ) : (
            <Alunos turmaId={turmaId} /> // Passa o turmaId capturado da URL para Alunos
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Turma;
