import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
//import ExploreContainer from '../components/ExploreContainer';
import "./Tab3.css";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sobre</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <img src="https://media-exp1.licdn.com/dms/image/C5603AQHXD9CUbewgDQ/profile-displayphoto-shrink_800_800/0/1625075990890?e=1643241600&v=beta&t=oNTbQm99tc_ncNi3J4sP_-h9Dx-lAccmfZCYucpfbiI" />
        <h1> Luis Mussa</h1>
        <p>Engenheiro de Software</p>
        <a href="mailito:leomussalm@gmail.com">E-mail </a>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
