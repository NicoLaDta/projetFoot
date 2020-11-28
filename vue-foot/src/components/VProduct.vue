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
  <h2 class="text-center font-bold mt-2">Pour acquérir ce produit, rendez-vous en boutique !</h2>
    <div class="container-map">
      
    </div>
 </div>
</template>

<style lang="postcss">
  .responsive{
   /* width: 100%;
   height: auto; */
  }

  h1{
   font-size: 3rem;
  }

  .container-image, .container-text{
    /* width: 50% */
  }

   @media (max-width: 400px) {
    .container-product{
     margin-left: 70px;
     margin-right: 70px;
    }
  }


  @media (max-width: 400px) {
    .container-product{
     margin-left: 20px;
     margin-right: 20px;
    }
  }
</style>

<script>
export default {
 name: 'Product',
}
</script>