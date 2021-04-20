<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Nouvelle publication</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="h-100 os-flex flex-column justify-content-around align-items-center">
        <form class="w-100" style="height: 80%">
            <ion-grid class="h-100">
                <ion-row class="h-100" color="primary" justify-content-center>
                    <ion-col class="h-100 os-flex flex-column justify-content-around" align-self-center size-md="6" size-lg="5" size-xs="12">
                        <div padding  class="os-flex h-100 flex-column justify-content-between">
                            <div class="mb-1 os-flex flex-column justify-content-center">
                                <ion-label for="title">Titre</ion-label>
                                <ion-input name="title" placeholder="Mon super titre" type="text" required></ion-input>
                            </div>

                            <div class="mb-1 os-flex flex-grow flex-column justify-content-center">
                                <ion-label for="content">Contenu</ion-label>
                                <ion-textarea name="content" placeholder="Ecrire ici..." type="text"  rows="9" required></ion-textarea>
                            </div>
                        </div>
                        <div padding>
                            <ion-button  size="large" type="submit" expand="block">Enregistrer</ion-button>
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonLabel, IonInput, IonTextarea, IonButton } from '@ionic/vue';



export default  {
  name: 'NewPost',
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonLabel, IonInput, IonTextarea, IonButton }
}
</script>