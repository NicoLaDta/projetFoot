<template>
  <div class="container-global">
    <div id="retour-button">
      <router-link to="/VActu">Retour</router-link>
    </div>
    <div class="article">
      <h1>{{ article.title }}</h1>
      <img :src="img" alt="photo de l'article" />
      <p>{{ article.description }}</p>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.container-global {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.article {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.article h1 {
  text-align: center;
  margin: 30px;
  font-size: 1.5rem;
  font-weight: medium;
  background-color: #991917;
  color: white;
  padding: 15px;
}
.article p {
  width: 600px;
  text-align: justify;
  margin: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 20px;
}
.article img {
  width: 400px;
}

#retour-button:hover{
    text-decoration: underline;
}

@media screen and (max-width: 800px) {
  .article p {
    width: 80%;
  }
  .article img {
    width: 70%;
  }
}
</style>

<script>
export default {
  name: "Article",
  data() {
    return {
      img: require("@/assets/img-article/img-1.jpg"),
      article: this.$route.query.article,
    };
  },
  mounted() {
    console.log(this.article);
  },
};
</script> 