<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="os-relative">
        <ion-title>Mon compte</ion-title>
        <ion-icon @click="logout" class="os-absolute myButton2 medium" :icon="powerOutline"></ion-icon>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-text-center" :fullscreen="true">
      <div class="h-100 os-flex flex-column justify-content-around align-items-center">
          <form class="" style="height: 80%">
              <ion-grid class="h-100">
                  <ion-row class="h-100" color="primary" justify-content-center>
                      <ion-col class="h-100 os-flex flex-column justify-content-around" align-self-center>
                      <div padding class="os-flex flex-column justify-content-between align-items-center">
                        <ion-icon style="margin-bottom: 10%;" :icon="personOutline"></ion-icon>
                        <div class="mb-1 os-flex flex-column justify-content-center">
                            <ion-label>Nom et prénom</ion-label>
                            <ion-input name="name" placeholder="Jean Sérien" type="text" required></ion-input>
                        </div>
                        <div class="mb-1 os-flex flex-column justify-content-center">
                            <ion-label>Adresse Mail</ion-label>
                            <ion-input name="email" placeholder="jean.serien@gmail.com" type="email" required></ion-input>
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonLabel, IonInput, IonButton } from '@ionic/vue';
import { personOutline, powerOutline} from 'ionicons/icons';
import firebase from 'firebase';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'Tab4',
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonLabel, IonInput, IonButton },
  methods: {
    logout() {
      firebase.auth().signOut().then(()=>{
        alert('logged out');
        this.$router.push('/auth')
      }).catch(error=>{
        alert(error.message)
      })
    }
  },
  setup() {
    return {
      personOutline,
      powerOutline
    }
  }
})
</script>     

<style scoped> 

ion-label {
  font-size : 1.1em!important; 
  }

ion-icon {
  font-size : 5.5em;
  }

</style>