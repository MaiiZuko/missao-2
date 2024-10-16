// src/components/HeaderTabs.tsx
import React from 'react';
import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';

interface HeaderTabsProps {
  tabs: string[];
  onTabChange: (tab: string) => void; // Altere aqui para string
}

const HeaderTabs: React.FC<HeaderTabsProps> = ({ tabs, onTabChange }) => {
  const handleTabChange = (event: CustomEvent) => {
    onTabChange(event.detail.value); // Passa o valor da aba como string
  };

  return (
    <IonSegment onIonChange={handleTabChange} value={tabs[0]}>
      {tabs.map((tab) => (
        <IonSegmentButton key={tab} value={tab}>
          <IonLabel>{tab}</IonLabel>
        </IonSegmentButton>
      ))}
    </IonSegment>
  );
};

export default HeaderTabs;
