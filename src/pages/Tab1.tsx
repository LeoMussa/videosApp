import React from 'react';
import { IonAvatar, IonCheckbox, IonChip, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonRadio, IonSearchbar, IonThumbnail, IonTitle, IonToggle, IonToolbar } from '@ionic/react';

import './Tab1.css';
import { heart } from 'ionicons/icons';

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

    <IonItem lines="full">
      <IonThumbnail slot="start">
        <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h5UzYZquMwO9FVn15R2eK2itmHu.jpg"  />
      </IonThumbnail>
      
      <IonLabel class="ion-text-wrap">  
        <div>
          <h1 id="titulo"> Venon-Tempo De Carnificina</h1>
          <p id="descricao">01-10-2021(US)-1h:37mim </p>
          <p id="genero">Ficção científica,Ação,Aventura </p>
          <p id="ano">Ano:2021</p>
        </div>
      </IonLabel>
      
      <IonChip color="success" outline>
          <IonLabel>76%</IonLabel>
      </IonChip>

    </IonItem>

     

    
     
      
      </IonContent>
    </IonPage>
  );
}; 




export default Tab1;
