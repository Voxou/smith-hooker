<template>
    <ion-page>
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-title>Authentifiez-vous</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <ion-input placeholder="Votre e-mail" type="email"></ion-input>
                    <ion-input placeholder="Votre mot de passe" type="password"></ion-input>
                    <ion-button>Connexion</ion-button>
                    <a href="#">J'ai oublié mon mot de passe</a>
                    <a href="#">Je n'ai pas de compte, j'en créé un</a>
                </ion-card-content>
            </ion-card>
        </ion-content>
        
    </ion-page>
</template>

<script>
import { IonInput, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: { IonInput, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent }
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