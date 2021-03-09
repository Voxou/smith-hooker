<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Mon commerce</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-text-cente" :fullscreen="true">


    <ion-col align-self-center="" size-md="6" size-lg="5" size-xs="12" class="md hydrated" style="flex: 0 0 calc(calc(12 / var(--ion-grid-columns, 12)) * 100%); width: calc(calc(12 / var(--ion-grid-columns, 12)) * 100%); max-width: calc(calc(12 / var(--ion-grid-columns, 12)) * 100%);">

     
     <h1 class="ion-margin" size="large">Informations</h1> 
  

         <ion-item class="item-interactive item-input item-has-placeholder item md ion-focusable hydrated">
            <ion-label position="stacked">Nom du commerce</ion-label>
            <ion-input class="sc-ion-input-md-h sc-ion-input-md-s md hydrated">
            <input class="native-input sc-ion-input-md" aria-labelledby="ion-input-0-lbl" autocapitalize="off" autocomplete="off" autocorrect="off" name="name" placeholder="Nom de mon commerce" required spellcheck="false" type="text" size="small"></ion-input>
         </ion-item>

        <ion-item>
            <ion-label class="type">Type de commerce</ion-label>
                <ion-select multiple="true" cancel-text="Cancel" ok-text="Okay!">
                <ion-select-option value="nouriture">Restaurant</ion-select-option>
                <ion-select-option value="boulangerie">Boulangerie</ion-select-option>
                <ion-select-option value="vetement">Boutique de vétement</ion-select-option>
                <ion-select-option value="bricolage">Magasin de bricolage</ion-select-option>
                <ion-select-option value="ephemere">Magasin éphémère</ion-select-option>
                <ion-select-option value="papeterie">Papeterie</ion-select-option>
                <ion-select-option value="epicerie">Epicerie</ion-select-option>
                <ion-select-option value="fleur">Fleuriste</ion-select-option>
                <ion-select-option value="agricole">Commerce de produits agricoles</ion-select-option>
                <ion-select-option value="viande">Boucherie</ion-select-option>
                <ion-select-option value="poisson">Poissonerie</ion-select-option>
                <ion-select-option value="autre">Autre</ion-select-option>                
            </ion-select>
        </ion-item>

       
        <ion-grid>
          <ion-row>
            <ion-col>
      <ion-item>
            <ion-label class="type">Jours d'ouverture</ion-label>
                <ion-select multiple="true" cancel-text="Cancel" ok-text="Okay!">
                <ion-select-option value="lundi">Lundi</ion-select-option>
                <ion-select-option value="mardi">Mardi</ion-select-option>
                <ion-select-option value="mercredi">Mercredi</ion-select-option>
                <ion-select-option value="jeud">Jeudi</ion-select-option>
                <ion-select-option value="vendredi">Vendredi</ion-select-option>
                <ion-select-option value="samedi">Samedi</ion-select-option>
                <ion-select-option value="dimanche">Dimanche</ion-select-option>
            </ion-select>
      </ion-item>
            </ion-col>
            <ion-col>
             <ion-item>
                <ion-label class="type">Heure d'ouverture</ion-label>
                <ion-datetime display-format="HH:mm"></ion-datetime>
              </ion-item>
      </ion-col>
       <ion-col>
             <ion-item>
                <ion-label class="type">Heure de fermeture</ion-label>
                <ion-datetime display-format="HH:mm"></ion-datetime>
              </ion-item>
      </ion-col>
    </ion-row>
</ion-grid>
        



        <ion-item class="item-interactive item-input item-has-placeholder item md ion-focusable hydrated">
            <ion-label position="stacked" >Localisation</ion-label>
            <ion-input class="sc-ion-input-md-h sc-ion-input-md-s md hydrated">
            <input class="native-input sc-ion-input-md" aria-labelledby="ion-input-1-lbl" autocapitalize="off" autocomplete="off" autocorrect="off" name="prenom" placeholder="Adresse du commerce" required spellcheck="false" type="text"></ion-input>
        </ion-item>

        

        <ion-item class="item-interactive item-input item-has-placeholder item md ion-focusable hydrated">
            <ion-label position="stacked" >Adresse Mail</ion-label>
            <ion-input class="sc-ion-input-md-h sc-ion-input-md-s md hydrated">
            <input class="native-input sc-ion-input-md" aria-labelledby="ion-input-3-lbl" autocapitalize="off" autocomplete="off" autocorrect="off" name="email" placeholder="Adresse Mail" required spellcheck="false" type="email"></ion-input>
        </ion-item>


        <ion-item class="item-interactive item-input item-has-placeholder item md ion-focusable hydrated">
            <ion-label position="stacked" >Mot de Passe</ion-label>
            <ion-input class="sc-ion-input-md-h sc-ion-input-md-s md hydrated">
            <input class="native-input sc-ion-input-md" aria-labelledby="ion-input-4-lbl" autocapitalize="off" autocomplete="off" autocorrect="off" name="password" placeholder="Mot de Passe" required spellcheck="false" type="password" aria-autocomplete="list"></ion-input>
        </ion-item>


        <ion-button href="/Photos" class="md button button-block button-large button-solid ion-activatable ion-focusable hydrated" expand="block" color="black" size="large">Mes photos</ion-button>


        <ion-button href="/Publications" class="md button button-block button-large button-solid ion-activatable ion-focusable hydrated" expand="block" color="black" size="large">Publications</ion-button>


        <ion-button class="md button button-block button-large button-solid ion-activatable ion-focusable hydrated" expand="block" size="large">
          <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">
          Enregistrer</font></font>
        </ion-button>


      </ion-col>

    </ion-content>    
  </ion-page>
</template>


<script lang="ts">
import {IonPage , IonHeader , IonToolbar , IonTitle , IonItem , IonLabel , IonInput , IonContent , IonCol, IonGrid , IonRow , } from '@ionic/vue';


export default {
    name : 'Mybusiness',
    components: {IonPage , IonHeader , IonToolbar , IonTitle , IonItem , IonLabel , IonInput , IonContent , IonCol , IonGrid, IonRow ,}
}

</script>

<style scoped> 

ion-label {
  font-size : 1.5em!important;
}

.type {
  font-size : 1.2em! important;
  }

h1 {
  text-align: center ;
  }



</style>