<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Mes notifications</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true"  :scroll-events="true" ref="content">
      <ion-header collapse="condense">
      </ion-header>

        <ion-card class="simple">
          <ion-card-header>
            <ion-card-title>Info</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <ion-grid>
              <ion-row>
                <ion-col>
                  Notification
                </ion-col>
                <ion-col>
                  <ion-toggle></ion-toggle>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col>
                  Notification
                </ion-col>
                <ion-col>
                  <ion-toggle></ion-toggle>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col>
                  Notification
                </ion-col>
                <ion-col>
                  <ion-toggle></ion-toggle>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>

        <ion-card class="simple">
          <ion-card-header>
            <ion-card-title>Info</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <ion-grid>
              <ion-row>
                <ion-col>
                  Notification
                </ion-col>
                <ion-col>
                  <ion-toggle></ion-toggle>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col>
                  Notification
                </ion-col>
                <ion-col>
                  <ion-toggle></ion-toggle>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col>
                  Notification
                </ion-col>
                <ion-col>
                  <ion-toggle></ion-toggle>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>

        <ion-card class="simple">
          <ion-card-header>
            <ion-card-title>Info</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <ion-grid>
              <ion-row>
                <ion-col>
                  Notification
                </ion-col>
                <ion-col>
                  <ion-toggle></ion-toggle>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col>
                  Notification
                </ion-col>
                <ion-col>
                  <ion-toggle></ion-toggle>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col>
                  Notification
                </ion-col>
                <ion-col>
                  <ion-toggle></ion-toggle>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonToggle,IonFooter, IonFab, IonFabButton, IonIcon } from '@ionic/vue';
import { chevronUpOutline } from 'ionicons/icons';
import { ref } from 'vue';

export default  {
  name: 'Tab5',
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonToggle,IonFooter, IonFab, IonFabButton, IonIcon },
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