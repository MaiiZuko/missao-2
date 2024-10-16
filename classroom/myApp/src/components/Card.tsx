// src/components/Card.tsx
import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon } from '@ionic/react';
import { eyeOutline, folderOpenOutline } from 'ionicons/icons'; // Ícones do Ionic
import './Card.css'; // Importa o CSS

interface CardProps {
  href: string;
  title: string;
  group: string;
}

const Card: React.FC<CardProps> = ({ href, title, group }) => {
  return (
    <IonCard className="custom-card" routerLink={href}> {/* Torna o cartão clicável */}
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>{group}</p>
      </IonCardContent>
      <div className="card-footer">
        <IonIcon icon={eyeOutline} className="icon" /> {/* Ícone do olho */}
        <IonIcon icon={folderOpenOutline} className="icon" /> {/* Ícone da pasta */}
      </div>
    </IonCard>
  );
};

export default Card;
