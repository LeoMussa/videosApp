import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';

import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>Videos App</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent fullscreen color="light">
        <IonSearchbar placeholder="Pesquise o filme">

        </IonSearchbar>

      
     
      
      </IonContent>
    </IonPage>
  );
}; 

export default Tab1;
