<template>
    <ion-page>
        <ion-header>
        <ion-toolbar class="os-relative">
            <ion-title>Connexion</ion-title>
            <ion-img class="logo" :src="logo"></ion-img>
        </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <div class="h-100 os-flex flex-column justify-content-around align-items-center">
                <form @submit.prevent="login" class="" style="height: 80%">
                    <div padding  class="os-flex flex-column justify-content-between">
                        <div class="mb-1 os-flex flex-column justify-content-center">
                                <ion-label>Login</ion-label>
                                <ion-input v-model="email" name="email" placeholder="Adresse mail" type="email" required></ion-input>
                        </div>

                        <div class="mb-1 os-flex flex-column justify-content-center">
                                <ion-label>Mot de passe</ion-label>
                                <ion-input v_model="password" name="password" placeholder="Mot de passe" type="password" required></ion-input>
                        </div>
                    </div>
                    <div padding>
                        <ion-button  size="large" type="submit" expand="block">Connexion</ion-button>
                        <a href="/register">Je n'ai pas de compte, j'en créé un</a>
                    </div>
                </form>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonImg, IonContent, IonLabel, IonInput, IonButton } from '@ionic/vue';
import { defineComponent, computed } from 'vue';
import firebase from 'firebase'

export default defineComponent({
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonImg, IonContent, IonLabel, IonInput, IonButton },
    methods: {
        login() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(()=>{
                alert('logged in');
                this.$router.push('/tabs/tab3');
            }).catch(error => {
                alert(error.message);
            })
        }
    },
    setup() {
    const logo = computed(()=> require('../../public/assets/images/logo_en_noir.svg'));
    return{
      logo
    }
  }
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