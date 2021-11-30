import React from "react";

import {
  IonAvatar,
  IonButton,
  IonCheckbox,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonRadio,
  IonSearchbar,
  IonThumbnail,
  IonTitle,
  IonToggle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";

import "./Tab1.css";

import {
  archive,
  atOutline,
  ellipsisHorizontal,
  ellipsisVertical,
  heart,
  star,
  trash,
} from "ionicons/icons";
import { presentAlert } from "./alerta";


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>Videos App</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen color="light">
        <IonSearchbar placeholder="Pesquise o filme"></IonSearchbar>
        <IonList>
          <IonItemSliding>
            <IonItem lines="full">
              <IonThumbnail slot="start">
                <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h5UzYZquMwO9FVn15R2eK2itmHu.jpg" />
              </IonThumbnail>

              <IonLabel class="ion-text-wrap">
                <div>
                  <h1 id="titulo"> Venon-Tempo De Carnificina</h1>
                  <p id="descricao">01-10-2021(US)-1h:37mim </p>
                  <p id="genero">Ficção científica,Ação,Aventura </p>
                </div>
              </IonLabel>

              <IonChip color="success" outline>
                <IonLabel>86%</IonLabel>
              </IonChip>
            </IonItem>

            <IonItemOptions side="end">
              <IonItemOption onClick={presentAlert}>
                <IonIcon slot="start" icon={star} /> Favorito
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItem lines="full">
              <IonThumbnail slot="start">
                <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5dCIBGXnIuPdP1gmlElEDMTcIGT.jpg" />
              </IonThumbnail>

              <IonLabel class="ion-text-wrap">
                <div>
                  <h1 id="titulo"> 7 Prisioneiros</h1>
                  <p id="descricao">22-10-2021(GB)-1h:33mim </p>
                  <p id="genero">Drama,Crime </p>
                </div>
              </IonLabel>

              <IonChip color="success" outline>
                <IonLabel>76%</IonLabel>
              </IonChip>
            </IonItem>

            <IonItemOptions side="end">
              <IonItemOption onClick={presentAlert}>
                <IonIcon slot="start" icon={star} /> Favorito
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>
       

        
      </IonContent>
    </IonPage>
  );
};
export default Tab1;

