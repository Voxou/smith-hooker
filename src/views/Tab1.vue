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
        <Gmap></Gmap>
      <div id="map" style="height:100%;"></div>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">


import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
//import ExploreContainer from '@/components/ExploreContainer.vue'; 
//import { defineComponent } from 'vue';
import Gmap from '../components/Gmap.vue';


export default  {
  name: 'Tab1',
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, Gmap }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,500&display=swap%27');

</style>