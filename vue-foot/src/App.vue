<template>
  <div class="vue-container">
    <!--        -->
    <!-- HEADER -->
    <!--        -->
    <div class="container-global-nav">
      <img class="logo-club" :src="logo" />
      <div class="pt-roboto nav flex">
        <nav class="mx-auto nav-desktop">
          <router-link class="padding-router color-focus" to="/"
            >Home</router-link
          >
          <router-link class="padding-router color-focus" to="/"
            >Actualités</router-link
          >
          <router-link class="padding-router color-focus" to="/"
            >Calendrier et résultats</router-link
          >
          <router-link class="padding-router color-focus" to="/"
            >Classement</router-link
          >
          <router-link class="padding-router color-focus" to="/"
            >Billeterie</router-link
          >
          <router-link class="padding-router color-focus" to="/"
            >Boutique</router-link
          >
        </nav>
      </div>
      <div>

        <button ref="button" class="ml-auto menu-btn" :class="{ 'menu-btn--open': isMenuOpen }" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>

        <span class="sr-only">Menu</span>
      </button>
      </div>
       <v-menu-mobile v-if="isMenuOpen"></v-menu-mobile>
    </div>
    
    <!--        -->
    <!-- ID APP -->
    <!--        -->
    <div id="app"></div>
    <v-slide></v-slide>
    <!--        -->
    <!-- FOOTER -->
    <!--        -->

    <div class="footer">
      <div class="logos-sponsors">
        <a href="https://www.vice.com/fr/topic/red-star-fc" target="_blank">
          <img :src="logoVice" alt="logo-vice" />
        </a>
        <a href="https://www.adidas.fr" target="_blank">
          <img :src="logoAdidas" alt="logo-adidas" />
        </a>
        <a href="https://www.groupe-realites.com/fr/" target="_blank">
          <img :src="logoRealites" alt="logo-realites" />
        </a>
        <a href="https://www.premiere-heure.fr" target="_blank">
          <img :src="logoPh" alt="logo-ph" />
        </a>
        <a href="https://www.iledefrance.fr" target="_blank">
          <img :src="logoIDF" alt="logo-idf" />
        </a>
        <a href="https://www.saint-ouen.fr" target="_blank">
          <img :src="logoSaintOuen" alt="logo-saintouen" />
        </a>
        <a
          href="https://www.ville-gennevilliers.fr/2/accueil.htm"
          target="_blank"
        >
          <img :src="logoGennevilliers" alt="logo-gennevilliers" />
        </a>
        <a href="http://www.seine-saint-denis.fr" target="_blank">
          <img :src="logoSeineSaintDenis" alt="logo-seinesaintdenis" />
        </a>
      </div>

      <div class="container-rs">
        <p class="pt-roboto">Suivez-nous !</p>
        <div class="logos-RS my-5">
          <a
            href="https://www.facebook.com/RedStarFC.Officiel/"
            target="_blank"
          >
            <img :src="logoFacebook" alt="logo-facebook" />
          </a>
          <a href="https://www.instagram.com/redstarfc/" target="_blank">
            <img :src="logoInstagram" alt="logo-instagram" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCtWK6vmeDs__9Z6xE_KNUxA"
            target="_blank"
          >
            <img :src="logoYoutube" alt="logo-youtube" />
          </a>
          <a href="https://twitter.com/redstarfc" target="_blank">
            <img :src="logoTwitter" alt="logo-twitter" />
          </a>
        </div>
        <p class="pt-roboto">@redstarfootball</p>
      </div>
    </div>
  </div>
</template>

<script>
import VMenuMobile from '@/components/VMenuMobile'
import VSlide from '@/components/VSlide'
export default {
  name: "App",
  components: {
    VMenuMobile,
    VSlide
  },
  data() {
    return {
      logo: require("@/assets/logo.png"),
      logoAdidas: require("@/assets/logos-sponsors/adidas.svg"),
      logoGennevilliers: require("@/assets/logos-sponsors/gennevilliers.svg"),
      logoIDF: require("@/assets/logos-sponsors/idf.svg"),
      logoPh: require("@/assets/logos-sponsors/ph.svg"),
      logoRealites: require("@/assets/logos-sponsors/realites.svg"),
      logoSeineSaintDenis: require("@/assets/logos-sponsors/saint-denis.svg"),
      logoSaintOuen: require("@/assets/logos-sponsors/saint-ouen.svg"),
      logoVice: require("@/assets/logos-sponsors/vice.svg"),
      logoFacebook: require("@/assets/logos-rs/facebook.svg"),
      logoInstagram: require("@/assets/logos-rs/instagram.svg"),
      logoYoutube: require("@/assets/logos-rs/youtube.svg"),
      logoTwitter: require("@/assets/logos-rs/twitter.svg"),
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      console.log('menu')
      this.isMenuOpen = !this.isMenuOpen
    }
  },
  watch:{
    $route (){
      this.isMenuOpen = false
    }
  },
};
</script>

<style lang="postcss" >

#app {
 flex-grow:1;
 min-height: 40vh;
}

.vue-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.container-global-nav {
  margin-top: 45px;
  margin-bottom: 35px;
}
.pt-roboto {
  font-family: "Roboto Condensed", sans-serif;
}

.nav {
  font-size: 1.5rem;
}
.padding-router {
  padding-left: 10px;
  padding-right: 10px;
}
.nav-mobile {
  display: none;
  padding-bottom: 10px;
}
.color-focus:focus {
  color: #991917;
  font-weight: bold;
}
.container-menu-mobile {
  display: none;
}
.logo-club {
  margin: auto;
  margin-bottom: 45px;
}
.toogleBurgerSpan1 {
  transform: rotate(-45deg);
  margin-left: 0px;
}
.toogleBurgerSpan2 {
  transform: rotate(45deg);
  margin-right: 27px;
  margin-top: -8px;
}
.toogleBurgerSpan3 {
  display: none;
}
.toogleShow {
  display: block;
}

.footer {
  display: flex;
  justify-content: space-around;
  background-color: rgba(12, 68, 55, 0.5);
  width: 100%;
}

.logos-sponsors {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 450px;
}
.logos-sponsors img {
  width: 100px;
  height: 150px;
}

.container-rs {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
}
.container-rs p:nth-child(1) {
  font-weight: bold;
  font-size: 2rem;
  color: #000;
}
.logos-RS {
  display: flex;
  justify-content: space-between;
}
.logos-RS img {
  width: 25px;
}
.logos-RS a {
  transition: ease 0.3s;
}
.logos-RS a:hover {
  transform: scale(1.2);
}

@media screen and (max-width: 800px) {

  /* Menu Mobile */
  .logo-club {
    width: 60px;
    margin: 0;
  }

  .container-global-nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .nav-desktop {
    display: none;
  }
   .menu-btn {
  width: 40px;
  height: 40px;
  outline: none;
  padding: 13px 10px;
  @apply border-blue-button border flex flex-col justify-between rounded-full transition duration-500;
}

.menu-btn .bar {
  width: 18px;
  height: 2px;
  @apply bg-blue-button block transition duration-500 origin-center;
}
.menu-btn:focus,
.menu-btn:hover {
  @apply  bg-blue-button;
}
@media (hover: none) {
  .menu-btn:hover { color: inherit; }
}
.menu-btn:focus .bar,
.menu-btn:hover .bar {
  @apply bg-white;
}
/**
  Menu open
 */
.menu-btn--open .bar:nth-child(1){
  transform: translateY(5px) rotate(45deg);
}
.menu-btn--open .bar:nth-child(2){
  transform: scaleX(0);
}
.menu-btn--open .bar:nth-child(3){
  transform: translateY(-5px) rotate(-45deg);
}

/* ---------------------- */
/* FOOTER */
/* ---------------------- */
  .footer {
    flex-direction: column-reverse;
    padding-bottom: 15px;
    padding-top: 15px;
  }
  .logos-sponsors {
    margin: auto;
  }
  .container-rs {
    width: 300px;
    margin: auto;
  }

}
</style>
