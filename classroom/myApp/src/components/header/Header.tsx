// src/components/Header.tsx
import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon } from '@ionic/react';
import { notificationsOutline, appsOutline, personOutline } from 'ionicons/icons'; // Importa ícones do Ionic

const Header: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar>
        {/* Botões no lado esquerdo */}
        <IonButtons slot="start">
          <IonButton>
            <IonIcon src="../imagens/icon2.png" />
          </IonButton>
        </IonButtons>
        
        <IonTitle>Google Sala de Aula</IonTitle>
        
        {/* Botões no lado direito */}
        <IonButtons slot="end">
          <IonButton>
            <IonIcon icon={notificationsOutline} />
          </IonButton>
          <IonButton>
            <IonIcon icon={appsOutline} />
          </IonButton>
          <IonButton>
            <IonIcon icon={personOutline} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
