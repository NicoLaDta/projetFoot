<template>
 <div class="container-product">
  <div class="pres flex flex-col md:flex-row">

   <div class="container-image md:w-6/12 w-full">
     <img src="@/assets/image-boutique/maillot_1_product.jpg" alt="" class="responsive">
   </div>
    <div class="container-text md:w-6/12 w-full">
     <h1 class="font-semibold">Title</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto enim distinctio placeat accusamus adipisci id magnam harum tempore quaerat unde consequuntur quisquam iure similique, temporibus nobis in sed. Quaerat soluta tempore fuga esse similique nobis, odio reiciendis accusamus earum, atque voluptas. Nostrum voluptates, eaque inventore eius odit animi suscipit voluptatibus laudantium quaerat sint possimus, porro quasi. Voluptatem eum at repudiandae rerum. At neque dignissimos, ullam reiciendis laboriosam rerum alias voluptate amet qui eius fugiat voluptas blanditiis repellat eveniet earum officia?</p>
    </div>
   </div>
  <h2 class="text-center text-xl font-bold mt-2 mb-8">Pour acquérir ce produit, rendez-vous en boutique !</h2>

  <div class="container-location flex flex-col md:flex-row">

    <iframe class="map md:w-6/12 w-full" height="250px" frameborder="0" allowfullscreen src="//umap.openstreetmap.fr/fr/map/boutique-redstar_530423?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&datalayers=1500423#16/48.9067/2.3425"></iframe>

    <div class="address flex justify-center items-center md:w-6/12 w-full">
      <p>
      <span class="italic font-bold">RedStar Footbal Club</span> <br>
       92 Rue du Dr Bauer <br>
       93400 Saint-Ouen
      </p>
    </div>

  </div>
 </div>
</template>

<style lang="postcss">

  h1{
   font-size: 3rem;
  }

  .map{
    width: 100%;
  }

  @media (max-width: 400px) {
    .container-product{
     margin-left: 70px;
     margin-right: 70px;
    }
  
    .container-product{
     margin-left: 20px;
     margin-right: 20px;
    }

    .container-location{
      flex-direction: column-reverse;
    }

    .address {
      margin-bottom: 25px;
    }

    .map{
      margin-bottom: 35px;
    }

  }


</style>

<script>
export default {
 name: 'Product',
}
</script>