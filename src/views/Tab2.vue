<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Nos Artisans</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :scroll-events="true" ref="content">
      
      <ion-card>
        <img src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=972&q=80" alt="" />
        <ion-card-header>
          <ion-card-title>Le bon pain - Boulangerie n°1</ion-card-title>
        </ion-card-header>
        <ion-card-content class="Text">
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </ion-card-content>
        <ion-button size="small" style="float: right;">Default</ion-button>
      </ion-card>

      <ion-card>
        <img src="https://www.tabacpresseleliberte.fr/images/tabac-presse-leliberte-3-castelnau-le-lez-34170.JPG" alt="" />
        <ion-card-header>
          <ion-card-title>Tabac Press Loto</ion-card-title>
        </ion-card-header>
        <ion-card-content class="Text">
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </ion-card-content>
        <ion-button size="small" style="float: right;">Default</ion-button>
      </ion-card>    

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button color="light" @click="scroll">
        <ion-icon :icon="chevronUpOutline"></ion-icon>
      </ion-fab-button>
    </ion-fab>

    <ion-footer class="Footer"></ion-footer>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCardTitle, IonCardHeader, IonCardContent, IonCard, IonFab, IonFabButton, IonIcon } from '@ionic/vue';
import { chevronUpOutline } from 'ionicons/icons';
import { ref } from 'vue';

export default  {
  name: 'Tab2',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCardTitle, IonCardHeader, IonCardContent, IonCard, IonFab, IonFabButton, IonIcon },
  setup() {
    const content = ref();
    const scroll = async () => {
      await  content.value.$el.scrollToTop()
      //debugger;
    };
    return{
      chevronUpOutline, 
      scroll,
      content
    }
  }
}
</script>

<style scoped>

ion-card{
  background-color:#f8c09c;
}

</style>