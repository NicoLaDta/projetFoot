<template>
  <div class="vue-container">
    <!--        -->
    <!-- HEADER -->
    <!--        -->
    <div class="container-global-nav z-10">
      <router-link to="/">
        <img class="logo-club" :src="logo" />
      </router-link>
      <div class="pt-roboto nav flex ">
        <nav class="mx-auto nav-desktop">
          <router-link class="padding-router color-focus hover" to="/">Home</router-link
          >
          <router-link class="padding-router color-focus hover" to="/VActu"
            >Actualités</router-link
          >
          <router-link class="padding-router color-focus hover" to="/VCalendrier"
            >Résultats</router-link
          >
          <router-link class="padding-router color-focus hover" to="/VClassement"
            >Classement</router-link
          >
          <router-link class="padding-router color-focus hover" to="/VBilletterie"
            >Billetterie</router-link
          >
          <router-link class="padding-router color-focus hover" to="/VBoutique"
            >Boutique</router-link
          >
          
          <!-- À AJOUTER SI NECESSAIRE AVEC LA PARTIE BACK-END -->
          <router-link class="padding-router connexion" to="/login"
            v-if="!$store.state.isLoggedIn"
            flat
            dark
          ><img :src="imgUser" alt="img-user" />Connexion</router-link>
          <router-link class="padding-router color-focus link-add" to="/Admin"
            v-if="$store.state.isLoggedIn"
            flat
            dark
          ><img :src="imgAdd" alt="img-add"/>Ajout</router-link>&emsp;
          <v-input class="connexion" type="button" value="Logout" @click="logout"
           onclick="return confirm('Êtes-vous sûrs de vouloir vous deconnectez ?')"
            v-if="$store.state.isLoggedIn"
            flat
            dark
          >Deconnexion</v-input>
          <!-- <h3 v-if="$store.state.isLoggedIn"
            flat
            dark
          > Admin : {{ username }} </h3> -->
        </nav>
      </div>
      
      <div>
        <button
          ref="button"
          class="ml-auto menu-btn"
          :class="{ 'menu-btn--open': isMenuOpen }"
          @click="toggleMenu"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>

          <span class="sr-only">Menu</span>
        </button>
      </div>
      <v-menu-mobile v-if="isMenuOpen"></v-menu-mobile>
    </div>
    <!--        -->
    <!-- NOTRE APP -->
    <!--        -->

    <div id="app">
      <router-view />
    </div>

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
        <a href="https://seinesaintdenis.fr" target="_blank">
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
import VMenuMobile from "@/components/VMenuMobile";
export default {
  name: "App",
  components: {
    VMenuMobile,
  },
  data() {
    return {
      logo: require("@/assets/logored.svg"),
      logoAdidas: require("@/assets/logos-sponsors/adidas.svg"),
      logoGennevilliers: require("@/assets/logos-sponsors/gennevilliers.svg"),
      logoIDF: require("@/assets/logos-sponsors/idf.svg"),
      logoPh: require("@/assets/logos-sponsors/ph.svg"),
      logoRealites: require("@/assets/logos-sponsors/realites.png"),
      logoSeineSaintDenis: require("@/assets/logos-sponsors/saint-denis.svg"),
      logoSaintOuen: require("@/assets/logos-sponsors/saint-ouen.svg"),
      logoVice: require("@/assets/logos-sponsors/vice.svg"),
      logoFacebook: require("@/assets/logos-rs/facebook.svg"),
      logoInstagram: require("@/assets/logos-rs/instagram.svg"),
      logoYoutube: require("@/assets/logos-rs/youtube.svg"),
      logoTwitter: require("@/assets/logos-rs/twitter.svg"),
      imgUser: require("@/assets/image/user.svg"),
      imgAdd: require("@/assets/image/add.svg"),
      isMenuOpen: false,
    };
  },
  async created(){
    this.username = this.$store.getters.getUser.username;
  },
  methods: {
    toggleMenu() {
      console.log("menu");
      this.isMenuOpen = !this.isMenuOpen;
    },
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login');
    }
  },
  watch: {
    $route() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style lang="postcss" >
#app {
  flex-grow: 1;
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

.hover {
  text-transform: uppercase;
  color: #000;
  display: inline-block;
  padding: 5px 10px;
  position: relative;
}
.hover:hover{
  color:#991917;
  /* text-decoration: underline; */
}
.hover:after{
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 3px;
  left: 50%;
  position: absolute;
  background: #991917;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.hover:hover:after {
 width: 100%; 
  left: 0; 
}

.connexion{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #991917;
  color: white;
  border-radius: 5px;
  padding:8px;
  width: 150px;
  position: absolute;
  top: 40px;
  right: 60px;
  transition: ease 0.3s;
}
.connexion:hover{
    background-color: #5a0e0d;
}

.connexion img{
  width: 20px;
}

.link-add {
  display: flex;
  position: absolute;
  top: 100px;
  right: 60px;
  transition: ease 0.3s;
  border-radius: 5px;
  background-color: #185f4b;
  color: white;
  padding: 8px;
  width: 150px;
  justify-content: space-between;
}
.link-add:hover{
  background-color: #0f3a2e;
}
.link-add img {
  width: 30px;
  margin-right: 5px;
}

.admin img{
  widows: 20px;
}

.container-menu-mobile {
  display: none;
}
.logo-club {
  margin: auto;
  margin-bottom: 45px;
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

@media screen and (max-width: 1100px) {
  .connexion, .link-add  {
    right: 10px;
  }
}

@media screen and (max-width: 950px) {
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
    @apply bg-blue-button;
  }
  @media (hover: none) {
    .menu-btn:hover {
      color: inherit;
    }
  }
  .menu-btn:focus .bar,
  .menu-btn:hover .bar {
    @apply bg-white;
  }
  /**
  Menu open
 */
  .menu-btn--open .bar:nth-child(1) {
    transform: translateY(5px) rotate(45deg);
  }
  .menu-btn--open .bar:nth-child(2) {
    transform: scaleX(0);
  }
  .menu-btn--open .bar:nth-child(3) {
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

@media screen and (max-width: 400px) {
  .logos-sponsors {
    flex-direction: column;
    width: 100%;
  }
}
</style>