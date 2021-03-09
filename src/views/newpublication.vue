<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Nouvelle publication</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Nouvelle publication</ion-title>
        </ion-toolbar>
      </ion-header>
      <p>
    </p>
    <ion-title>Titre</ion-title>
    <p>
    </p>
    <ion-card>
    <ion-card-header>
      <ion-card-title>Empty</ion-card-title>
    </ion-card-header>

    <ion-card-content>
    sic parvis magna
    </ion-card-content>
  </ion-card>
    <p>
    </p>
    <ion-title>Contenu</ion-title>
<ion-item>
    <ion-textarea placeholder="Enter more information here..."></ion-textarea>
  </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonItem, IonTextarea } from '@ionic/vue';



export default  {
  name: 'artisaninfo',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCard, IonItem, IonTextarea }
}
</script>