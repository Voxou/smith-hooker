<template>
    <ion-page>
        <ion-header>
        <ion-toolbar>
            <ion-title>Connexion</ion-title>
        </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <div class="h-100 os-flex flex-column justify-content-around align-items-center">
                <form class="" style="height: 80%">
                    <ion-grid class="h-100">
                        <ion-row class="h-100" color="primary" justify-content-center>
                            <ion-col class="h-100 os-flex flex-column justify-content-around" align-self-center size-md="6" size-lg="5" size-xs="12">
                                <div padding  class="os-flex flex-column justify-content-between">
                                    <div class="mb-1 os-flex flex-column justify-content-center">
                                        <ion-label>Login</ion-label>
                                        <ion-input name="email" placeholder="Adresse mail" type="email"></ion-input>
                                    </div>

                                    <div class="mb-1 os-flex flex-column justify-content-center">
                                        <ion-label>Mot de passe</ion-label>
                                        <ion-input name="password" placeholder="Mot de passe" type="password"></ion-input>
                                    </div>
                                </div>
                                <div padding>
                                    <ion-button  size="large" type="submit" expand="block">Connexion</ion-button>
                                    <a href="/register">Je n'ai pas de compte, j'en créé un</a>
                                </div>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </form>
            </div>
        </ion-content>
        
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonGrid, IonRow, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonGrid, IonRow, IonLabel }
});
</script>

<style scoped>
    ion-button {
        text-transform: none;
    }
    ion-card-content {
        display: flex;
        flex-direction: column;
    }
</style>