<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Carte</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Carte</ion-title>
        </ion-toolbar>
      </ion-header>
        <g-map></g-map>
      <div id="map" style="height:100%;"></div>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">


import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
//import ExploreContainer from '@/components/ExploreContainer.vue'; 
import { defineComponent } from 'vue';
import GMap from "./Gmap.vue";


export default  {
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, GMap }
}
</script>