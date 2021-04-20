<template>
  <ion-header>
    <ion-toolbar class="os-relative">
      <ion-title>{{ title }}</ion-title>

      <ion-button @click="closeMe()" class="os-absolute myButton2" size="small">
          <ion-icon :icon="closeOutline"></ion-icon>
      </ion-button>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
      
    <form>
      <div class="mb-1">
        <label for="picture">Télécharger sa photo : </label>
        <input type="file" id="picture" name="picture" accept="image/png, image/jpeg" required>
      </div>
      <ion-button type="submit" class="myButton2" size="small">Valider</ion-button>
    </form>
  </ion-content>
</template>

<script>
import { IonHeader, IonToolbar, IonTitle, IonButton, IonIcon, IonContent, modalController } from '@ionic/vue';
import { closeOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModalPictures',
  props: {
    title: { type: String, default: 'Ajouter des photos' },
    close: { type: Function }
  },
  components: { IonHeader, IonToolbar, IonTitle, IonButton, IonIcon, IonContent },
  methods: {

      async  closeMe() {
        await modalController.dismiss();
      }

      // closeMe(){
      //     this.$emit('close', {
      //           foo: 'bar'
      //      })
      //     close()
      // }
  },
  setup(){
      return {
        closeOutline
      }
  }
});
</script>