<template>
    <div class="container-global">
    <router-link to="/VActu">Retour</router-link>
    <div class="article">
        <h1>Title</h1>
        <img :src="img" alt="photo de l'article" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque maxime a reiciendis, quaerat repudiandae, incidunt doloribus iusto deleniti voluptatem harum fugiat expedita odio, alias distinctio similique ipsa! Doloribus, consequuntur atque odio ipsum reprehenderit reiciendis quam culpa quo incidunt, laudantium accusantium quasi voluptatibus ab est adipisci impedit tenetur sint. Reprehenderit quaerat omnis corporis ipsum eveniet fugit, dicta repudiandae maiores amet laboriosam soluta asperiores nobis, laudantium beatae maxime adipisci explicabo et! Iste.</p>
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
    margin: 10px;
    font-size: 1.5rem;
    font-weight: bold;
}
.article p {
    width: 600px;
    text-align: justify;
    margin: 20px;
}
.article img {
    width: 500px;
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
    };
  },
}
</script> 