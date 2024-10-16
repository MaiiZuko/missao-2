import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon } from '@ionic/react';
import { menuOutline, addOutline, appsOutline, personOutline } from 'ionicons/icons'; // Ícones do Ionic
import { menuController } from '@ionic/core'; // Importa o controlador do menu do pacote @ionic/core
import image from '../../../public/icon.png'

const Header: React.FC = () => {

  const openMenu = async () => {
    await menuController.open(); // Abre o menu lateral quando o botão é clicado
  };

  return (
    <IonHeader>
      <IonToolbar>
        {/* Menu e logo no lado esquerdo */}
        <IonButtons slot="start">
          {/* Botão de menu (hambúrguer) */}
          <IonButton onClick={openMenu}> {/* Ação de abrir o menu */}
            <IonIcon icon={menuOutline} />
          </IonButton>

          {/* Logo customizada */}
          <IonButton>
            <img src={image}alt="Logo" style={{ width: '24px', height: '24px', marginRight: '1px' }} />
            <link rel="shortcut icon" type="image/png" href="/icon.png" />

          </IonButton>

          {/* Título */}
          <IonTitle style={{ fontSize: '18px', fontWeight: 'normal', display: 'flex', alignItems: 'left', marginLeft: '1px' }}>
            Google Classroom
          </IonTitle>
        </IonButtons>

        {/* Ícones no lado direito */}
        <IonButtons slot="end">
          {/* Ícone de adicionar (sinal de mais) */}
          <IonButton>
            <IonIcon icon={addOutline} />
          </IonButton>

          {/* Ícone de aplicativos */}
          <IonButton>
            <IonIcon icon={appsOutline} />
          </IonButton>

          {/* Avatar do usuário (imagem) */}
          <IonButton>
          <IonIcon icon={personOutline} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
