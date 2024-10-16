import React from 'react';
import { IonMenu, IonContent, IonList, IonItem, IonLabel } from '@ionic/react';
import { useHistory } from 'react-router-dom';

interface MenuProps {
  drawerOpen: boolean;
  handleDrawerToggle: (open: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({ drawerOpen, handleDrawerToggle }) => {
  const history = useHistory();

  const handleMenuClose = (path?: string) => {
    handleDrawerToggle(false);
    if (path) {
      history.push(path);
    }
  };

  const menuItems = [
    { text: 'Início', path: '/' },
    { text: 'Agenda', path: '/agenda' },
    { text: 'Minhas Inscrições', path: '/inscricoes' },
    { text: 'Pendentes', path: '/pendentes' },
    { text: 'Estrutura de Software', path: '/turma/estrutura-de-software' },
    { text: 'IJ - Programação', path: '/turma/programacao' },
    { text: 'Turmas arquivadas', path: '/turmas-arquivadas' },
    { text: 'Configurações', path: '/configuracoes' },
  ];

  return (
    <IonMenu contentId="main" onIonDidClose={() => handleDrawerToggle(false)}>
      <IonContent>
        <IonList>
          {menuItems.map((item, index) => (
            <IonItem key={index} button onClick={() => handleMenuClose(item.path)}>
              <IonLabel>{item.text}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
