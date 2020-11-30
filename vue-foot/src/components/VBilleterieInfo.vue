<template>
    <div class="container-global">
    <!-- <router-link to="/VBillettrie">Retour</router-link> -->
    <div class="stade">
        <img class="imageStade" :src="stade" alt="photo de l'article" />
    </div>
    <div class="categorie flex mt-16">
        <div class="categorie1 mx-auto ">
            <div class="mt-5 flex titre pr-3 pl-3">
            <p>CATERGORIE 1</p>
            <p style="color:#D8C508;font-weight:bold">12,65€</p>
            </div>
        </div>
         <div class="categorie1 mx-auto">
            <div class="mt-5 flex titre pr-3 pl-3">
            <p>CATERGORIE 2</p>
            <p style="color:#8D0506;font-weight:bold">12,65€</p>
            </div>
        </div>
         <div class="categorie1 mx-auto">
           <div class="mt-5 flex titre pr-3 pl-3">
            <p>CATERGORIE 3</p>
            <p style="color:#156654;font-weight:bold">12,65€</p>
            </div>
        </div>
    </div>
     <div class="carteTitle mt-16 text-center">
     <h2 class="mx-auto">Pour acquérir vos billets,<span class="titreMobile"><br></span> rendez-vous en boutique !</h2>
    </div>
    <div class="containerCarte mt-10 flex pr-48 pl-48 pb-10">
        <div class="carte">
        </div>
        <div class="adresse pt-20">
            <h2 class="nom">RedStar Footbal Club</h2>
            <p>92 Rue du Dr Bauer <br> 93400 Saint-Ouen</p>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: "BilleterieInfo",
    data() {
    return {
      stade: require("@/assets/image-billeterie/stade.svg"),
    };
  },
}
</script> 

<style lang="postcss" scoped>
.categorie1{
height: 82px;
width: 350px;
border-radius: 10px;
font-size: 24px;
justify-content: space-between;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

}
.titre{
justify-content: space-between;
}
.carteTitle{
font-size: 38px;
font-weight: bold;
}
.imageStade{
height: 602px;
width: 1363px;  
background-size: cover;
background-repeat: no-repeat;
}
.titreMobile{
    display: none;
}

.carte{
width: 574px;
height: 321px;
background-color: red;
display: block;
}
.containerCarte{
justify-content: space-between;
}
.nom{
    font-weight: bold;
    font-style: italic;
    
}
.adresse{
    font-size: 30px;
}
@media screen and (max-width: 1300px) {
.carte{
margin: auto;
} 
.containerCarte{
flex-direction: column-reverse;
text-align: center;
@apply mt-0 pl-0 pr-0 mx-auto;
margin-top: -50px;
}
}
@media screen and (max-width: 1100px) {
.categorie{
        flex-direction: column;
    }
     .imageStade{
 width: 100%; height: auto;
}
.containerCarte{
flex-direction: column-reverse;
text-align: center;
@apply mt-0 pl-0 pr-0 mx-auto;
margin-top: -50px;
}
.carte{
margin: auto;
}

}
@media screen and (max-width: 800px) {
.titreMobile{
    display: contents;
}
.containerCarte{
flex-direction: column-reverse;
text-align: center;
@apply pl-0 pr-0 mx-auto;
margin-top: -50px;
}
.carte{
height: 300px;
width: 470px;
margin: auto;
}
}
@media screen and (max-width: 900px) {
.titreMobile{
    display: contents;
}
}
@media screen and (max-width: 500px) {
   .imageStade{
 width: 100%; height: auto;
}
.titreMobile{
    display: contents;
}
.carte{
height: 240px;
width: 350px;
background-color: red;
margin: auto;
}

}

</style>
