<template>
  <map
    :center.sync="center"
    :zoom.sync="zoom"
    @g-click="mapClick">
    <marker 
      v-for="m in markers"
      :position.sync="m.position"></marker>
  </map>
</template>

<script>
import {load, Map, Marker} from 'vue-google-maps'

load('YOUR_API_KEY','3.24')

export default {
  ready (){
    navigator.geolocation.getCurrentPosition(pos=>{
      this.center = {lat: pos.coords.latitude, lng: pos.coords.longitude};
      this.markers.push({
        position :{
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        }
      });
    });
  },
  watch : {
    canter (){ console.log(this.center)}
  },
  data () {
    return {
      center: {lat: 10.0, lng: 10.0},
      zoom : 15,
      markers: [{
        position: {lat: 10.0, lng: 10.0}
      }, {
        position: {lat: 11.0, lng: 11.0}
      }]
    }
  },
  methods : {
    mapClick (mouseArgs){
      this.markers.push({
        position :{
          lat: mouseArgs.latLng.lat(),
          lng: mouseArgs.latLng.lng()
        }
      });
    }
  },
  components : { Map, Marker }
}
</script>

<style>
map {
  width:100%;
  height: 600px;
  display: block;
}
</style>
