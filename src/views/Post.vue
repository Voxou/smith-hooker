<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Titre de post</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :scroll-events="true" ref="content">

      <img src="https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt=""/>
      <p class="Text">
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.<br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iusto inventore, soluta in dolorum totam eaque eligendi asperiores repellendus cupiditate aliquid, magnam omnis non hic sed dignissimos illo beatae laborum.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit consequuntur hic expedita cupiditate eos rerum! Debitis, non, fuga laudantium rerum pariatur, optio quasi deleniti sint excepturi corrupti est sit illo?<br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, doloremque ut rem nulla officia, minima non ad exercitationem iste ullam laborum consectetur repudiandae atque nisi consequuntur! Nisi eaque voluptates consectetur.
      </p>


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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon } from '@ionic/vue';
import { chevronUpOutline, closeCircleOutline } from 'ionicons/icons';
import { ref } from 'vue';

export default  {
  name: 'Post',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonFab, IonFabButton, IonIcon},
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