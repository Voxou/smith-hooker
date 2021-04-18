<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="os-relative">
        <ion-title>Accueil</ion-title>        
         <ion-img class="logo" :src="logo"></ion-img>
      </ion-toolbar>
    </ion-header>
    <ion-content :scroll-events="true" ref="content">
      
      <ion-card>
        <img src="https://images.unsplash.com/photo-1565349173908-1cf6bc9fd4ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
        <ion-card-header>
          <ion-card-subtitle>Lieux incontournables</ion-card-subtitle>
          <ion-card-title>Découvrir la ville</ion-card-title>
        </ion-card-header>
        <ion-card-content class="Text">
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </ion-card-content>
        <ion-button class="myButton" href="/artisan" size="small" style="float: right;">Voir plus</ion-button>
      </ion-card>

      <ion-card>
        <img src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=972&q=80" alt="" />
        <ion-card-header>
          <ion-card-subtitle>Nos artisans</ion-card-subtitle>
          <ion-card-title>Le bon pain - Boulangerie n°1</ion-card-title>
        </ion-card-header>
        <ion-card-content class="Text">
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </ion-card-content>
        <ion-button class="myButton" href="/artisan" size="small" style="float: right;">Voir plus</ion-button>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
          <ion-card-title>Card Title</ion-card-title>
        </ion-card-header>
        <ion-card-content class="Text">
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </ion-card-content>
        <ion-button class="myButton" href="/artisan" size="small" style="float: right;">Voir plus</ion-button>
      </ion-card>

       <ion-footer class="Footer"></ion-footer>
     
      <ion-fab vertical="bottom" horizontal="end" slot="fixed" @click="scroll">
        <ion-fab-button color="light">
          <ion-icon :icon="chevronUpOutline"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCardTitle, IonCardHeader, IonCardContent, IonCard, IonFab, IonFabButton, IonIcon, IonImg } from '@ionic/vue';
import { chevronUpOutline } from 'ionicons/icons';
import { ref, computed } from 'vue';

export default  {
  name: 'Tab3',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCardTitle, IonCardHeader, IonCardContent, IonCard, IonFab, IonFabButton, IonIcon, IonImg },
  setup() {
    const logo = computed(()=> require('../../public/assets/images/logo_en_noir.svg'))
    const content = ref();
    const scroll = async () => {
      await  content.value.$el.scrollToTop()
      //debugger;
    };
    return{
      logo,
      chevronUpOutline, 
      scroll,
      content
    }
  }
}
</script>

<style scoped> 
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

ion-card {
  font-family: 'Linux Libertine', sans-serif;
  background-color: #f8c09c;
}


ion-title {
  font-weight: 700;
  font-family: 'Roboto', sans-serif!important;
}

ion-button {
  background: #f8c09c;
}

</style>
