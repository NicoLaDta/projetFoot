<template>
    <div class="container-boutique flex flex-wrap justify-center">

      <section class="card flex flex-col rounded">
       <router-link to="/VProduct">
        <img src="@/assets/image-boutique/maillot_1.png">
        <div class="presentation flex justify-between m-4">
          <p>Title product</p>
          <p class="text-red-600 font-semibold">19,99 €</p>
        </div>
       </router-link>
      </section>
      <section class="card flex flex-col rounded">
        <img src="@/assets/image-boutique/maillot_1.png">
        <div class="presentation flex justify-between m-4">
          <p>Title product</p>
          <p class="text-red-600 font-semibold">19,99 €</p>
        </div>
      </section>
      <section class="card flex flex-col rounded">
        <img src="@/assets/image-boutique/maillot_1.png">
        <div class="presentation flex justify-between m-4">
          <p>Title product</p>
          <p class="text-red-600 font-semibold">19,99 €</p>
        </div>
      </section>

    </div>
</template>

<style lang="postcss">
  .card{
    width: 330px;
    margin: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .container-boutique{
    margin-left: 80px;
    margin-right: 80px;
    padding-bottom: 15px;
  }

  .m-1.5{
    margin: 0.375rem;
  }

  @media (max-width: 400px) {
    .container-boutique{
     margin-left: 70px;
     margin-right: 70px;
    }
  }


  @media (max-width: 400px) {
    .container-boutique{
     margin-left: 40px;
     margin-right: 40px;
    }
  }
</style>

<script>
export default {
    name: "Boutique",
}
</script>