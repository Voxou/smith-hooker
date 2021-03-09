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
                                <h3>Se connecter</h3>
                            </div>
                            <div padding>
                                <ion-item>
                                    <ion-input name="email" placeholder="Adresse mail" type="email"></ion-input>
                                </ion-item>
                                <ion-item>
                                    <ion-input name="password" placeholder="Mot de passe" type="password"></ion-input>
                                </ion-item>
                            </div>
                            <div padding>
                                <ion-button  size="large" type="submit" expand="block">Connexion</ion-button>
                            </div>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </form>
            <ion-item>
                <a href="/register">Je n'ai pas de compte, j'en créé un</a>
            </ion-item>
            <!-- <ion-card>
                <ion-card-header>
                    <ion-card-title>Se connecter</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <ion-input placeholder="Votre e-mail" type="email"></ion-input>
                    <ion-input placeholder="Votre mot de passe" type="password"></ion-input>
                    <ion-button>Connexion</ion-button>
                    <a href="#">J'ai oublié mon mot de passe</a>
                    <a href="#">Je n'ai pas de compte, j'en créé un</a>
                </ion-card-content>
            </ion-card> -->
        </ion-content>
        
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonGrid, IonItem, IonRow } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonGrid, IonItem, IonRow }
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