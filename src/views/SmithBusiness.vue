<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Mon commerce</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-text-cente" :fullscreen="true">

      <div class="os-flex flex-column justify-content-around align-items-center">
        <form class="" style="height: 80%">
            <ion-grid class="h-100">
                <ion-row class="h-100" color="primary" justify-content-center>
                    <ion-col class="h-100 os-flex flex-column justify-content-around" align-self-center>
                        <div padding  class="os-flex flex-column justify-content-between">

                            <div class="mb-1 os-flex flex-column justify-content-center">
                                <ion-label>Nom du commerce</ion-label>
                                <ion-input name="name" placeholder="Mon commerce" type="text" required></ion-input>
                            </div>

                            <div class="mb-1 os-flex flex-column justify-content-center">
                                <ion-label>Localisation</ion-label>
                                <ion-input name="address" placeholder="3 rue Charles de Gaulle, Aix-en-Provence" type="text" required></ion-input>
                            </div>

                            <div class="mb-1 os-flex flex-column justify-content-center">
                                <ion-label>Adresse email</ion-label>
                                <ion-input name="email" placeholder="mon.commerce@exemple.fr" type="email" required></ion-input>
                            </div>

                            <div class="mb-1 os-flex flex-column justify-content-center">
                              <ion-label>Type de commerce</ion-label>
                              <ion-select required aria-required="true" multiple="true" cancel-text="Annuler" ok-text="OK">
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
                            </div>

                            <div class="mb-1 os-flex flex-column justify-content-center">
                              <ion-label>Jours d'ouverture</ion-label>
                              <ion-select required aria-required="true" multiple="true" cancel-text="Cancel" ok-text="Okay!">
                                <ion-select-option value="lundi">Lundi</ion-select-option>
                                <ion-select-option value="mardi">Mardi</ion-select-option>
                                <ion-select-option value="mercredi">Mercredi</ion-select-option>
                                <ion-select-option value="jeud">Jeudi</ion-select-option>
                                <ion-select-option value="vendredi">Vendredi</ion-select-option>
                                <ion-select-option value="samedi">Samedi</ion-select-option>
                                <ion-select-option value="dimanche">Dimanche</ion-select-option>
                              </ion-select>
                            </div>

                            <div class="mb-1 os-flex flex-column justify-content-center">
                                <ion-label>Heure d'ouverture</ion-label>
                                <ion-datetime display-format="HH:mm" aria-required="true" required></ion-datetime>
                            </div>

                            <div class="mb-1 os-flex flex-column justify-content-center">
                                <ion-label>Heure de fermeture</ion-label>
                                <ion-datetime display-format="HH:mm" aria-required="true" required></ion-datetime>
                            </div>

                        </div>
                        <div padding>
                            <ion-button href="/smith/business/pictures" size="large" type="button" expand="block">Photos</ion-button>
                            <ion-button href="/smith/posts" class="mb-1" size="large" type="button" expand="block">Publications</ion-button>
                            <ion-button size="large" type="submit" expand="block">Enregistrer</ion-button>
                        </div>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </form>
    </div>

    </ion-content>    
  </ion-page>
</template>


<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonLabel, IonInput, IonSelect, IonSelectOption, IonDatetime, IonButton } from '@ionic/vue';


export default {
    name : 'SmithBusiness',
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonLabel, IonInput, IonSelect, IonSelectOption, IonDatetime, IonButton }
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