// src/components/HeaderTabs.tsx
import React from 'react';
import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';

interface HeaderTabsProps {
  tabs: string[];
  onTabChange: (tab: 'Atividades' | 'Alunos') => void;
}

const HeaderTabs: React.FC<HeaderTabsProps> = ({ tabs, onTabChange }) => {
  const handleTabChange = (event: CustomEvent) => {
    onTabChange(event.detail.value === 'Atividades' ? 'Atividades' : 'Alunos');
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
