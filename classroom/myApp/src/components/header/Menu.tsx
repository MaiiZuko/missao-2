import React from 'react';
import { IonMenu, IonContent, IonList, IonItem, IonLabel } from '@ionic/react';
import { useHistory } from 'react-router-dom';

interface MenuProps {
  handleDrawerToggle?: (open: boolean) => void; // Torna opcional o handleDrawerToggle
}

const Menu: React.FC<MenuProps> = ({ handleDrawerToggle }) => {
  const history = useHistory();

  // Função para fechar o menu e navegar para a rota correspondente
  const handleMenuClose = (path?: string) => {
    if (handleDrawerToggle) {
      handleDrawerToggle(false); // Fecha o menu se o controle estiver presente
    }
    if (path) {
      history.push(path); // Navega para a rota ao clicar
    }
  };

  // Itens do menu
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
    <IonMenu contentId="main" onIonDidClose={() => handleDrawerToggle && handleDrawerToggle(false)}>
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
