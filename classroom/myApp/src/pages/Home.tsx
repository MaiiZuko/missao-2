// src/pages/Home.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Card from '../components/Card'; // Importa o componente Card

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        
        <IonToolbar>
        <IonTitle>Google Classroom</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="grid">
          <Card
            href="/turma/estrutura-de-software"
            title="IJ - Estrutura de Software"
            group="PROFESSOR"
          />
          <Card
            href="/turma/programacao"
            title="IJ - Programação"
            group="LORI RONALDO FLORES MACHADO FILHO"
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
