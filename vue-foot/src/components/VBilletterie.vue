<template>
  <div class="container">
    <h1 class="title font-bold">Prochains match</h1>
     
     <div class="match-item">
       <p class="conditions font-bold">Date/heure/lieu prochain match</p>

         <div class="versus flex justify-around font-bold">
           <div class="first-team">
             <div class="team-img"></div>
             <p>Nom Equipe 1</p>
           </div>
             <p>VS</p>
           <div class="second-team">
             <div class="team-img"></div>
             <p>Nom Equipe 2</p>
           </div>
         </div>

         <div class="buy-tickets">
           Billets
         </div>
     </div>

  </div>
</template>

<style lang="postcss" scoped>
 h1{
   font-family: Roboto Condensed;
   font-style: normal;
 }

 .match-item{
   background: #FFFFFF;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 10px;
   width: 627px;
   height: 337px;
 }

 .conditions {
   font-family: Roboto Condensed;
   font-style: normal;
   font-size: 24px;
   line-height: 28px;
   text-align: center;
 }

 .versus{
   text-transform: uppercase;
   font-family: Roboto Condensed;
   font-style: normal;
 }

 .team-img{
   background: #C4C4C4;
   width: 100px;
   height: 100px;
 }

 .buy-tickets{
   background: rgba(12, 68, 55, 0.9);
   color: white;
   font-family: Roboto Condensed;
   text-align: center;
   border: 1px solid #000000;
   box-sizing: border-box;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 10px;
   display: inline;
 }
</style>

<script>
export default {
 
}
</script>