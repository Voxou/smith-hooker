<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Authentification</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
        <form>
            <ion-grid>
              <ion-row color="primary" justify-content-center>
                  <ion-col align-self-center size-md="6" size-lg="5" size-xs="12">
                    <div text-center>
                        <h3>Créer un compte</h3>
                    </div>
                    <div padding>
                        <ion-item>
                          <ion-input  name="name" type="text" placeholder="Nom et Prénom" required></ion-input>
                        </ion-item>
                        <ion-item>
                          <ion-input name="email" type="email" placeholder="Adresse mail" required></ion-input>
                        </ion-item>
                        <ion-item>
                          <ion-input name="password" type="password" placeholder="Mot de passe" required></ion-input>
                        </ion-item>
                        <ion-item>
                          <ion-input name="confirm" type="password" placeholder="Vérification mot de passe" required></ion-input>
                        </ion-item>
                    </div>
                    <div padding>
                        <ion-button  size="large" type="submit" expand="block">S'enregistrer</ion-button>
                    </div>
                  </ion-col>
              </ion-row>
            </ion-grid>
        </form>
        <ion-item>
            <a href="/auth">J'ai déjà un compte, je me connecte</a>
        </ion-item>
    </ion-content>
  </ion-page>
</template>
<style type="text/css">

ion-item{
    background: hsl(239, 99%, 49%);
    color: rgb(0, 0, 0);
}

ion-button{
    background: hsl(239, 99%, 49%);
}
</style>
<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonGrid, IonItem, IonRow } from '@ionic/vue';

export default  {
  name: 'Register',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton, IonInput, IonGrid, IonItem, IonRow }
}
</script>       