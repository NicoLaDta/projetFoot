<template>
  <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
         <!-- <div class="title"><h1>Nouveaux maillots</h1></div> -->
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">&#10095; Next</a>
  </div>
</template>

<script>
  export default {
    name: 'App',   
  data() {
    return {
      images: [
       require("@/assets/image/actual.png"),
       require("@/assets/image/maillot.jpg"),
      ],
      timer: null,
      currentIndex: 0
    };
  },
mounted: function() {
    this.startSlide();
  },

  methods: {
    // startSlide: function() {
    //   this.timer = setInterval(this.next, 4000);
    // },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
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
    width:100%;
    display: block;
    object-fit: cover;
}
.title{
    position: absolute;
    color: white;
    bottom: -120px;
    background-color:#991917;
    width: 690px;
    height: 117px;
    font-size: 72px;
    opacity: 0.9;
    text-align: center;
} 

 @media screen and (max-width: 950px) {
    .hooper{
    height: 60vh;
    /* border: solid red 2px; */
}

.title{
   width: 400px;
   height: 80px;
   font-size: 36px;
   bottom: 150px;
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

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
  height:700px;
  width:100%;
  display: block;
    object-fit: cover;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
 
</style>