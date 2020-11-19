<template>
  <div class="container-actu">
    <div class="actu">
      <div class="actu__bloc hot-news">
        <img :src="img" alt="photo de l'article" />
        <h1 class="pt-roboto-condensed">Title Article</h1>
      </div>
      <div class="actu__bloc">
        <img :src="img" alt="photo de l'article" />
        <h1 class="pt-roboto-condensed">Title Article</h1>
      </div>
      <div class="actu__bloc">
        <img :src="img" alt="photo de l'article" />
        <h1 class="pt-roboto-condensed">Title Article</h1>
      </div>
      <div class="actu__bloc">
        <img :src="img" alt="photo de l'article" />
        <h1 class="pt-roboto-condensed">Title Article</h1>
      </div>
      <div class="actu__bloc">
        <img :src="img" alt="photo de l'article" />
        <h1 class="pt-roboto-condensed">Title Article</h1>
      </div>
      <div class="actu__bloc">
        <img :src="img" alt="photo de l'article" />
        <h1 class="pt-roboto-condensed">Title Article</h1>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.container-actu {
  margin-right: 100px;
  margin-left: 100px;
  display: flex;
  margin-bottom: 40px;
}

.actu {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  max-width: 1300px;
}

.box * {
  flex: 1;
}

/* ------------- */
/* ACTU BLOC */
.actu__bloc {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: auto;
  border-radius: 20px;
  width: 350px;
  margin: 10px;
}
.actu__bloc img {
  width: 100%;
  height: 200px;
  border-radius: 20px 20px 0px 0px;
}
.actu__bloc h1 {
  margin: 10px;
  font-weight: bold;
}
</style>

<script>
export default {
  name: "Actualités",
  data() {
    return {
      img: require("@/assets/img-article/img-1.jpg"),
    };
  },
};
</script>