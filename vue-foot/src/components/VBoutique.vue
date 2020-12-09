<template>
  <div class="container-boutique flex flex-wrap justify-center">
    <section class="card flex flex-col rounded">
      <router-link to="/VProduct" class="relative">
        <div class="div-picto">
          <button>
            <img :src="pictoUpdate" 
              v-if="$store.state.isLoggedIn"
              flat
              dark
            alt="picto Update" />
          </button>
          <button>
            <img :src="pictoTrash" 
              v-if="$store.state.isLoggedIn"
              flat
              dark
            alt="picto Trash" />
          </button>
        </div>
        <img class="item-img rounded-t-lg" src="@/assets/image-boutique/survet.jpg" />
        <div class="presentation flex justify-between m-4">
          <p>{{ getproduct[0].nomproduit }}</p>
          <p class="text-red-600 font-semibold">{{ getproduct[0].prix }} €</p>
        </div>
      </router-link>
    </section>
    <section class="card flex flex-col rounded">
      <router-link to="/VProduct" class="relative">
       <div class="div-picto">
          <button>
            <img :src="pictoUpdate" 
              v-if="$store.state.isLoggedIn"
              flat
              dark
            alt="picto Update" />
          </button>
          <button>
            <img :src="pictoTrash" 
              v-if="$store.state.isLoggedIn"
              flat
              dark
            alt="picto Trash" />
          </button>
        </div>
        <img class="item-img rounded-t-lg" src="@/assets/image-boutique/maillot_r.jpg">
        <div class="presentation flex justify-between m-4">
          <p>{{ getproduct[1].nomproduit }}</p>
          <p class="text-red-600 font-semibold">{{ getproduct[1].prix }} €</p>
        </div>
      </router-link>
    </section>
    <section class="card flex flex-col rounded">
      <router-link to="/VProduct" class="relative">
       <div class="div-picto">
          <button>
            <img :src="pictoUpdate" 
              v-if="$store.state.isLoggedIn"
              flat
              dark
            alt="picto Update" />
          </button>
          <button>
            <img :src="pictoTrash" 
              v-if="$store.state.isLoggedIn"
              flat
              dark
            alt="picto Trash" />
          </button>
        </div>
      <img class="item-img rounded-t-lg" src="@/assets/image-boutique/maillot_1.png">
      <div class="presentation flex justify-between m-4">
        <p>{{ getproduct[2].nomproduit }}</p>
        <p class="text-red-600 font-semibold">{{ getproduct[2].prix }} €</p>
      </div>
      </router-link>
    </section>
  </div>
</template>

<style lang="postcss">
.card {
  width: 330px;
  margin: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.container-boutique {
  margin-left: 80px;
  margin-right: 80px;
  padding-bottom: 15px;
}

.m-1.5 {
  margin: 0.375rem;
}

.presentation p {
  font-weight: bold;
  font-size: 1.25rem;
}
'${uuid.v4()}'
/* ------------- */
/* PICTO IN ACTUBLOC */
/* ------------- */
.div-picto {
  display: flex;
  position: absolute;
  right: 0;
  top: 0px;
  background-color: #FFF;
  padding: 2px;
}
.div-picto img {
  width: 20px;
  height: 20px;
}

.item-img{
  /* max-height: 400px; */
  object-fit: cover;
  height: 300px;
  width: 100%;
}

@media (min-width: 400px) {
  .container-product {
    margin-left: 90px;
    margin-right: 90px;
  }

  .container-text {
    margin-left: 10px;
  }
}

@media (max-width: 400px) {
  .container-boutique {
    margin-left: 40px;
    margin-right: 40px;
  }
}
</style>

<script>
import AuthService from "@/services/AuthService.js";
export default {
  name: "Boutique",
  data() {
    return {
      getproduct: null,
      pictoUpdate: require("@/assets/image/update.png"),
      pictoTrash: require("@/assets/image/trash.png"),
    };
  },
  async created() {
    this.getproduct = await AuthService.getProduct();
  },
};
</script>