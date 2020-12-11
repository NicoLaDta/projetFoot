<template>
  <div class="container-admin">
    <h1>Administration</h1>
    <div class="add-article">
      <h2>Ajouter un article</h2>
      <form action="">
        <div class="flex flex-col m-2">
          <label for="">Titre de l'article</label>
          <input type="text" placeholder="Titre" v-model="title"/>
        </div>
        <div class="flex flex-col m-2">
          <label for="">Texte de l'article</label>
          <textarea v-model="description" name="" id="" cols="30" rows="10" ></textarea>
        </div>
        <div class="flex flex-col m-2">
          <input type="submit" @click="articleAdd" value="Submit"/>
        </div>
      </form>
    </div>

    <div class="add-product">
      <h2>Ajouter un produit à la boutique</h2>
      <form action="">
        <div class="flex flex-col m-2">
          <label for="">Nom du produit</label>
          <input type="text" placeholder="Nom du produit" v-model="nomproduit"/>
        </div>
        <div class="flex flex-col m-2">
          <label for="">Prix</label>
          <input type="text" placeholder="Prix en €" v-model="prix"/>
        </div>
        <div class="flex flex-col m-2">
          <label for="">Description</label>
          <textarea v-model="descriptions" name="" id="" cols="30" rows="10" ></textarea>
        </div>
        <div class="flex flex-col m-2">
          <input type="submit" @click="productAdd" value="Submit"/>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="postcss" scopted>
.container-admin {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input[type="text"],
textarea {
  border: solid 1px #000;
  padding: 5px;
  background: none;
}
input[type="submit"] {
  margin: auto;
  padding: 5px 10px 5px 10px;
  background: none;
  border: solid 2px #000;
  border-radius: 5px;
  transition: ease 0.3s;
  cursor: pointer;
  margin-top: 10px;
}
/* ————————————— */
/* ARTICLE */
/* ————————————— */
.add-article {
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 20px;
  border-radius: 10px;
  border: solid 2px #991917;
}
.add-article h2 {
  text-align: center;
  font-size: 1.5rem;
}
.add-article input[type="submit"]:hover {
  background-color: #991917;
  border: solid 2px #991917;
  color: #fff;
}
/* ————————————— */
/* BOUTIQUE */
/* ————————————— */
.add-product {
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 20px;
  border-radius: 10px;
  border: solid 2px #0c4437;
  margin-top: 30px;
  margin-bottom: 40px;
}
.add-product h2 {
  text-align: center;
  font-size: 1.5rem;
}
.add-product input[type="submit"]:hover {
  background-color: #0c4437;
  border: solid 2px #0c4437;
  color: #fff;
}
</style>

<script>
import AuthService from '@/services/AuthService.js';
export default {
  name: "Admin",
  data(){
    return {
      title:"",
      nomproduit:"",
      prix: null,
      images: [],
      description:"",
      descriptions:"",
    };
  },
  methods: { 
    Onchange(e){
       this.images = e.target.files[0]
    },
    async articleAdd() {
      try {
        const credentials = {
          title: this.title,
          description: this.description
        };
        const response = await AuthService.articleAdd(credentials);
        this.msg = response.msg;
      } catch (error) {
        this.msg = error.response.data.msg;
      }
    },

    async productAdd() {
      try {
        const credentials = {
          nomproduit: this.nomproduit,
          prix: this.prix,
          image: this.image,
          descriptions: this.descriptions
        };
        const response = await AuthService.productAdd(credentials);
        this.msg = response.msg;
      } catch (error) {
        this.msg = error.response.data.msg;
      }
    },
  },
};
</script>