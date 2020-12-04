<template>
  <div class="news">
    <p class="info" v-html="$t('NEWS')"></p>

    <b-card
      title="Die erste News im neuen Generator"
      class="mb-2">
      <b-card-text>
        <p class="info">
          Herzlich willkommen beim neuen jGLP Generator.<br>
          Der alte Generator wurde zu Grabe getragen, da er den ganze neuen Featureswünschen und CI / CD Vorlagen nicht mehr standhalten konnte. 
          Aus diesem Grund wurd diese neue Version entwickelt.<br>
          Bitte beachte, der Generator ist noch längst nicht fertig, er befindet sich immer noch im Aufbau und wird ständig verbessert und mit neuen Features und Vorlagen versehen.
        </p>

        <ul>
          <li>Neues Design: Der Generator erscheint in einem neuen Gewand</li>
          <li>Neue CI/CD Seite: Unter dem Menüpunkt CI/CD sieht man die neuen CI/CD Regeln. Diese wurden im Generator so umgesetzt, gelten aber auch darüber hinaus ;)</li>
        </ul>
      </b-card-text>
      <b-card-footer footer-class="footer">
        30.08.2020 | Tobias Gatschet
      </b-card-footer>
    </b-card>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
li {
  list-style: none;
  padding: 5px 200px;

  &::before{
    content: ' ';
    display: inline-block;
    height: 15px;
    width: 15px;
    background-image: url('../assets/img/svg/blatt.svg');
    padding-right: 20px;
    background-repeat: no-repeat;
  }

  @media screen and (max-width: 900px) {
    padding: 5px 5px;
  }
}

ul{
  @media screen and (max-width: 700px) {
    padding-inline-start: 5px;
  }
}

.footer{
  font-size: 0.8em;
  text-align: right;
  background-color: $background-light-grey;
}

.info{
  padding: 20px 150px;

  @media screen and (max-width: 700px) {
    padding: 20px 5px;
  }
}
</style>
