<template>
<div>
  <div class="container-billetterie">
    <div class="billetterie">
      <div class="billetterie-bloc">
        <div class="time-location">
          <p>12/01/2020 - 21:00</p>
          <p>Stade1</p>
        </div>
        <div class="team-scores">
          <div class="team">
            <img :src="logoREDSTAR" alt="logo-redstar" /> <br />
            <p>Redstar Football Club</p>
          </div>
          <div class="VS">
            <p>VS</p>
          </div>
          <div class="team">
            <img :src="logoPARISFC" alt="logo-tfc" /> <br />
            <p>Paris Football Club</p>
          </div>
        </div>
        <div class="button">
           <router-link to="/VBilleterieInfo">
          <button type="button">Billets</button>
           </router-link>
        </div>
      </div>

      <div class="billetterie-bloc">
        <div class="time-location">
          <p>12/01/2020 - 21:00</p>
          <p>Stade2</p>
        </div>
        <div class="team-scores">
          <div class="team">
            <img :src="logoREDSTAR" alt="logo-redstar" /> <br />
            <p>Redstar Football Club</p>
          </div>
          <div class="VS">
            <p>VS</p>
          </div>
          <div class="team">
            <img :src="logoPARISFC" alt="logo-tfc" /> <br />
            <p>Paris Football Club</p>
          </div>
        </div>
        <div class="button">
          <button type="button">Billets</button>
        </div>
      </div>
      <div class="billetterie-bloc">
        <div class="time-location">
          <p>12/01/2020 - 21:00</p>
          <p>Stade3</p>
        </div>
        <div class="team-scores">
          <div class="team">
            <img :src="logoREDSTAR" alt="logo-redstar" /> <br />
            <p>Redstar Football Club</p>
          </div>
          <div class="VS">
            <p>VS</p>
          </div>
          <div class="team">
            <img :src="logoPARISFC" alt="logo-tfc" /> <br />
            <p>Paris Football Club</p>
          </div>
        </div>
        <div class="button">
          <button type="button">Billets</button>
        </div>
      </div>
      <div class="billetterie-bloc">
        <div class="time-location">
          <p>12/01/2020 - 21:00</p>
          <p>Stade4</p>
        </div>
      </div>
        <div class="team-scores">
          <div class="team">
            <img :src="logoREDSTAR" alt="logo-redstar" /> <br />
            <p>Redstar Football Club</p>
          </div>
          <div class="VS">
            <p>VS</p>
          </div>
          <div class="team">
            <img :src="logoPARISFC" alt="logo-tfc" /> <br />
            <p>Paris Football Club</p>
          </div>
        </div>
        <div class="button">
          <button type="button">Billets</button>
        </div>
    </div>
  </div>
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
         <router-link to="/VBilleterieInfo">
         <div class="buy-tickets text-center px-3 rounded text-white">
           Billets
         </div>
          </router-link>
     </div>

    <p class="title font-bold not-italic text-center">Ou nous trouver ?</p>

    <div class="find-us flex justify-center items-center">
      <div class="map bg-green-300 justify-center"></div>

      <div class="adress">
        <p>RedStar Football Club</p>
        <p>92 Rue du Dr Bauer</p>
        <p>93400 Saint-Ouen</p>
      </div>
    </div>

    <div class="find-us-container">
      <h1>Où nous trouver ?</h1>

      <div class="find-us flex flex-col md:flex-row">
          <iframe class="md:w-6/12 w-full" height="250px" frameborder="0" allowfullscreen src="//umap.openstreetmap.fr/fr/map/boutique-redstar_530423?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&datalayers=1500423#16/48.9067/2.3425"></iframe>  
        <div class="adress flex justify-center items-center md:w-6/12 w-full">
          <p><span class="italic font-bold">RedStar Football Club</span><br>
          92 Rue du Dr Bauer<br>
          93400 Saint-Ouen</p><br>
        </div>        
      </div>
    </div>
  </div>
</div>
</template>

<style lang="postcss" scoped>
.container-billetterie {
  font-family: Roboto Condensed;
  margin-right: 100px;
  margin-left: 100px;
  display: flex;
  margin-bottom: 40px;
  flex-direction: column;
}

.billetterie {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  max-width: 1300px;
}

.billetterie-bloc {
  border-radius: 10px;
  padding: 50px;
  width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 2px solid #000000;
  height: 320px;
  font-size: 1.2rem;
  margin: 10px;
}

.versus {
  font-style: normal;
}

.team-img {
  width: 100px;
  height: 100px;
}

.find-us-container {
  display: flex;
  flex-direction: column;
}

.find-us-container h1 {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}

.find-us {
  /* display: flex;
  flex-direction: row;
  justify-content: center; */
}

.map {
  width: 50%;
  justify-content: center;
}

@media screen and (max-width: 800px) {
  .container-billetterie {
    margin: auto;
  }

  .billetterie-bloc {
    width: 300px;
    font-size: 1rem;
  }

  .find-us-container {
    margin: auto;
  }

  .find-us {
    flex-direction: column-reverse;
    margin: auto;
    text-align: center;
    font-size: 1rem;
  }
}
</style>

<script>
export default {};
</script>

