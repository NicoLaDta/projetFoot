<template>
  <div class="container-actu">
<<<<<<< HEAD
    <div class="actu">
      <div>
        <!-- {{article}} -->
      </div>
      <router-link to="/VActu/VArticle">
        <div class="actu__bloc hot-news">
         <img :src="image2" alt="photo de l'article" />
          <h1 class="pt-roboto-condensed">{{article[0].title}}</h1>
          <p>{{article[0].id}}</p>
        </div>
      </router-link>
      <router-link to="/VActu">
        <div class="actu__bloc">
          <img :src="image2" alt="photo de l'article" />
          <h1 class="pt-roboto-condensed">{{article[1].title}}</h1>
        </div>
      </router-link>
      <router-link to="/VActu">
        <div class="actu__bloc">
          <img :src="image2" alt="photo de l'article" />
          <h1 class="pt-roboto-condensed">{{article[2].title}}</h1>
        </div>
      </router-link>
      <router-link to="/VActu">
        <div class="actu__bloc">
          <img :src="image2" alt="photo de l'article" />
          <h1 class="pt-roboto-condensed">{{article[3].title}}</h1>
        </div>
      </router-link>
      <router-link to="/VActu">
        <div class="actu__bloc">
          <img :src="image2" alt="photo de l'article" />
          <h1 class="pt-roboto-condensed">{{article[4].title}}</h1>
        </div>
      </router-link>
      <router-link to="/VActu">
        <div class="actu__bloc">
          <img :src="image2" alt="photo de l'article" />
          <h1 class="pt-roboto-condensed">{{article[5].title}}</h1>
        </div>
      </router-link>
      <router-link to="/VActu">
        <div class="actu__bloc">
          <img :src="image2" alt="photo de l'article" />
          <h1 class="pt-roboto-condensed">{{article[6].title}}</h1>
        </div>
      </router-link>
      <router-link to="/VActu">
        <div class="actu__bloc">
          <img :src="image2" alt="photo de l'article" />
          <h1 class="pt-roboto-condensed">{{article[7].title}}</h1>
        </div>
      </router-link>
      <router-link to="/VActu">
        <div class="actu__bloc">
=======
    <div class="actu" :key ="item.id" v-for="item in article" >
      <div class="actu__bloc">
        <router-link :to="{name:'Article', query: {article: item}}">
          <div class="div-picto">
            <button>
              <img :src="pictoUpdate"
                v-if="$store.state.isLoggedIn"
                flat
                dark 
              alt="picto Update" />
            </button>
            <button @click="clicked(item.id)">
            <img :src="pictoTrash"
                v-if="$store.state.isLoggedIn"
                flat
                dark 
                alt="picto Trash"/>
            </button>
          </div>
>>>>>>> cb75ee2138c99529581b25e29e33d8d6fa627b9e
          <img :src="image2" alt="photo de l'article" />
          <h1 class="pt-roboto-condensed">{{item.title}}</h1>
        </router-link>
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
import AuthService from '@/services/AuthService.js';
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
<<<<<<< HEAD
     this.article = await AuthService.getArticle();
     console.log(this.article)
    
=======
    this.article = await AuthService.getArticle();
  },
  methods:{
    async clicked(id){
      this.deleted = await AuthService.deleteArticle(id);
    },
>>>>>>> cb75ee2138c99529581b25e29e33d8d6fa627b9e
  },
  mounted() {
    let button = document.querySelector("#add-more-button");
    //Je réccupère tous les éléments à partir du 7ème
      let elements = document.querySelectorAll(".actu :nth-child(n + 7)");

    //Add display none
      for (var i=0; i<elements.length; i++){
         elements[i].classList.add('displayNone')
      }

    button.addEventListener("click", () => {
      
      for (var i=0; i<elements.length; i++){
         elements[i].classList.toggle("displayNone")
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
  flex-direction: column;
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
  padding-bottom: 15px;
  position: relative;
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
  right: 0;
  top: 0px;
  background-color: #FFF;
  padding: 2px;
}
.div-picto img {
  width: 20px;
  height: 20px;
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
  .actu__bloc{
    width: 100%;
  }
  .container-actu {
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>
