<template>
    <div>
        <div class="calendrier">
            <div class="last-game">
                <p class="pt-roboto">Date/heure/lieu dernier match</p>
                <div class="last-game-board">
                    <img :src="logoRCS" alt="logo-RCS" />
                        <div class="last-game-scores">
                            <p>Score 1</p>
                            <p> - </p>
                            <p>Score 2</p>
                        </div>
                    <img :src="logoOM" alt="logo-OM" />
                </div>
                <div class="teams-name">
                    <p>Nom équipe 1</p>
                    <p>Nom équipe 2</p>
                </div>
            </div>
            <div class="next-game">
                <p class="pt-roboto">Date/heure/lieu prochain match</p>
                <div class="next-game-board">
                    <img :src="logoPSG" alt="logo-psg" />
                    <p> VS </p>
                    <img :src="logoTFC" alt="logo-tfc" />
                </div>
                    <div class="teams-name">
                    <p>Nom équipe 1</p>
                    <p>Nom équipe 2</p>
                </div>
            </div>

        </div>
        <div class="resultats">

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

.calendrier, p{
    font-family: "Roboto Condensed", sans-serif;
}

.calendrier img {
  width: 70px;
}

.calendrier{
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
}

.last-game{
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  background-color: #0C4437;
  border-radius: 10px;
  padding: 40px;
  width: 550px;
}

.last-game-board{
    display: flex;
  justify-content: space-between;
}

.last-game-board, p{
    align-items: center;
    justify-content: space-around;
}

.last-game-scores{
    justify-content: space-around;
}

.next-game{
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  background-color:rgb(218, 218, 218);
  border-radius: 10px;
  padding: 40px;
  width: 550px;
}

.next-game-board{
    display: flex;
  justify-content: space-between;
}

.next-game-board, p{
    align-items: center;
}

.teams-name{
  font-weight: bold;
  font-size: 1.5rem;
  color: #000;
}

.pt-roboto{
  font-weight: bold;
  font-size: 2rem;
  color: #000;
}
</style>