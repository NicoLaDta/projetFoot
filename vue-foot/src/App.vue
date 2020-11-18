<template>
  <div id="app">
    <div class="container-global-nav">
    <img class="logo-club" :src="logo" >
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

    <div class= "footer">
        <div class="logos-sponsors">

          <div class="logo-sponsors-first">
            <a href="https://www.vice.com/fr/topic/red-star-fc">
                <img :src="logoVice" alt="logo-vice" />
            </a>
            <a href="https://www.adidas.fr">
                <img :src="logoAdidas" alt="logo-adidas" />
            </a>
            <a href="https://www.groupe-realites.com/fr/">
                <img :src="logoRealites" alt="logo-realites" />
            </a>            
            <a href="https://www.premiere-heure.fr">
                <img :src="logoPh" alt="logo-ph" />
            </a>
          </div>

          <div class="logo-sponsors-second">             
            <a href="https://www.iledefrance.fr">
                <img :src="logoIDF" alt="logo-idf" />
            </a>
            <a href="https://www.saint-ouen.fr">
                <img :src="logoSaintOuen" alt="logo-saintouen" />
            </a>
            <a href="https://www.ville-gennevilliers.fr/2/accueil.htm">
                <img :src="logoGennevilliers" alt="logo-gennevilliers" />
            </a>
            <a href="http://www.seine-saint-denis.fr">
                <img :src="logoSeineSaintDenis" alt="logo-seinesaintdenis" />
            </a>
          </div>  
        </div>

        <div class="RS">
            <p><italic>Suivez-nous !</italic></p>
                <div class="logos-RS">
                    <a href="https://www.facebook.com/RedStarFC.Officiel/">
                        <img :src="logoFacebook" alt="logo-facebook" />
                    </a>
                    <a href="https://www.instagram.com/redstarfc/">
                        <img :src="logoInstagram" alt="logo-instagram" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCtWK6vmeDs__9Z6xE_KNUxA">
                        <img :src="logoYoutube" alt="logo-youtube" />
                    </a>
                    <a href="https://twitter.com/redstarfc">
                        <img :src="logoTwitter" alt="logo-twitter" />
                    </a>
                </div>
            <p><strong>@redstarfootball</strong></p>
        </div>
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
    logo: require('@/assets/logo.png'),
    logoAdidas: require('@/assets/logos-sponsors/adidas.svg'),
    logoGennevilliers: require('@/assets/logos-sponsors/gennevilliers.svg'),
    logoIDF: require('@/assets/logos-sponsors/idf.svg'),
    logoPh: require('@/assets/logos-sponsors/ph.svg'),
    logoRealites: require('@/assets/logos-sponsors/realites.svg'),
    logoSeineSaintDenis: require('@/assets/logos-sponsors/saint-denis.svg'),
    logoSaintOuen: require('@/assets/logos-sponsors/saint-ouen.svg'),
    logoVice: require('@/assets/logos-sponsors/vice.svg'),
    logoFacebook: require('@/assets/logos-rs/facebook.svg'),
    logoInstagram: require('@/assets/logos-rs/instagram.svg'),
    logoYoutube: require('@/assets/logos-rs/youtube.svg')
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

  .footer{
    border: solid red 2px;
    display: flex;
    justify-content: space-around;
  }

  .footer img {
    width: 100px;
  }

  .logos-sponsors{
    flex-direction: column;
    display: flex;
  }

  .logos-sponsors-first, .logos-sponsors-second{
    width: 500px;
    display: flex;
    justify-content: space-between;
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
