<template>
  <div class="container-global">
    <div class="flex justify-center">
      <router-link to="/VBilletterie" class="center">Retour</router-link>
    </div>
    <div class="stade">
      <img class="imageStade" :src="stade" alt="photo de l'article" />
    </div>
    <div class="div-categorie">
      <div class="categorie">
        <div class="mt-5">
          <p>CATEGORIE 1</p>
          <p style="color: #d8c508; font-weight: bold">19€</p>
        </div>
      </div>
      <div class="categorie">
        <div class="mt-5">
          <p>CATEGORIE 2</p>
          <p style="color: #8d0506; font-weight: bold">12€</p>
        </div>
      </div>
      <div class="categorie">
        <div class="mt-5">
          <p>CATEGORIE 3</p>
          <p style="color: #156654; font-weight: bold">7€</p>
        </div>
      </div>
    </div>

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
    };
  },
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
  text-align: center;
  font-size: 24px;
  justify-content: space-between;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
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
