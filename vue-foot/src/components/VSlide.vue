<template>

  <hooper class="hooper cont" :settings="hooperSettings">
    <slide> 
    <img class="imageSlide" :src="actual">
      <div class="title"><h1>Nom de l'actu</h1></div>
      
    </slide>
    <slide >        
       <img class="imageSlide" :src="maillot">
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
        //  autoPlay:true,
        //  playSpeed:5000,
      }
    }
    },
    mounted(){
      var sheet = document.createElement('style')
      sheet.innerHTML = ".icon-arrowRight{background-color: #991917} .icon-arrowLeft{background-color: #991917}";
     document.body.appendChild(sheet);
    }
  }
</script>


<style lang="postcss" scoped>
.hooper{
    height: 711px;
}
.icon-arrowRight >.right{
  background-color: red;
}
.imageSlide{
    height: 100%;
    width:100%
}
.title{
    position: relative;
    color: white;
    bottom: 200px;
    background-color:#991917;
    width: 690px;
    height: 117px;
    font-size: 72px;
    opacity: 0.9;
    text-align: center;
} 

 @media screen and (max-width: 800px) {
    .hooper{
    height: 60vh;
    border: solid red 2px;
}
.imageSlide{
    height: 100%;
    width:100%
}

.title{
   width: 400px;
   height: 80px;
   font-size: 36px;
   bottom: 150px;
}
.cont{
  z-index: 1;
}
}
@media screen and (max-width: 500px) {
.title{
   width: 283px;
   height: 78px;
   font-size: 36px;
   bottom: 150px;
}

}
 
</style>