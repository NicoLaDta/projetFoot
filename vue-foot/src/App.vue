<template>
  <div id="app">
  <div class="container-global-nav">
 <img class="logo-club" :src="image" >
    <div class="pt-roboto nav flex ">
      <nav class="mx-auto nav-desktop">
      <router-link class="padding-router color-focus" to="/">Home</router-link>
      <router-link class="padding-router color-focus" to="/">Actualités</router-link> 
      <router-link class="padding-router color-focus" to="/">Calendrier et résultats</router-link>
       <router-link class="padding-router color-focus" to="/">Classement</router-link>
      <router-link class="padding-router color-focus" to="/">Billeterie</router-link>
      <router-link class="padding-router color-focus" to="/">Boutique</router-link>
      </nav>
</div>
  <div>
  <div class="container-menu-mobile">
  <button class="button-menu-mobile">
    <span class="span1"></span>
    <span class="span2"></span>
    <span class="span3"></span>
  </button>
    </div>
  </div>
  </div>
  <div class="pt-roboto mx-auto nav-mobile nav">
      <nav class="mx-auto flex flex-col">
      <router-link class="padding-router color-focus" to="/">Home</router-link>
      <router-link class="padding-router color-focus" to="/">Actualités</router-link> 
      <router-link class="padding-router color-focus" to="/">Calendrier et résultats</router-link>
       <router-link class="padding-router color-focus" to="/">Classement</router-link>
      <router-link class="padding-router color-focus" to="/">Billeterie</router-link>
      <router-link class="padding-router color-focus" to="/">Boutique</router-link>
      </nav>
</div>
  </div>
</template>

<script>  

export default {
  name: 'App',
  components: {
   
  },
  data () {
  return {
    image: require('@/assets/logo.png')
  }
},
mounted(){
  const burgerMenu = document.querySelector(".container-menu-mobile");
  burgerMenu.addEventListener('click', () => {
      const span1 = document.querySelector(".span1");
      const span2 = document.querySelector(".span2");
      const span3 = document.querySelector(".span3");
      const show = document.querySelector(".nav-mobile");
     span1.classList.toggle('toogleBurgerSpan1');
     span2.classList.toggle('toogleBurgerSpan2');
     span3.classList.toggle('toogleBurgerSpan3');
     show.classList.toggle('toogleShow');
     }) 
},
methods: {

}

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 45px;
}
.pt-roboto{
  font-family: 'Roboto Condensed', sans-serif;
}

.nav{
font-size: 1.5rem;
}
.padding-router{
  padding-left:10px;
  padding-right:10px;
}
.nav-mobile{
  display: none;
  padding-bottom: 10px;
}
.color-focus:focus{
color:#991917;
font-weight: bold;
}
.container-menu-mobile {
  display: none;
}
.logo-club{
    margin: auto;
    margin-bottom: 45px;

  }
  .toogleBurgerSpan1{
    transform:rotate(-45deg);
    margin-left: 0px;
  }
  .toogleBurgerSpan2{
    transform:rotate(45deg);
    margin-right:27px;
    margin-top:-8px;
  }
  .toogleBurgerSpan3{
    display:none;
  }
  .toogleShow{
    display: block;
    
  }
@media screen and (max-width: 800px) {
  .logo-club{
    width: 60px;
    margin: 0;

  }
  .container-global-nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .container-menu-mobile {
  display: block;
}

.button-menu-mobile{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.button-menu-mobile span {
  width: 35px;
  height : 5px;
  margin: 3px;
  border-radius: 15px ;
  background-color : black;
  transition : ease 0.5s;
}
 .nav-desktop{
   display:none;
 }
}

</style>
