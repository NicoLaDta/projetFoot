<template>
  <div>
    <div class="latest-and-upcoming-games">
      <div class="game-container">
        <h1>Dernier match</h1>
        <div class="last-game">
          <div class="time-location">
            <p>07/01/2020 - 21:00</p>
            <p>Stade</p>
          </div>
          <div class="team-scores">
            <div class="team">
              <img :src="logoMFC" alt="logo-MFC" /> <br />
              <p>Le Mans FC</p>
            </div>
            <div class="scores">
              <p>3 - 2</p>
            </div>
            <div class="team">
              <img :src="logoREDSTAR" alt="logo-redstar" /> <br />
              <p>Redstar Football Club</p>
            </div>
          </div>
        </div>
      </div>
      <div class="game-container">
        <h1>Prochain match</h1>
        <div class="next-game">
          <div class="time-location">
            <p>12/01/2020 - 21:00</p>
            <p>Stade</p>
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

    <div class="results-container">
      <div class="december">
        <p class="month">Décembre</p>
        <div class="game-results">
          <div class="date-type">
            <p>15/12/19</p>
            <p class="hyphen">-</p>
            <p>Amical</p>
          </div>
          <div class="team-scores-results">
            <div class="team-results">
              <img :src="logoREDSTAR" alt="logo-RCS" /> <br />
              <p>Redstar Football Club</p>
            </div>
            <div class="scores-results">
              <p>2 - 1</p>
            </div>
            <div class="team-results">
              <img :src="logoPARISFC" alt="logo-OM" /> <br />
              <p>Paris Football Club</p>
            </div>
          </div>
        </div>
        <div class="game-results">
          <div class="date-type">
            <p>06/12/19</p>
            <p class="hyphen">-</p>
            <p>National</p>
          </div>
          <div class="team-scores-results">
            <div class="team-results">
              <img :src="logoMFC" alt="logo-MFC" /> <br />
              <p>Le Mans FC</p>
            </div>
            <div class="scores-results">
              <p>3 - 2</p>
            </div>
            <div class="team-results">
              <img :src="logoREDSTAR" alt="logo-RCS" /> <br />
              <p>Redstar Football Club</p>
            </div>
          </div>
        </div>
      </div>

      <div class="november">
        <p class="month">Novembre</p>
        <div class="game-results">
          <div class="date-type">
            <p>15/12/19</p>
            <p class="hyphen">-</p>
            <p>Amical</p>
          </div>
          <div class="team-scores-results">
            <div class="team-results">
              <img :src="logoREDSTAR" alt="logo-RCS" /> <br />
              <p>Redstar Football Club</p>
            </div>
            <div class="scores-results">
              <p>2 - 1</p>
            </div>
            <div class="team-results">
              <img :src="logoPARISFC" alt="logo-OM" /> <br />
              <p>Paris Football Club</p>
            </div>
          </div>
        </div>
        <div class="game-results">
          <div class="date-type">
            <p>06/12/19</p>
            <p class="hyphen">-</p>
            <p>National</p>
          </div>
          <div class="team-scores-results">
            <div class="team-results">
              <img :src="logoMFC" alt="logo-MFC" /> <br />
              <p>Le Mans FC</p>
            </div>
            <div class="scores-results">
              <p>3 - 2</p>
            </div>
            <div class="team-results">
              <img :src="logoREDSTAR" alt="logo-RCS" /> <br />
              <p>Redstar Football Club</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="add-more">
      <input
        type="button"
        id="add-more-button"
        class="add-more__button"
        value="Voir plus"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Calendrier",
  data() {
    return {
      logoMFC: require("@/assets/logos-equipes/MFC.svg"),
      logoPARISFC: require("@/assets/logos-equipes/ParisFC.svg"),
      logoREDSTAR: require("@/assets/logored.svg"),
    };
  },
  mounted() {
    let button = document.querySelector("#add-more-button");
    console.log(button);
    // let elementsAugust = document.querySelector('.august');
    // let elementsSeptember = document.querySelector('.september');
    // let elementsOctober = document.querySelector('.october');
    let elementsNovember = document.querySelector('.november');
    
    elementsNovember.classList.add('displayNone')
    // elementsOctober.classList.add('displayNone')
    // elementsSeptember.classList.add('displayNone')
    // elementsAugust.classList.add('displayNone')
    
    button.addEventListener("click", () => {      
    
    elementsNovember.classList.toggle("displayNone")
    // elementsOctober.classList.toggle("displayNone")
    // elementsSeptember.classList.toggle("displayNone")
    // elementsAugust.classList.toggle("displayNone")
        
      if (button.value === "Voir plus") {
        button.value = "Voir moins";
      } else {
        button.value = "Voir plus";
      }
    });
  },
};
</script>

<style>
.latest-and-upcoming-games img {
  height: 70px;
}
.latest-and-upcoming-games {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-left: 100px;
  margin-right: 100px;
}
.latest-and-upcoming-games,
p {
  font-family: "Roboto Condensed", sans-serif;
}

.game-container {
  display: flex;
  flex-direction: column;
}

.game-container h1{
  font-weight: bold;
  font-size: 1.5rem;
}
.last-game {
  background-color: rgba(12, 68, 55, 0.5);
  border-radius: 10px;
  padding: 50px 30px 50px 30px;
  width: 600px;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  font-size: 1.2rem;
}

.next-game {
  border-radius: 10px;
  padding: 50px;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 2px solid #000000;
  height: 320px;
  font-size: 1.2rem;
}

.time-location {
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 1.2rem;
}

.team-scores {
  display: flex;
  justify-content: space-around;
}

.scores {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: 25px;
  width: 80px;
}

.team {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
  text-align: center;
  width: 250px;
}



.VS {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 15px;
  width: 70px;
  flex-direction: column;
  justify-content: center;
}

.button {
  color: white;
  background-color: #0c4437;
  border-radius: 10px;
  width: 80px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
}

/***** */
/**RESULTATS */
/***** */

.results-container {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 100px;
  margin-right: 100px;
}

.results-container img {
  height: 70px;
}

.results-container,
p {
  font-family: "Roboto Condensed", sans-serif;
}

.month {
  font-weight: bold;
  font-size: 1.5rem;
}

.game-results {
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(0, 0, 0);
  margin-bottom: 15px;
  padding: 30px 0px;
}

.date-type {
  margin-bottom: 15px;
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  justify-content: center;
}

.date-type p:nth-child(1) {
  color: #991917;
  font-weight: bold;
}

.hyphen {
  display: none;
}

.team-scores-results {
  display: flex;
  justify-content: space-around;
  width: 600px;
}

.scores-results {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 25px;
}

.team-results {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
  text-align: center;
  width: 200px;
}

/* ------------- */
/* ADD MORE */
/* ------------- */

.displayNone {
  display: none;
}

.add-more {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.add-more__button {
  background: none;
  border: solid 2px #000;
  padding: 5px;
  border-radius: 5px;
  transition: ease 0.3s;
  cursor: pointer;
  width: 100px;
}
.add-more__button:hover {
  background-color: #991917;
  border: solid 2px #991917;
  color: #fff;
}

/**RESPONSIVE */
@media screen and (max-width: 800px) {
  .last-game {
    width: 300px;
    margin: auto;
    font-size: 1rem;
  }

  .next-game {
    width: 300px;
    margin: auto;
    font-size: 1rem;
    margin-bottom: 10px;
  }

  .time-location {
    margin-bottom: 0px;
  }

  .game-container h1{
    font-size: 1.5rem;
    text-align: center; 
  }

  .latest-and-upcoming-games {
    flex-direction: column-reverse;
    margin: auto;
    text-align: center;
  }

  .team-scores {
    width: 300px;
  }

  .scores {
    font-size: 2rem;
    width: 200px;
  }
  .results-container {
    margin: 40px;
  }

  .game-results {
    flex-direction: column;
    width: 300px;
    margin: auto;
  }

  .month {
    font-size: 1.5rem;
  }
  .team-scores-results {
    width: 300px;
  }

  .scores-results {
    width: 150px;
  }

  .date-type {
    flex-direction: row;
    justify-content: flex-start;
    font-size: 1.3rem;
  }

  .data-type,
  p {
    margin-right: 10px;
    margin-left: 10px;
  }

  .hyphen {
    display: contents;
    margin: 10px;
  }
}

@media screen and (max-width: 1100px) {
  .latest-and-upcoming-games {
    flex-direction: column-reverse;
    margin: auto;
    text-align: center;
  }

  .game-container {
    margin: auto;
  }
}
</style>