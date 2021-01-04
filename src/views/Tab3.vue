<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Accueil</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content 
    :scroll-events="true"
    >
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-card>
        <img src="https://images.unsplash.com/photo-1565349173908-1cf6bc9fd4ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
        <ion-card-header>
          <ion-card-subtitle>Lieux incontournables</ion-card-subtitle>
          <ion-card-title>Découvrir la ville</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </ion-card-content>
      </ion-card>

      <ion-card>
        <img src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=972&q=80" alt="" />
        <ion-card-header>
          <ion-card-subtitle>Nos artisans</ion-card-subtitle>
          <ion-card-title>Le bon pain - Boulangerie n°1</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
          <ion-card-title>Card Title</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </ion-card-content>
      </ion-card>
     
     <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button color="light">
        <ion-icon :icon="chevronUpOutline"></ion-icon>
      </ion-fab-button>
    </ion-fab>
      

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent, IonCard, IonFab, IonFabButton, IonIcon } from '@ionic/vue';
import { chevronUpOutline } from 'ionicons/icons';

export default  {
  name: 'Tab2',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent, IonCard, IonFab, IonFabButton, IonIcon },
  setup() {
    return{
      chevronUpOutline
    }
  }
}
</script>