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
      <ExploreContainer name="Carte page" />
    </ion-content>
  </ion-page>
</template>

<!-- <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBJ-_sW8y-yaYKFfnjzOuo8y6GNkj23iEM&callback=initMap"
 type="text/javascript"></script>
<script lang="ts">
let map: google.maps.Map;

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: {lat:48.8534, lng:2.3488},
    zoom:8,
  });
  addMarker(48.8534,2.3488);
  addMarker(48.8,2.1333);
  addMarker(49.2667,-0.7);

  function addMarker(latTest,lngTest){
    const marker = new google.maps.Marker({
      // The below line is equivalent to writing:
      // position: new google.maps.LatLng(-34.397, 150.644)
      position:{lat:latTest, lng:lngTest},
      map: map,
    });

  }
}-->
<script lang="ts">


import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { defineComponent } from 'vue';
import GMap from "./Gmap.vue";


export default  {
  name: 'Tab1',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, GMap }
}
</script>