<template>
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
          <button type="button">Billets</button>
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

    <div class="find-us-container">
      <h1>Où nous trouver ?</h1>

      <div class="find-us">
        <div class="map">
<iframe width="100%" height="300px" frameborder="0" allowfullscreen src="//umap.openstreetmap.fr/fr/map/boutique-redstar_530423?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&allowEdit=false&moreControl=false&searchControl=null&tilelayersControl=null&embedControl=true&datalayersControl=true&onLoadPanel=undefined&captionBar=false&locateControl=true#15/48.9075/2.3430"></iframe>  </div>

        <div class="adress">
          <p>RedStar Football Club</p>
          <p>92 Rue du Dr Bauer</p>
          <p>93400 Saint-Ouen</p>
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
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.map {
  width: 574px;
  height: 321px;
}

.adress {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.3rem;
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

  .map {
    width: 90%;
  }
}
</style>

<script>
export default {};
</script>

