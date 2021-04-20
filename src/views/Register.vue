<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="os-relative">
        <ion-title>Créer un compte</ion-title>
          <ion-img class="logo" :src="logo"></ion-img>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="h-100 os-flex flex-column justify-content-around align-items-center">
        <form @submit.prevent="register" class="" style="height: 80%">
          <ion-grid class="h-100">
              <ion-row class="h-100" color="primary" justify-content-center>
                  <ion-col class="h-100 os-flex flex-column justify-content-around" align-self-center>
                      <div padding class="os-flex flex-column justify-content-between">
                          <div class="mb-1 os-flex flex-column justify-content-center">
                              <ion-label>Nom et prénom</ion-label>
                              <ion-input name="name" placeholder="Jean Sérien" type="text" required></ion-input>
                          </div>

                          <div class="mb-1 os-flex flex-column justify-content-center">
                              <ion-label>Adresse Mail</ion-label>
                              <ion-input v-model="email" name="email" placeholder="jean.serien@gmail.com" type="email" required></ion-input>
                          </div>

                          <div class="mb-1 os-flex flex-column justify-content-center">
                              <ion-label>Mot de passe</ion-label>
                              <ion-input v-model="password" name="password" placeholder="monsupermotdepasse" type="password" required></ion-input>
                          </div>

                          <div class="mb-1 os-flex flex-column justify-content-center">
                              <ion-label>Confirmation du mot de passe</ion-label>
                              <ion-input v-model="confirm" name="confirm" placeholder="monsupermotdepasse" type="password" required></ion-input>
                          </div>
                      </div>
                      <div padding>
                          <ion-button  size="large" type="submit" expand="block">S'enregistrer</ion-button>
                          <a href="/auth">J'ai déjà un compte, je me connecte</a>
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonGrid, IonRow } from '@ionic/vue';
import { computed, defineComponent } from 'vue';
import firebase from 'firebase';

export default defineComponent ({
  name: 'Register',
  data(){
    return {
      email: '',
      password: '',
      confirm: ''
    };
  },
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton, IonInput, IonGrid, IonRow },
  methods: {
    register() {
      if(this.password == this.confirm) {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(()=> {
          alert('registered, got to log in');
          this.$router.push('/auth');
        }).catch(error=>{
          alert(error.message);
        })
      }
    }
  },
  setup() {
    const logo = computed(()=> require('../../public/assets/images/logo_en_noir.svg'));
    return{
      logo
    }
  }
})
</script>       
