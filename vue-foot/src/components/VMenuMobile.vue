<template>
  <div class="MenuMobile absolute w-full">
    <div ref="background" class="absolute top-0 left-0 w-full h-full bg-gray-100 origin-top"></div>
    <nav class="flex flex-col justify-around items-center h-full relative">      
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/VActu">Actualités</router-link>
      <router-link class="link" to="/VCalendrier">Calendrier et résultats</router-link>
      <router-link class="link" to="/VClassement">Classement</router-link>
      <router-link class="link" to="/VBilletterie">Billetterie</router-link>
      <router-link class="link" to="/VBoutique">Boutique</router-link>
      <router-link class="link" to="/login"
            v-if="!$store.state.isLoggedIn"
            flat
            dark
          >Connexion</router-link>
      <router-link class="padding-router color-focus hover" to="/Admin"
            v-if="$store.state.isLoggedIn"
            flat
            dark
          >Ajout</router-link>&emsp;
      <v-input class="link" type="button" value="Logout" @click="logout"
           onclick="return confirm('Êtes-vous sûrs de vouloir vous deconnectez ?')"
            v-if="$store.state.isLoggedIn"
            flat
            dark
          >Deconnexion</v-input>
    </nav>
    
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  mounted() {
    const tl = gsap.timeline()
    tl.from(this.$refs.background, {
      scaleY: 0,
      duration: 0.8,
      ease: 'expo.inOut'
    }, 'start')
    const links = this.$el.querySelectorAll('.link')
    tl.from(links, {
      y: 30,
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: 'expo.out'
    }, 'start+=0.6')
  },
}
</script>

<style lang="postcss" scoped>
.MenuMobile {
  top: 85px;
  height: calc(100vh - 72px);
  padding-top: 10vh;
  padding-bottom: 20vh;
}
.link {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  margin-right: 0;
}
</style>