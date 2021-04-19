<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Mes notifications</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
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
    
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonCard, IonCardContent, IonCardTitle, IonCol, IonGrid, IonRow } from '@ionic/vue';
import { chevronUpOutline } from 'ionicons/icons';

export default  {
  name: 'Tab5',
  components: { IonHeader, IonToolbar, IonTitle, IonPage, IonCard, IonCardContent, IonCardTitle, IonCol, IonGrid, IonRow },
  setup() {
    return{
      chevronUpOutline, 
      scroll
    }
  }
}
</script>