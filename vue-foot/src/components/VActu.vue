<template>
  <div>
    <div class="container-actu">
      <div class="actu">
        <div class="actu__n" :key="item.id" v-for="item in article">
          <div class="actu__bloc">
            <router-link :to="{ name: 'Article', query: { article: item } }">
              <img :src="image2" alt="photo de l'article" />
              <h1 class="pt-roboto-condensed">{{ item.title }}</h1>
            </router-link>
            <div class="div-picto">
              <button>
                <img :src="pictoUpdate" flat v-if="$store.state.isLoggedIn" dark alt="picto Update" />
              </button>
              <button @click="clicked(item.id)">
                <img :src="pictoTrash" flat v-if="$store.state.isLoggedIn" dark alt="picto Trash" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="add-more">
      <input
        type="button"
        id="add-more-button"
        class="add-more__button"
        value="Voir plus"
      />
    </div>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService.js";
export default {
  name: "Actualités",
  data() {
    return {
      img: require("@/assets/img-article/img-1.jpg"),
      image2: require("@/assets/img-article/article.jpg"),
      pictoUpdate: require("@/assets/image/update.png"),
      pictoTrash: require("@/assets/image/trash.png"),
      article: null,
      deleted: "",
    };
  },
  async created() {
    this.article = await AuthService.getArticle();
  },
  methods: {
    async clicked(id) {
      this.deleted = await AuthService.deleteArticle(id);
    },
  },
  mounted() {
    let button = document.querySelector("#add-more-button");
    //Je réccupère tous les éléments à partir du 7ème
    let elements = document.querySelectorAll(
      ".container-actu :nth-child(n + 7)"
    );

    //Add display none
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add("displayNone");
    }

    button.addEventListener("click", () => {
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("displayNone");
      }

      if (button.value === "Voir plus") {
        button.value = "Voir moins";
      } else {
        button.value = "Voir plus";
      }
    });
  },
};
</script>

<style lang="postcss" scoped>
.container-actu {
  margin-right: 100px;
  margin-left: 100px;
  display: flex;
  flex-wrap: wrap;
}

.actu {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin: auto;
  max-width: 1300px;
}

.box * {
  flex: 1;
}

/* ------------- */
/* ACTU BLOC */
/* ------------- */
a {
  margin: 10px;
}
.actu__bloc {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 400px;
  height: 345px;
  padding-bottom: 15px;
  position: relative;
  margin: 20px;
}
.actu__bloc img {
  width: 100%;
  height: 200px;
  border-radius: 20px 20px 0px 0px;
  object-fit: cover;
}
.actu__bloc h1 {
  margin: 10px;
  font-weight: bold;
  font-size: 1.25rem;
}

/* ------------- */
/* PICTO IN ACTUBLOC */
/* ------------- */
.div-picto {
  display: flex;
  position: absolute;
  right: 160px;  
  left: 160px;

  bottom: 0;
  background-color: #fff;
  padding: 2px;
  margin-bottom: 20px;
}
.div-picto img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-left: 10px;
}
/* ------------- */
/* ADD MORE */
/* ------------- */
.display {
  display: block;
}
.displayNone {
  display: none;
}
/* .actu :nth-child(n + 7) {
  display: none;
} */
.add-more {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.add-more__button {
  background: none;
  border: solid 2px #000;
  padding: 5px;
  border-radius: 5px;
  transition: ease 0.3s;
  cursor: pointer;
  width: 100px;
}
.add-more__button:hover {
  background-color: #991917;
  border: solid 2px #991917;
  color: #fff;
}

/* ------------- */
/* POPUP */
/* ------------- */
.pop-up-update {
  background-color: rgba(138, 135, 135, 0.993);
  position: absolute;
  z-index: 2;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  display: none;
}
.pop-up__form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (max-width: 1044px) {
  .actu__bloc {
    width: 100%;
  }
  .container-actu {
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>
