<template>
  <div class="container-global">
    <div class="flex justify-center">
      <router-link to="/VBilletterie" class="center">Retour</router-link>
    </div>
    <div class="stade">
      <img class="imageStade" :src="stade" alt="photo de l'article" />
    </div>

    <form v-on:click="update">
    <div class="div-categorie">
      <div class="categorie cat1">
          <p>CATEGORIE 1</p>
          <p style="color: #d8c508; font-weight: bold">19€</p>
            <p>Nombre de billets souhaités :</p>
            <!-- <p class="little">{{nbCat1 - cat1}} / {{nbMaxCat1}} restants</p> -->
            <p class="little">{{majNbCat1}} / {{nbMaxCat1}} restants</p>
            <input type="number" min="0" max="10" value="0" id="numberCat1" v-model.number="cat1">
      </div>
      <div class="categorie cat2">
          <p>CATEGORIE 2</p>
          <p style="color: #8d0506; font-weight: bold">12€</p>
          <p>Nombre de billets souhaités :</p>
          <p class="little">{{nbCat2 - cat2}} / {{nbMaxCat2}} restants</p>
            <input type="number" min="0" max="10" value="0" id="numberCat2" v-model.number="cat2">
      </div>
      <div class="categorie cat3">
          <p>CATEGORIE 3</p>
          <p style="color: #156654; font-weight: bold">7€</p>
          <p>Nombre de billets souhaités :</p>
          <p class="little" >{{nbCat3 - cat3}} / {{nbMaxCat3}} restants</p>
            <input type="number" min="0" max="10" value="0" id="numberCat3" v-model.number="cat3">
      </div>
    </div>

    <div class="submit-button">
      <p>Votre sélection :
        <ul>
           <li>{{cat1}} place(s) en catégorie 1</li>
           <li>{{cat2}} place(s) en catégorie 2 </li>
           <li>{{cat3}} place(s) en catégorie 3</li> 
        </ul>
      </p>
      <label class="mt-3">Entrez votre email pour confirmer</label>
      <input type="email" name="user_email" v-model="email" required>
      <input type="submit" value="Valider" onclick="return confirm(`L'email de confirmation vous a bien était envoyé !`)"  v-on:click="collect">
    </div>
    </form>

    <div class="find-us-container">
      <h1>Pour acquérir vos billets, rendez-vous en boutique !</h1>

      <div class="find-us flex flex-col md:flex-row">
        <iframe
          class="md:w-6/12 w-full"
          height="350px"
          frameborder="0"
          allowfullscreen
          src="//umap.openstreetmap.fr/fr/map/boutique-redstar_530423?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&datalayers=1500423#16/48.9067/2.3425"
        ></iframe>
        <div class="adress flex justify-center items-center md:w-6/12 w-full">
          <p>
            <span class="italic font-bold">RedStar Football Club</span><br />
            92 Rue du Dr Bauer<br />
            93400 Saint-Ouen
          </p>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BilleterieInfo",
  data() {
    return {
      stade: require("@/assets/image-billeterie/stade.svg"),
      cat1: 0,
      cat2: 0,
      cat3: 0,

      nbMaxCat1 : 1000,
      nbMaxCat2 : 3000,
      nbMaxCat3 : 5000,

      nbCat1 : 1000,
      nbCat2 : 3000,
      nbCat3 : 5000,

      majNbCat1 : null,
      majNbCat2 : null,
      majNbCat3 : null,
      
      email: "",
      username: "",

      message:{
        from : "mail",
        to : this.email,
      }
    };
  },
  methods: {
    update: function(){
      this.nbCat1 = this.majNbCat1
      this.majNbCat1 = this.nbCat1 - this.cat1
      
    },
    collect : function(){
      this.majNbCat1 = this.nbCat1
    }
  },
  mounted(){
    // CAT 1
    if (localStorage.majNbCat1) {
      this.majNbCat1 = localStorage.majNbCat1;
    }
  },
  watch: {
    // CAT 1
    majNbCat1(newMaj) {
      localStorage.majNbCat1 = newMaj;
    },
  }
};
</script> 

<style lang="postcss" scoped>
.container-global {
  margin-right: 100px;
  margin-left: 100px;
}
/* ——————————— */
/* STADE IMG */
/* ——————————— */
.stade {
  display: flex;
  justify-content: center;
}
.stade img {
  height: 450px;
  object-fit: cover;
  width: 600px;
  /* pour centrer l'image mal rognée */
  margin-right: 15px;
}

/* ——————————— */
/* CATÉGORIES */
/* ——————————— */
.div-categorie {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.categorie {
  border-radius: 10px;
  width: 30%;
  padding: 5px;
  text-align: center;
  font-size: 24px;
  justify-content: space-between;
  align-items: center;
}
.cat1 {
  box-shadow: 0px 4px 4px 0px #d8c508;
  border: solid 1px #d8c508;
}
.cat2 {
  box-shadow: 0px 4px 4px 0px #8d0506;
  border: solid 1px #8d0506;
}
.cat3 {
  box-shadow: 0px 4px 4px 0px #156654;
  border: solid 1px #156654;
}
.little {
  font-size: 0.9rem;
}

/* ———————————————— */
/* INPUTS */
/* ———————————————— */
.submit-button {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
}
.submit-button p {
  font-size: 1.1rem;
}
input[type="submit"] {
  background: none;
  border: solid 2px #000;
  border-radius: 5px;
  transition: ease 0.3s;
  cursor: pointer;
  margin-top: 20px;
}
input[type="submit"]:hover {
  background-color: #991917;
  border: solid 2px #991917;
  color: #fff;
}
input[type="number"] {
  text-align: center;
}
input[type="number"]::-webkit-inner-spin-button {
  opacity: 1;
}
input[type="email"]{
    border: solid 1px #000;
    padding: 5px;
}
/* ———————————————— */
/* OU NOUS TROUVER */
/* ———————————————— */
.find-us-container {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 150px;
  margin-right: 150px;
  margin-bottom: 40px;
}

.find-us-container h1 {
  font-size: 1.5rem;
  font-family: Roboto Condensed;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}
.find-us-container p {
  font-size: 1.25rem;
  text-align: center;
}

.map {
  width: 100%;
  justify-content: center;
}

@media (max-width: 1000px) {
  .container-global {
    margin-right: 30px;
    margin-left: 30px;
  }
  /* ———————————————— */
  /* Stade */
  /* ———————————————— */
  .stade img {
    width: 100%;
  }

  /* ——————————— */
  /* CATÉGORIES */
  /* ——————————— */
  .div-categorie {
    flex-direction: column;
    align-items: center;
  }

  .categorie {
    border-radius: 10px;
    width: 90%;
    text-align: center;
    font-size: 24px;
    justify-content: space-between;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  /* ———————————————— */
  /* OU NOUS TROUVER */
  /* ———————————————— */
  .find-us-container {
    margin: 0;
    with: 100%;
    margin-top: 50px;
  }

  .find-us {
    flex-direction: column-reverse;
    margin: auto;
    text-align: center;
    font-size: 1rem;
    width: 95%;
    align-items: center;
    margin-bottom: 40px;
  }
  .find-us iframe {
    witdh: 90%;
  }
}

@media (max-width: 500px) {
  .container-global {
    margin-right: 10px;
    margin-left: 10px;
  }

  /* ———————————————— */
  /* Stade */
  /* ———————————————— */
  .stade img {
    width: 100%;
    object-fit: contain;
  }
}
</style>
