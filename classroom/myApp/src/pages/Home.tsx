import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/header/Header'; // Importa o componente Header
import Card from '../components/Card'; // Importa o componente Card

const Home: React.FC = () => {
  return (
    <IonPage>
      {/* Reutiliza o componente Header */}
      <Header />

      <IonContent>
        <div className="grid-container">
          {/* Cards de turmas */}
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
