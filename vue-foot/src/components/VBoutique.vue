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
            src="@/assets/image-boutique/survet.jpg"
          />
          <div class="presentation flex justify-between m-4">
            <p>{{ item.nomproduit }}</p>
            <p class="text-red-600 font-semibold">{{ item.prix }} €</p>
          </div>
        </router-link>
        <div class="div-picto">
          <modale-boutique
            :revele="revele"
            :toggleModale="toggleModale"
          ></modale-boutique>
          <button>
            <img
              v-on:click="toggleModale"
              :src="pictoUpdate"
              flat
              v-if="$store.state.isLoggedIn"
              dark
              alt="picto Update"
            />
          </button>
          <button @click="clicked(item.id)">
            <img :src="pictoTrash" flat v-if="$store.state.isLoggedIn" dark alt="picto Trash" />
          </button>
        </div>
      </section>
    </div>
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
  right: 160px;
  left: 160px;
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

<script>
import AuthService from "@/services/AuthService.js";
import ModaleBoutique from "./ModaleBoutique.vue";
export default {
  name: "Boutique",
  data() {
    return {
      product: null,
      pictoUpdate: require("@/assets/image/update.png"),
      pictoTrash: require("@/assets/image/trash.png"),
      revele: false,
    };
  },
  methods: {
    toggleModale: function () {
      this.revele = !this.revele;
    },
    async clicked(id) {
      this.deleted = await AuthService.deleteProduct(id);
      window.location.reload()
    },
  },
  components: {
    ModaleBoutique,
  },
  async created() {
    this.product = await AuthService.getProduct();
  },
};
</script>