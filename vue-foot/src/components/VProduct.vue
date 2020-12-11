<template>
  <div class="container-product">
    <div class="pres">
      <div class="container-image">
        <img
          :src="`https://api.alanakra.fr/foot/${product.nomproduit}.jpg`"
          alt=""
          class="responsive"
        />
      </div>
      <div class="container-text">
        <div id="retour-button">
          <router-link to="/VBoutique">Retour</router-link>
        </div>
        <h1 class="font-semibold">{{ product.nomproduit }}</h1>
        <p>
          {{ product.descriptions }}
        </p>
        <p class="text-center text-xl font-bold mt-5 mb-8" id="to-gt">
          Pour acquérir ce produit, rendez-vous en boutique !
        </p>
      </div>
    </div>
    <div class="find-us-container">
        <p class="text-center text-xl font-bold mt-5 mb-8">
          Pour acquérir ce produit, rendez-vous en boutique !
        </p>
      <h1>Où nous trouver ?</h1>

      <div class="find-us flex flex-col md:flex-row">
        <iframe
          class="md:w-6/12 w-full"
          height="350px"
          frameborder="0"
          allowfullscreen
          src="//umap.openstreetmap.fr/fr/map/boutique-redstar_530423?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&datalayers=1500423#16/48.9067/2.3425"
        ></iframe>
        <div class="address flex justify-center items-center md:w-6/12 w-full">
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
  name: "Product",
  data() {
    return {
      product: this.$route.query.product,
    };
  },
};
</script>
<style lang="postcss">
.article h1 {
  background-color: #991917;
  color: white;
  padding: 15px;
  margin: 30px;
  text-align: center;
}

.pres {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}
.container-text {
  width: 60%;
  max-width: 800px;
  margin-left: 40px;
  margin: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 20px;
  flex-direction: column;
}

.container-text h1{
  text-align: center;
  margin: 30px;
  font-size: 1.5rem;
  font-weight: medium;
  background-color: #991917;
  color: white;
  padding: 15px;
}

.container-text p{
  margin: 30px;

}

.map {
  width: 50%;
  justify-content: center;
}

#retour-button:hover {
  text-decoration: underline;
}
/* ———————————————— */
/* OU NOUS TROUVER */
/* ———————————————— */
.find-us-container {
  display: flex;
  flex-direction: column;
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
  .find-us-container {
    margin: 0;
    with: 100%;
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
}

@media (max-width: 870px) {
  .container-product {
    margin-left: 15px;
    margin-right: 15px;
  }

  .pres {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    justify-content: center;
  }
  .container-image {
    width: 80%;
  }
  .container-text {
    width: 80%;
    margin-left: 0px;
  }
  .container-product {
    margin-left: 20px;
    margin-right: 20px;
  }

  .container-location {
    flex-direction: column-reverse;
  }

  .address {
    margin-bottom: 15px;
  }

  .map {
    margin-bottom: 35px;
  }
}
</style>
<script>
import AuthService from '@/services/AuthService.js';
export default {
  name: "Product",
  data(){
    return{
      id: 1,
      product:'',
      Product: {},
      getproduct: null,
      imgProduct: 'https://api.alanakra.fr/foot/survet.jpg',
      test: null
    };
  },
  async created() {
    this.getproduct = await AuthService.getProduct();
    console.log(this.getproduct)
  }
};
</script>