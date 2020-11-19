<template>
  <div class="container">
    <h1 class="title font-bold not-italic text-center">Prochains match</h1>
     
     <div class="match-item flex justify-center items-center flex-col">
       <p class="conditions font-bold text-center">Date/heure/lieu prochain match</p>

         <div class="versus flex justify-around font-bold items-center uppercase">
           <div class="first-team">
             <div class="team-img bg-gray-200"></div>
             <p>Nom Equipe 1</p>
           </div>
             <p>VS</p>
           <div class="second-team">
             <div class="team-img bg-gray-200"></div>
             <p>Nom Equipe 2</p>
           </div>
         </div>

         <div class="buy-tickets text-center px-3 rounded">
           Billets
         </div>
     </div>

    <p class="title font-bold not-italic text-center">Ou nous trouver ?</p>

    <div class="find-us flex">
      <div class="card bg-green-300 justify-center"></div>

      <div class="adress">
        <p>RedStar Football Club</p>
        <p>92 Rue du Dr Bauer</p>
        <p>93400 Saint-Ouen</p>
      </div>
    </div>


  </div>
</template>

<style lang="postcss" scoped>
 .container{
   font-family: Roboto Condensed;
 }

 .match-item{
   background: #FFFFFF;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 10px;
   width: 627px;
   height: 337px;
 }

 .conditions {
   font-style: normal;
   font-size: 24px;
   line-height: 28px;
 }

 .versus{
   font-style: normal;
 }

 .team-img{
   width: 100px;
   height: 100px;
 }

 .buy-tickets{
   background: rgba(12, 68, 55, 0.9);
   color: white;
   box-sizing: border-box;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   display: inline;
 }

 .card{
  width: 574px;
  height: 321px;
 }
</style>

<script>
export default {
 
}
</script>