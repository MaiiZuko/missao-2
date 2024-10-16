// src/components/MenuTurmas.tsx
import React from 'react';
import { IonList, IonItem, IonLabel } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const MenuTurmas: React.FC = () => {
  const history = useHistory();

  const navigateTo = (path: string) => {
    history.push(path);
  };

  return (
    <IonList>
      <IonItem button onClick={() => navigateTo('/turma/estrutura-de-software')}>
        <IonLabel>Estrutura de Software</IonLabel>
      </IonItem>
      <IonItem button onClick={() => navigateTo('/turma/programacao')}>
        <IonLabel>Programação</IonLabel>
      </IonItem>
    </IonList>
  );
};

export default MenuTurmas;
