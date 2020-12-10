<template>
    <div class="container-global">
    <router-link to="/VActu">Retour</router-link>
    <div class="article">
        <h1>{{article.title}}</h1>
        <img :src="img" alt="photo de l'article" />
        <p>{{article.description}}</p>
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
            article : this.$route.query.article
            }
        },
    mounted(){
        console.log(this.article)
    }
}
</script> 