<template>
  <div id="app">
    <nav>
      <b-nav class="navbar navbar-expand-sm navbar-dark static-top">
        <div>
          <b-nav-item :to="`/${$i18n.locale}/`">
            <img src="@/assets/img/svg/blatt.svg" width="30px" height="30px">
          </b-nav-item>
        </div>
        <b-nav-item :to="`/${$i18n.locale}/`">{{ $t('NAVIGATION.home') }}</b-nav-item>
        <b-nav-item :to="`/${$i18n.locale}/ci`">{{ $t('NAVIGATION.ci') }}</b-nav-item>
        <b-nav-item :to="`/${$i18n.locale}/news`">{{ $t('NAVIGATION.news') }}</b-nav-item>
        <b-nav-item :to="`/${$i18n.locale}/contact`">{{ $t('NAVIGATION.contact') }}</b-nav-item>

        <b-dropdown class="m-md-2" variant="dark" size="sm">
          <template v-slot:button-content>
            <img :src="require(`@/assets/img/svg/flags/${$i18n.locale}.svg`)" class="icon">
            {{$i18n.locale}}
          </template>
          <b-dropdown-item @click="setLocale('de')" class="m-md-2"><img src="@/assets/img/svg/flags/de.svg" class="icon">   de</b-dropdown-item>
          <b-dropdown-item @click="setLocale('fr')" class="m-md-2"><img src="@/assets/img/svg/flags/fr.svg" class="icon">   fr</b-dropdown-item>
          <b-dropdown-item @click="setLocale('it')" class="m-md-2"><img src="@/assets/img/svg/flags/it.svg" class="icon">   it</b-dropdown-item>
        </b-dropdown>
      </b-nav>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods:{
    setLocale(lang){
        this.$i18n.locale = lang
        this.$router.push({
        params: { lang: lang }
      }).catch(()=>{})
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: $font-main;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  background-color: $blue-dark;

  li {
    &:hover:not(:first-child) {
      background-color: $green-light;
    }
  }

  a {
    color: $font-light;
    font-weight: bold;

    &:hover{
      color: $font-dark;
    }

    &.router-link-exact-active {
      color: $green-light;

      &:hover{
        color: $font-dark;
      }
    }
  }

  .icon{
    height: 15px;
    width: 15px;
  }

  .btn-dark{
    background-color: transparent;
  }
}
</style>
