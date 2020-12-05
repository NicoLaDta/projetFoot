<template>
  <div class="container-classement">
    <h1 class="text-center mb-5 mt-0">Classement à la {{result.table[0].played}}ème journée </h1>
    <table>
      <tr>
        <th>Place</th>
        <th>Equipe</th>
        <th>Journée</th>
        <th>G</th>
        <th>N</th>
        <th>P</th>
        <th>Points</th>
      </tr>
      <tr>
        <td>1</td>
        <td>{{result.table[0].name}}</td>
        <td>{{result.table[0].played}}</td>
        <td>{{result.table[0].win}}</td>
        <td>{{result.table[0].draw}}</td>
        <td>{{result.table[0].loss}}</td>
        <td>{{result.table[0].total}}</td>
      </tr>
      <tr>
        <td>2</td>
        <td>{{result.table[1].name}}</td>
        <td>{{result.table[1].played}}</td>
        <td>{{result.table[1].win}}</td>
        <td>{{result.table[1].draw}}</td>
        <td>{{result.table[1].loss}}</td>
        <td>{{result.table[1].total}}</td>
      </tr>
      <tr>
        <td>3</td>
        <td>{{result.table[2].name}}</td>
        <td>{{result.table[2].played}}</td>
        <td>{{result.table[2].win}}</td>
        <td>{{result.table[2].draw}}</td>
        <td>{{result.table[2].loss}}</td>
        <td>{{result.table[2].total}}</td>
      </tr>
      <tr>
        <td>4</td>
        <td>{{result.table[3].name}}</td>
        <td>{{result.table[3].played}}</td>
        <td>{{result.table[3].win}}</td>
        <td>{{result.table[3].draw}}</td>
        <td>{{result.table[3].loss}}</td>
        <td>{{result.table[3].total}}</td>
      </tr>
      <tr>
        <td>5</td>
        <td>{{result.table[4].name}}</td>
        <td>{{result.table[4].played}}</td>
        <td>{{result.table[4].win}}</td>
        <td>{{result.table[4].draw}}</td>
        <td>{{result.table[4].loss}}</td>
        <td>{{result.table[4].total}}</td>
      </tr>
      <tr>
        <td>6</td>
        <td>{{result.table[5].name}}</td>
        <td>{{result.table[5].played}}</td>
        <td>{{result.table[5].win}}</td>
        <td>{{result.table[5].draw}}</td>
        <td>{{result.table[5].loss}}</td>
        <td>{{result.table[5].total}}</td>
      </tr>
      <tr>
        <td>7</td>
        <td>{{result.table[6].name}}</td>
        <td>{{result.table[6].played}}</td>
        <td>{{result.table[6].win}}</td>
        <td>{{result.table[6].draw}}</td>
        <td>{{result.table[6].loss}}</td>
        <td>{{result.table[6].total}}</td>
      </tr>
      <tr>
        <td>8</td>
        <td>{{result.table[7].name}}</td>
        <td>{{result.table[7].played}}</td>
        <td>{{result.table[7].win}}</td>
        <td>{{result.table[7].draw}}</td>
        <td>{{result.table[7].loss}}</td>
        <td>{{result.table[7].total}}</td>
      </tr>
      <tr>
        <td>9</td>
        <td>{{result.table[8].name}}</td>
        <td>{{result.table[8].played}}</td>
        <td>{{result.table[8].win}}</td>
        <td>{{result.table[8].draw}}</td>
        <td>{{result.table[8].loss}}</td>
        <td>{{result.table[8].total}}</td>
      </tr>
      <tr>
        <td>10</td>
        <td>{{result.table[9].name}}</td>
        <td>{{result.table[9].played}}</td>
        <td>{{result.table[9].win}}</td>
        <td>{{result.table[9].draw}}</td>
        <td>{{result.table[9].loss}}</td>
        <td>{{result.table[9].total}}</td>
      </tr>
      <tr>
        <td>11</td>
        <td>{{result.table[10].name}}</td>
        <td>{{result.table[10].played}}</td>
        <td>{{result.table[10].win}}</td>
        <td>{{result.table[10].draw}}</td>
        <td>{{result.table[10].loss}}</td>
        <td>{{result.table[10].total}}</td>
      </tr>
      <tr>
        <td>12</td>
        <td>{{result.table[11].name}}</td>
        <td>{{result.table[11].played}}</td>
        <td>{{result.table[11].win}}</td>
        <td>{{result.table[11].draw}}</td>
        <td>{{result.table[11].loss}}</td>
        <td>{{result.table[11].total}}</td>
      </tr>
      <tr>
        <td>13</td>
        <td>{{result.table[12].name}}</td>
        <td>{{result.table[12].played}}</td>
        <td>{{result.table[12].win}}</td>
        <td>{{result.table[12].draw}}</td>
        <td>{{result.table[12].loss}}</td>
        <td>{{result.table[12].total}}</td>
      </tr>
      <tr>
        <td>14</td>
        <td>{{result.table[13].name}}</td>
        <td>{{result.table[13].played}}</td>
        <td>{{result.table[13].win}}</td>
        <td>{{result.table[13].draw}}</td>
        <td>{{result.table[13].loss}}</td>
        <td>{{result.table[13].total}}</td>
      </tr>
      <tr>
        <td>15</td>
        <td>{{result.table[14].name}}</td>
        <td>{{result.table[14].played}}</td>
        <td>{{result.table[14].win}}</td>
        <td>{{result.table[14].draw}}</td>
        <td>{{result.table[14].loss}}</td>
        <td>{{result.table[14].total}}</td>
      </tr>
      <tr>
        <td>16</td>
        <td>{{result.table[15].name}}</td>
        <td>{{result.table[15].played}}</td>
        <td>{{result.table[15].win}}</td>
        <td>{{result.table[15].draw}}</td>
        <td>{{result.table[15].loss}}</td>
        <td>{{result.table[15].total}}</td>
      </tr>
      <tr>
        <td>17</td>
        <td>{{result.table[16].name}}</td>
        <td>{{result.table[16].played}}</td>
        <td>{{result.table[16].win}}</td>
        <td>{{result.table[16].draw}}</td>
        <td>{{result.table[16].loss}}</td>
        <td>{{result.table[16].total}}</td>
      </tr>
      <tr>
        <td>18</td>
        <td>{{result.table[17].name}}</td>
        <td>{{result.table[17].played}}</td>
        <td>{{result.table[17].win}}</td>
        <td>{{result.table[17].draw}}</td>
        <td>{{result.table[17].loss}}</td>
        <td>{{result.table[17].total}}</td>
      </tr>
    </table>
  </div>
</template>

<style lang="postcss" scoped>
.container-classement {
  width: 100%;
  overflow: scroll;
}

.container-classement h1 {
  font-size: 1.5rem;
  font-weight: bold;
}
table {
  margin: auto;
  width: 600px;
  text-align: center;
  margin-bottom: 40px;
}
tr {
  border: solid 1px #eeeeee;
}
td {
  padding: 5px;
}

@media (max-width: 800px) {
  .table {
    display: none;
    width: 70%;
  }
}
</style>

<script>
import SportApi from "@/services/SportApi.js";
export default {
  name: "Classement",
  data(){
    return{
      result: null
    }
  },
  async created() {
    SportApi.setApiKey(1); //defaults to 1, set for Patreon
    let leaguelist = await SportApi.getLookupTableByLeagueIdAndSeason("4637", "2020-2021");
    console.log(leaguelist)
    this.result = leaguelist
  },
};
</script>