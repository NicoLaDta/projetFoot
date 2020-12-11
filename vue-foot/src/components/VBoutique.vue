<template>
  <div class="container-boutique flex flex-wrap justify-center">
    <div class="prod" :key="item.id" v-for="item in product">
      <section class="card flex flex-col rounded">
        <router-link
          :to="{ name: 'Product', query: { product: item } }"
          class="relative"
        >
          <img
            class="item-img rounded-t-lg"
            :src="`https://api.alanakra.fr/foot/${item.nomproduit}.jpg`"
          />
          <div class="presentation flex justify-between m-4">
            <p>{{ item.nomproduit }}</p>
            <p class="text-red-600 font-semibold">{{ item.prix }} €</p>
          </div>
        </router-link>
        <div class="div-picto flex pb-3">
          <router-link to="/ModaleBoutique">
            <img
              :src="pictoUpdate"
              flat
              v-if="$store.state.isLoggedIn"
              dark
              alt="picto Update"
            />
          </router-link>
          <button @click="clicked(item.id)">
            <img
              :src="pictoTrash"
              flat
              v-if="$store.state.isLoggedIn"
              dark
              alt="picto Trash"
            />
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService.js";
// import ModaleBoutique from "./ModaleBoutique.vue";
export default {
  name: "Boutique",
  data() {
    return {
      pictoUpdate: require("@/assets/image/update.png"),
      pictoTrash: require("@/assets/image/trash.png"),
      revele: false,
      product: null,
      deleted: "",
    };
  },
  async created() {
    this.product = await AuthService.getProduct();
  },
  methods: {
    async clicked(id) {
      this.deleted = await AuthService.deleteProduct(id);
      window.location.reload();
    },
    // toggleModale: function () {
    //   this.revele = !this.revele;
    // },
  },
  // components: {
  //   ModaleBoutique,
  // },
};
</script>

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
  /* position: absolute; */
  /* right: 160px;
  left: 160px; */
  padding: 2px;
  margin-bottom: 20px;
}
.div-picto img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-left: 10px;
}
.item-img {
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
