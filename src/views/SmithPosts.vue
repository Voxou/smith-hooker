<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Mes publications</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :scroll-events="true" ref="content">

        <div class="mb-1">
            <ion-button href="/smith/posts/newPost" size="large" type="button" expand="block">Nouvelle publication</ion-button>
        </div>

      <ion-card>
        <img src="https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt=""/>
        <ion-card-header>
          <ion-card-subtitle>Publication</ion-card-subtitle>
          <ion-card-title>Le bon pain - Elu Boulangerie n°1</ion-card-title>
        </ion-card-header>
        <ion-card-content class="Text">
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </ion-card-content>
        <ion-button href="/smith/posts/post" class="myButton" size="small" style="float: right;">Voir plus</ion-button>
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCardTitle, IonCardHeader, IonCardContent, IonCard, IonFab, IonFabButton, IonIcon } from '@ionic/vue';
import { chevronUpOutline, closeCircleOutline } from 'ionicons/icons';
import { ref } from 'vue';

export default  {
  name: 'SmithPosts',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCardTitle, IonCardHeader, IonCardContent, IonCard, IonFab, IonFabButton, IonIcon},
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