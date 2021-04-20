<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Photos</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" :fullscreen="true">
        <ion-button @click="setOpen(true)" class="myButton2" size="small">+ajouter des photos</ion-button>
        <ion-modal
            :is-open="isOpenRef"
            css-class="my-custom-class"
            @onDidDismiss="setOpen(false)"
        >
            <ModalPictures :data="data"></ModalPictures>
        </ion-modal>
       
        <ion-grid>
            <ion-row>
            <ion-col>
                    <img src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=972&q=80" alt="" />
            </ion-col>

            <ion-col>
                    <img src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=972&q=80" alt="" />
            </ion-col>

            <ion-col>
                    <img src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=972&q=80" alt="" />
            </ion-col>

            </ion-row>
        </ion-grid>

        <ion-grid>
            <ion-row>
            <ion-col>
                    <img src="https://images.unsplash.com/photo-1565349173908-1cf6bc9fd4ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
            </ion-col>

            <ion-col>
                    <img src="https://images.unsplash.com/photo-1565349173908-1cf6bc9fd4ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
            </ion-col>

            <ion-col>
                    <img src="https://images.unsplash.com/photo-1565349173908-1cf6bc9fd4ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
            </ion-col>

            </ion-row>
        </ion-grid>
    </ion-content>    
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonModal, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { ref } from 'vue';
import ModalPictures from '../components/ModalPictures.vue';

export default {
    name : 'Pictures',
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonModal, ModalPictures, IonGrid, IonRow, IonCol },
    setup() {
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => isOpenRef.value = state;
    const data = { content: 'New Content' };
    return { isOpenRef, setOpen, data }
  }
}
</script>

<style scoped> 
img {
    width: 400px;
}

.telecharger {
    margin-bottom: 40px;
}
</style>