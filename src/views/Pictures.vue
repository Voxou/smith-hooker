<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Photos</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-text-cente" :fullscreen="true">

        

        <h1 class="ion-margin" size="large">Photos</h1>



        <ion-item class="telecharger">
            <label for="avatar">Télécharger sa photo:  </label>
                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg">
        </ion-item>


       
        <ion-grid>
            <ion-row>


            <ion-col>
                <ion-item>
                    <img src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=972&q=80" alt="" />
                </ion-item>
            </ion-col>


            <ion-col>
                <ion-item>
                    <img src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=972&q=80" alt="" />
              </ion-item>
            </ion-col>


            <ion-col>
                <ion-item>
                    <img src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=972&q=80" alt="" />
                </ion-item>
            </ion-col>


            </ion-row>
        </ion-grid>


        <ion-grid>
            <ion-row>


            <ion-col>
                <ion-item>
                    <img src="https://images.unsplash.com/photo-1565349173908-1cf6bc9fd4ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
                </ion-item>
            </ion-col>


            <ion-col>
                <ion-item>
                    <img src="https://images.unsplash.com/photo-1565349173908-1cf6bc9fd4ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
              </ion-item>
            </ion-col>


            <ion-col>
                <ion-item>
                    <img src="https://images.unsplash.com/photo-1565349173908-1cf6bc9fd4ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
                </ion-item>
            </ion-col>


            </ion-row>
        </ion-grid>
        

    </ion-content>    
  </ion-page>
</template>



<script lang="ts">
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonRow,  } from '@ionic/vue';




export default {
    name : 'Pictures',
    components: {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonRow,  }
}

</script>



<style scoped> 

img {
    width: 400px;
}

.telecharger {
    margin-bottom: 40px;
}



</style>