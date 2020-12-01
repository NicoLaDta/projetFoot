<template>
  <div class="container-classement">
    <h1 class="text-center mb-5 mt-0">Classement à la xxx journée</h1>
    <table>
      <tr>
        <th>Place</th>
        <th>Equipe</th>
        <th>Points</th>
        <th>Journée</th>
      </tr>
      <tr>
        <td>1</td>
        <td>xxx</td>
        <td>xxx</td>
        <td>xxx</td>
      </tr>
      <tr>
        <td>2</td>
        <td>xxx</td>
        <td>xxx</td>
        <td>xxx</td>
      </tr>
      <tr>
        <td>3</td>
        <td>xxx</td>
        <td>xxx</td>
        <td>xxx</td>
      </tr>
      <tr>
        <td>4</td>
        <td>xxx</td>
        <td>xxx</td>
        <td>xxx</td>
      </tr>
      <tr>
        <td>5</td>
        <td>xxx</td>
        <td>xxx</td>
        <td>xxx</td>
      </tr>
      <tr>
        <td>6</td>
        <td>xxx</td>
        <td>xxx</td>
        <td>xxx</td>
      </tr>
      <tr>
        <td>7</td>
        <td>xxx</td>
        <td>xxx</td>
        <td>xxx</td>
      </tr>
      <tr>
        <td>8</td>
        <td>xxx</td>
        <td>xxx</td>
        <td>xxx</td>
      </tr>
      <tr>
        <td>9</td>
        <td>xxx</td>
        <td>xxx</td>
        <td>xxx</td>
      </tr>
      <tr>
        <td>10</td>
        <td>xxx</td>
        <td>xxx</td>
        <td>xxx</td>
      </tr>
      <tr>
        <td>11</td>
        <td>xxx</td>
        <td>xxx</td>
        <td>xxx</td>
      </tr>
      <tr>
        <td>12</td>
        <td>xxx</td>
        <td>xxx</td>
        <td>xxx</td>
      </tr>
      <tr>
        <td>13</td>
        <td>xxx</td>
        <td>xxx</td>
        <td>xxx</td>
      </tr>
      <tr>
        <td>14</td>
        <td>xxx</td>
        <td>xxx</td>
        <td>xxx</td>
      </tr>
      <tr>
        <td>15</td>
        <td>xxx</td>
        <td>xxx</td>
        <td>xxx</td>
      </tr>
      <tr>
        <td>16</td>
        <td>xxx</td>
        <td>xxx</td>
        <td>xxx</td>
      </tr>
      <tr>
        <td>17</td>
        <td>xxx</td>
        <td>xxx</td>
        <td>xxx</td>
      </tr>
      <tr>
        <td>18</td>
        <td>xxx</td>
        <td>xxx</td>
        <td>xxx</td>
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
export default {
  name: "Classement",
};
</script>