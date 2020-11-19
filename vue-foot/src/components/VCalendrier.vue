<template>
    <div>
        <div class="latest-and-upcoming-games">
            <div class="game-container">
            <p class="pt-roboto">Dernier match</p>
                <div class=last-game>
                    <div class="time-location">
                        <p class="time-location">Date/heure/lieu dernier match</p>
                    </div>
                    <div class="team-scores">
                        <div class="team">
                            <img :src="logoRCS" alt="logo-RCS" /> <br>
                            <p>Racing Club de Strasbourg</p>
                        </div>
                        <div class="scores">
                            <p>3 - 2</p>
                        </div>
                        <div class="team">
                            <img :src="logoOM" alt="logo-OM" /> <br>
                            <p>Olympique de Marseille</p>
                        </div>
                    </div>
                </div>
            </div>            
            <div class="game-container">
            <p class="pt-roboto">Prochain match</p>
                <div class=next-game>
                    <div class="time-location">
                        <p class="time-location">Date/heure/lieu dernier match</p>
                    </div>
                    <div class="team-scores">
                        <div class="team">
                            <img :src="logoPSG" alt="logo-PSG" /> <br>
                            <p>Paris Saint-Germain</p>
                        </div>
                        <div class="VS">
                            <p class="VS">VS</p>
                        </div>
                        <div class="team">
                            <img :src="logoTFC" alt="logo-tfc" /> <br>
                            <p>Toulouse Football Club</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="results-container">
        <p class="month">Novembre</p>
            <div class="game-results">
                <div class="date-hour-type">
                    <p>Date et heure du match</p>
                    <p>Type de match</p>
                </div>
                
                <div class="team-results">
                    <img :src="logoRCS" alt="logo-RCS" /> <br>
                    <p>Racing Club de Strasbourg</p>
                </div>
                <div class="scores-results">
                    <p>3 - 2</p>
                </div>
                <div class="team-results">
                    <img :src="logoOM" alt="logo-OM" /> <br>
                    <p>Olympique de Marseille</p>
                </div>
            </div>       
        </div>        
    </div>
</template>

<script>
export default {
    name: 'Calendrier',
    data(){
        return{
            logoRCS: require('@/assets/logos-equipes/RCS.svg'),
            logoPSG: require('@/assets/logos-equipes/PSG.svg'),
            logoOM: require('@/assets/logos-equipes/OM.svg'),
            logoTFC: require('@/assets/logos-equipes/TFC.svg')
        }        
    }
}
</script>

<style>

.latest-and-upcoming-games img {
  height: 70px;
}
.latest-and-upcoming-games{
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-left: 70px;
    margin-right: 70px;
}
.latest-and-upcoming-games, p{
    font-family: "Roboto Condensed", sans-serif;
}

.game-container{
    display: flex;
    flex-direction: column;
}

.last-game{
    background-color: rgba(12, 68, 55, 0.8);
    border-radius: 10px;
    padding: 50px 30px 50px 30px;
    width: 500px;
    display: flex;
    flex-direction: column;
    border:1px solid black
}

.next-game{
    border-radius: 10px;
    padding: 50px;
    width: 550px;
    display: flex;
    flex-direction: column;
    border:1px solid black
}

.time-location{
    text-align: center;
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 1.2rem;
}

.team-scores{
    display: flex;
    justify-content: space-around;
    }

.scores{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 25px;
}

.team{
    display:flex;
    align-items: center;
    flex-direction: column;
    text-transform: uppercase;
    text-align: center;
}

.pt-roboto{
  font-weight: bold;
  font-size: 2rem;
  color: #000;
}

.VS{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 15px;
}



/**RESULTATS */




.month{
    font-weight: bold;
    font-size: 2rem;
    color: #000;
}

.results-container img {
  height: 70px;
}
.results-container{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin-top: 30px;
    margin-left: 70px;
    margin-right: 70px;

}

.results-container, p{
    font-family: "Roboto Condensed", sans-serif;
}


.game-results{
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(0, 0, 0);
    margin-bottom: 15px;
    padding: 30px 0px;    
}

.date-hour-type{
    margin-bottom: 15px;
    font-size: 1.2rem;
    display:flex;
    flex-direction: column;
}


.date-hour-type p:nth-child(1){
    color: #991917;
    font-weight: bold;
}
.scores-results{
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 25px;
}

.team-results{
    display:flex;
    align-items: center;
    flex-direction: column;
    text-transform: uppercase;
    text-align: center;
}




/**RESPONSIVE */
@media screen and (max-width: 800px){
    .last-game{
        width: 300px;
        margin: auto;
    }

    .next-game{
        width: 300px;
        margin: auto;
    }

    .pt-roboto{
        font-size: 1.5rem;
        text-align: center;
    }
    .latest-and-upcoming-games{
        flex-direction: column-reverse;
        padding-bottom: 15px;
        padding-top: 15px;
    }

}

</style>