<template>
  <div class="bloc-modale" v-if="revele" >
    <div class="overlay" v-on:click="toggleModale"></div>

    <div class="modale">
      <div class="btn-modale" v-on:click="toggleModale" >X</div>
            <form action="">
        <div class="flex flex-col m-2">
          <label for="">Modifier le nom de l'article</label>
          <input type="text" placeholder="Titre"/>
        </div>
        <div class="flex flex-col m-2">
          <label for="">Modifier le texte de l'article</label>
          <textarea name="" id="" cols="30" rows="10" ></textarea>
        </div>
        <div class="flex flex-col m-2">
          <input type="submit" v-on:click="updated(item.id)" value="Submit"/>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "ModaleActu",
  props: ["revele", "toggleModale"],
  data(){
    return{
      article: this.$route.query.article
    };
  },
  mounted(){
    console.log(this.article);
  }
};
</script>


<style scoped>
.bloc-modale {
  position: fixed;
  top: 20%;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  background: rgba(0, 0, 0, 0.164);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modale {
  background: #f1f1f1;
  color: #333;
  padding: 50px;
  position: fixed;
  top: 40%;
}

.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>