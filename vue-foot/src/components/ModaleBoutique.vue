<template>
  <div class="bloc-modale">
    <div class="overlay"></div>

    <div class="modale">
       <router-link to="/VBoutique">
        </router-link>
            <form action="">
        <div class="flex flex-col m-2">
          <label for="">Modifier le nom du produit</label>
          <input type="text" placeholder="Titre" v-model="title"/>
        </div>
        <div class="flex flex-col m-2">
          <label for="">Modifier le prix</label>
          <input type="text" placeholder="Titre" >
        </div>
        <div class="flex flex-col m-2">
          <label for="">Modifier la description du produit</label>
          <textarea v-model="description" name="" id="" cols="30" rows="10" ></textarea>
        </div>
        <div class="flex flex-col m-2">
          <input type="submit" @click="productUpdate" value="Submit"/>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "ModaleBoutique",
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
  /* top: 40%; */
}

.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>