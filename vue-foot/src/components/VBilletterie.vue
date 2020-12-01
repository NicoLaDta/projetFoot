<template>
  <div>
    <div class="container-billetterie">
      <h1 class="title font-bold not-italic text-center">Prochains matchs</h1>
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
    </div>

    <div class="find-us-container">
      <h1>Où nous trouver ?</h1>

      <div class="find-us flex flex-col md:flex-row">
        <iframe
          class="md:w-6/12 w-full"
          height="350px"
          frameborder="0"
          allowfullscreen
          src="//umap.openstreetmap.fr/fr/map/boutique-redstar_530423?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&datalayers=1500423#16/48.9067/2.3425"
        ></iframe>
        <div class="adress flex justify-center items-center md:w-6/12 w-full">
          <p>
            <span class="italic font-bold">RedStar Football Club</span><br />
            92 Rue du Dr Bauer<br />
            93400 Saint-Ouen
          </p>
          <br />
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
.container-billetterie h1 {
  font-size: 1.5rem;
  font-weight: bold;
}
.billetterie {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  max-width: 1300px;
  width: 100%;
}

.billetterie-bloc {
  border-radius: 10px;
  padding: 50px;
  width: 45%;
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

/* ———————————————— */
/* OU NOUS TROUVER */
/* ———————————————— */
.find-us-container {
  display: flex;
  flex-direction: column;
  margin-left: 150px;
  margin-right: 150px;
  margin-bottom: 40px;
}

.find-us-container h1 {
  font-size: 1.5rem;
  font-family: Roboto Condensed;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}
.find-us-container p {
  font-size: 1.25rem;
  text-align: center;
}


.map {
  width: 50%;
  justify-content: center;
}

@media screen and (max-width: 1000px) {
  .container-billetterie {
    margin: auto;
  }

  .billetterie-bloc {
    width: 80%;
    font-size: 1rem;
  }

  .find-us-container {
    margin: 0;
    with: 100%;
  }

  .find-us {
    flex-direction: column-reverse;
    margin: auto;
    text-align: center;
    font-size: 1rem;
    width: 95%;
    align-items: center;
    margin-bottom: 40px;
  }

}
@media screen and (max-width: 700px) {
  .billetterie-bloc {
    width: 90%;
  }
}
</style>

<script>
export default {};
</script>

