<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="mapOutline" />
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="peopleCircleOutline" />
        </ion-tab-button>
        
        <ion-tab-button tab="tab3"></ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/tab4">
          <ion-icon :icon="personOutline" />
        </ion-tab-button>

        <ion-tab-button tab="tab5" href="/tabs/tab5">
          <ion-icon :icon="settingsOutline" />
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>

        <ion-fab vertical="bottom" horizontal="center" slot="fixed">
          <ion-fab-button href="/tabs/tab3">
              <ion-icon :icon="homeOutline" />
          </ion-fab-button>
        </ion-fab>
    
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonFab, IonFabButton } from '@ionic/vue';
import { homeOutline, personOutline, mapOutline, settingsOutline, peopleCircleOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonFab, IonFabButton },
  setup() {
    return {
      homeOutline,
      personOutline,
      mapOutline,
      settingsOutline,
      peopleCircleOutline
    }
  }
}
</script>