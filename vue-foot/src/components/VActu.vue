<template>
  <div class="container-actu">
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
          <img :src="image2" alt="photo de l'article" />
          <h1 class="pt-roboto-condensed">{{article[8].title}}</h1>
        </div>
      </router-link>
      <router-link to="/VActu">
        <div class="actu__bloc add">
          <img :src="image2" alt="photo de l'article" />
          <h1 class="pt-roboto-condensed">{{article[9].title}}</h1>
        </div>
      </router-link>
      <router-link to="/VActu">
        <div class="actu__bloc add">
          <img :src="image2" alt="photo de l'article" />
          <h1 class="pt-roboto-condensed">{{article[10].title}}</h1>
        </div>
      </router-link>
      <router-link to="/VActu">
        <div class="actu__bloc add">
          <img :src="image2" alt="photo de l'article" />
          <h1 class="pt-roboto-condensed">{{article[11].title}}</h1>
        </div>
      </router-link>
    </div>
    <div class="add-more">
      <input
        type="button"
        id="add-more-button"
        class="add-more__button"
        value="Voir plus"
      />
    </div>
    {{article[0].title}}
    
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
      article:null
    };
  },
  async created() {
     this.article = await AuthService.getArticle();
     console.log(this.article)
    
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