<template>
    <div class="map" ref="mapDivRef">

    </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'

export default {
    setup () {
        //Google map object
        const map = ref(null);
        //Map element
        const mapDivRef = ref(null);

        //load in the google script
        onBeforeMount(()=>{
            //key is the .env file or a string
            const key = "AIzaSyBJ-_sW8y-yaYKFfnjzOuo8y6GNkj23iEM"

            //create the script element to load
            const googleMapScript = document.createElement("SCRIPT");
            googleMapScript.setAttribute(
                "src",
                'https://maps.googleapis.com/maps/api/js?key=AIzaSyBJ-_sW8y-yaYKFfnjzOuo8y6GNkj23iEM&callback=initMap'
            );
            googleMapScript.setAttribute("defer", "");
            googleMapScript.setAttribute("async", "");
            document.head.appendChild(googleMapScript);
        });


        window.initMap = () => {
            map.value = new window.google.maps.Map(mapDivRef.value, {
                mapTypeId : "hybrid",
                zoom: 8,
                disableDefaultUi: false,
                center : { lat:38.0, lng:-77 }
            });

        };

        return {
            mapDivRef
        };
    }
};
</script>

<style lang="css">
.map {
    width: 100%;
    height: 300px;
}
</style>