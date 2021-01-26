<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title style="font-size: 41px;">
          Artisan
          <!-- X fermer -->
          <ion-button style="float: right;">
            <ion-icon :icon="closeCircleOutline"></ion-icon>
          </ion-button>
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :scroll-events="true" ref="content">
      <ion-card>
        <ion-slides pager="true" :options="slideOpts">
          <ion-slide>
          <img src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=972&q=80" alt="" />
          </ion-slide>
          <ion-slide>
            <img src="" />
          </ion-slide>
          <ion-slide>
            <img src="" />
          </ion-slide>
        </ion-slides>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Informations </ion-card-title>
        </ion-card-header>
        <ion-card-content class="Text">
          <ion-card-title>Le bon pain - Boulangerie n°1</ion-card-title>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </ion-card-content>
      </ion-card>

      <ion-card>
        <img src=""/>
        <ion-card-header>
          <ion-card-title>Publication</ion-card-title>
        </ion-card-header>
        <ion-card-content class="Text">
          <ion-card-title>Le bon pain - Boulangerie n°1</ion-card-title>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </ion-card-content>
        <ion-button size="small" style="float: right;">Voir plus</ion-button>
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCardTitle, IonCardHeader, IonCardContent, IonCard, IonFab, IonFabButton, IonIcon, IonSlides, IonSlide } from '@ionic/vue';
import { chevronUpOutline, closeCircleOutline } from 'ionicons/icons';
import { ref } from 'vue';

export default  {
  name: 'Artisan',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCardTitle, IonCardHeader, IonCardContent, IonCard, IonFab, IonFabButton, IonIcon, IonSlides, IonSlide },
  setup() {
    const content = ref();
    const scroll = async () => {
      await  content.value.$el.scrollToTop()
      //debugger;
    };
    const slideOpts = {
      initialSlide: 0,
      speed: 300,
      autoplay:true
    };
    return{
      chevronUpOutline, 
      closeCircleOutline,
      scroll,
      content, 
      slideOpts
    }
  }
}
</script>