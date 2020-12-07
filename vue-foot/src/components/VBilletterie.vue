<template>
  <div>
    <div class="container-billetterie">
      <h1 class="title font-bold not-italic text-center">Prochains matchs</h1>
      <div class="billetterie">
        <div class="billetterie-bloc">
          <div class="time-location">
            <p> {{result.events[0].dateEvent}} - {{result.events[0].strTime}}</p>
            <p>{{ result.events[0].strVenue }}</p>
          </div>
          <div class="team-scores">
            <div class="team">
              <img
                :src="require(`@/assets/logos-equipes/${logoHomeTeam1}.png`)"
                alt="logo du club"
              />
              <br />
              <p>{{result.events[0].strHomeTeam}}</p>
            </div>
            <div class="VS">
              <p>VS</p>
            </div>
            <div class="team">
              <img
                :src="require(`@/assets/logos-equipes/${logoAwayTeam1}.png`)"
                alt="logo du club"
              />
              <br />
              <p>{{result.events[0].strAwayTeam}}</p>
            </div>
          </div>
          <div class="button">
            <router-link to="/VBilletterieInfo">
              <button type="button">Billets</button>
            </router-link>
          </div>
        </div>

        <div class="billetterie-bloc">
          <div class="time-location">
            <p>{{result.events[1].dateEvent}} - {{result.events[1].strTime}}</p>
            <p>{{ result.events[1].strVenue }}</p>
          </div>
          <div class="team-scores">
            <div class="team">
              <img
                :src="require(`@/assets/logos-equipes/${logoHomeTeam2}.png`)"
                alt="logo du club"
              />
              <br />
              <p>{{result.events[1].strHomeTeam}}</p>
            </div>
            <div class="VS">
              <p>VS</p>
            </div>
            <div class="team">
              <img
                :src="require(`@/assets/logos-equipes/${logoAwayTeam2}.png`)"
                alt="logo du club"
              />
              <br />
              <p>{{result.events[1].strAwayTeam}}</p>
            </div>
          </div>
          <div class="button">
            <router-link to="/VBilletterieInfo">
              <button type="button">Billets</button>
            </router-link>
          </div>
        </div>

        <div class="billetterie-bloc">
          <div class="time-location">
            <p>{{result.events[2].dateEvent}} - {{result.events[2].strTime}}</p>
            <p>{{ result.events[2].strVenue }}</p>
          </div>
          <div class="team-scores">
            <div class="team">
             <img
                :src="require(`@/assets/logos-equipes/${logoHomeTeam3}.png`)"
                alt="logo du club"
              />
              <br />
              <p>{{result.events[2].strHomeTeam}}</p>
            </div>
            <div class="VS">
              <p>VS</p>
            </div>
            <div class="team">
              <img
                :src="require(`@/assets/logos-equipes/${logoAwayTeam3}.png`)"
                alt="logo du club"
              />
              <br />
              <p>{{result.events[2].strAwayTeam}}</p>
            </div>
          </div>
          <div class="button">
            <router-link to="/VBilletterieInfo">
              <button type="button">Billets</button>
            </router-link>
          </div>
        </div>

        <div class="billetterie-bloc">
          <div class="time-location">
            <p>{{result.events[3].dateEvent}} - {{result.events[3].strTime}}</p>
            <p>{{ result.events[3].strVenue }}</p>
          </div>
          <div class="team-scores">
            <div class="team">
              <img
                :src="require(`@/assets/logos-equipes/${logoHomeTeam4}.png`)"
                alt="logo du club"
              />
              <br />
              <p>{{result.events[3].strHomeTeam}}</p>
            </div>
            <div class="VS">
              <p>VS</p>
            </div>
            <div class="team">
              <img
                :src="require(`@/assets/logos-equipes/${logoAwayTeam4}.png`)"
                alt="logo du club"
              />
              <br />
              <p>{{result.events[3].strAwayTeam}}</p>
            </div>
          </div>
          <div class="button">
            <router-link to="/VBilletterieInfo">
              <button type="button">Billets</button>
            </router-link>
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

.team img {
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

<<<<<<< HEAD
@media screen and (max-width: 1000px) {
=======
@media screen and (max-width: 800px) {
>>>>>>> 71820dba1e4c47261d359f1206ccdbdc9a5c9875
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
import SportApi from "@/services/SportApi.js";
export default {
  data(){
    return{
      result: null,


      logoAwayTeam1: null,
      logoAwayTeam2: null,
      logoAwayTeam3: null,
      logoAwayTeam4: null,

      logoHomeTeam1: null,
      logoHomeTeam2: null,
      logoHomeTeam3: null,
      logoHomeTeam4: null,


    }
  },
  async created() {
    SportApi.setApiKey(1); //defaults to 1, set for Patreon
    let nextEvents = await SportApi.getNext5EventsByTeamId(135467);
    this.result = nextEvents

    // ADD LINK LOGO
    // --------------------------
    //AWAY TEAM
    this.logoAwayTeam1 = nextEvents.events[0].strAwayTeam;
    this.logoAwayTeam2 = nextEvents.events[1].strAwayTeam;
    this.logoAwayTeam3 = nextEvents.events[2].strAwayTeam;
    this.logoAwayTeam4 = nextEvents.events[3].strAwayTeam;

    // HOME TEAM
    this.logoHomeTeam1 = nextEvents.events[0].strHomeTeam;
    this.logoHomeTeam2 = nextEvents.events[1].strHomeTeam;
    this.logoHomeTeam3 = nextEvents.events[2].strHomeTeam;
    this.logoHomeTeam4 = nextEvents.events[3].strHomeTeam;

  },
};
</script>
