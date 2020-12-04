<template>
  <div class="about">
    <p class="info" v-html="$t('CONTACT.main_info')"></p>

    <p class="info" v-html="$t('CONTACT.second_info')"></p>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.info{
  padding: 20px 150px;

  @media screen and (max-width: 700px) {
    padding: 20px 15px;
  }
}
</style>
