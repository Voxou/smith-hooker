<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Mon compte</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-text-center" :fullscreen="true">
      

      <ion-title class="ion-margin" size="large">Informations mon compte</ion-title>

      <ion-icon :icon="personOutline"></ion-icon>

      <ion-col align-self-center="" size-md="6" size-lg="5" size-xs="12" class="md hydrated" style="flex: 0 0 calc(calc(12 / var(--ion-grid-columns, 12)) * 100%); width: calc(calc(12 / var(--ion-grid-columns, 12)) * 100%); max-width: calc(calc(12 / var(--ion-grid-columns, 12)) * 100%);">
      
      <ion-item class="item-interactive item-input item-has-placeholder item md ion-focusable hydrated">
         <ion-label position="stacked">Nom</ion-label>
         <ion-input class="sc-ion-input-md-h sc-ion-input-md-s md hydrated">
         <input class="native-input sc-ion-input-md" aria-labelledby="ion-input-0-lbl" autocapitalize="off" autocomplete="off" autocorrect="off" name="name" placeholder="Nom" required spellcheck="false" type="text" size="small"></ion-input>
       </ion-item>

      <ion-item class="item-interactive item-input item-has-placeholder item md ion-focusable hydrated">
        <ion-label position="stacked" >Prénom</ion-label>
        <ion-input class="sc-ion-input-md-h sc-ion-input-md-s md hydrated">
        <input class="native-input sc-ion-input-md" aria-labelledby="ion-input-1-lbl" autocapitalize="off" autocomplete="off" autocorrect="off" name="prenom" placeholder="Prénom" required spellcheck="false" type="text"></ion-input>
      </ion-item>

      <ion-item class="item-interactive item-input item-has-placeholder item md ion-focusable hydrated">
        <ion-label position="stacked" >Adresse Mail</ion-label>
        <ion-input class="sc-ion-input-md-h sc-ion-input-md-s md hydrated">
        <input class="native-input sc-ion-input-md" aria-labelledby="ion-input-2-lbl" autocapitalize="off" autocomplete="off" autocorrect="off" name="email" placeholder="Adresse Mail" required spellcheck="false" type="email"></ion-input>
      </ion-item>

      <ion-item class="item-interactive item-input item-has-placeholder item md ion-focusable hydrated">
        <ion-label position="stacked" >Mot de Passe</ion-label>
        <ion-input class="sc-ion-input-md-h sc-ion-input-md-s md hydrated">
        <input class="native-input sc-ion-input-md" aria-labelledby="ion-input-3-lbl" autocapitalize="off" autocomplete="off" autocorrect="off" name="password" placeholder="Mot de Passe" required spellcheck="false" type="password" aria-autocomplete="list"></ion-input>
      </ion-item>

      <ion-button class="md button button-block button-large button-solid ion-activatable ion-focusable hydrated" expand="block" size="large"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">S'enregistrer</font></font></ion-button>
      </ion-col>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonCol, IonIcon,} from '@ionic/vue';
import { personOutline} from 'ionicons/icons';



export default  {
  name: 'Tab4',
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonItem,  IonLabel, IonInput, IonCol, IonIcon},
  setup() {
    return {
      personOutline

    }
  }
}
</script>     


<style scoped> 

ion-label {font-size : 1.5em!important; }
ion-icon {font-size : 5.5em;}




</style>