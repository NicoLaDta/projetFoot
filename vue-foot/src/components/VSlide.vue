<template>
  <hooper class="hooper" :settings="hooperSettings">
    <slide> 
    <img class="image1" style="width:100%" :src="actual">
      <div class="title"><h1>Nom de l'actu</h1></div>
      
    </slide>
    <slide >
       <img class="image1" style="width:100%" :src="maillot">
       <div class="title"><h1>Nom de l'actu</h1></div>
    </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
  </hooper>
</template>
 
<script>
  import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
  import 'hooper/dist/hooper.css';
 
  export default {
    name: 'App',
    components: {
      Hooper,
      Slide,
      HooperNavigation,
    },
    data() {
    return {
      actual: require("@/assets/image/actual.png"),
      maillot: require("@/assets/image/maillot.jpg"),
      partenaires: require("@/assets/image/partenaires.jpg"),
      hooperSettings: {
        wheelControl:false,
        // autoPlay:true,
        // playSpeed:5000,
      },
      
    }
    }
  }
</script>


<style scoped>
.hooper{
    height: 711px;
}

 @media screen and (max-width: 800px) {
    .hooper{
    height: 60vh;
    border: solid red 2px;
}
.image1{
    height: 100%;
    width:100%
}

}

 .title{
    position: relative;
    color: white;
    bottom: 200px;
    background-color: #991917;
    width: 690px;
    height: 117px;
    font-size: 72px;
    opacity: 0.9;
    text-align: center;
} 
</style>