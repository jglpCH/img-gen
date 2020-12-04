<template>
  <div class="home mt-3 mb-3">
    <b-container>      
      <!-- Buttons -->
      <b-button v-b-toggle.name  class="collapse-button" v-bind:class="[btnName ? 'activeborder' : '']" @click="btnName = !btnName">{{ $t('SELECTIONS.name_title') }}</b-button>
      <b-button v-b-toggle.plattform class="collapse-button ml-2" v-bind:class="[btnPlattform ? 'activeborder' : '']" @click="btnPlattform = !btnPlattform">{{ $t('SELECTIONS.social_media_template') }}</b-button>
      <b-button v-b-toggle.background class="collapse-button ml-2" v-bind:class="[btnImage ? 'activeborder' : '']" @click="btnImage = !btnImage">{{ $t('SELECTIONS.background_image_title') }}</b-button>
      <b-button v-b-toggle.border class="collapse-button ml-2" v-bind:class="[btnBorder ? 'activeborder' : '']" @click="btnBorder = !btnBorder">{{ $t('SELECTIONS.border_title') }}</b-button>
      <b-button v-b-toggle.logo class="collapse-button ml-2" v-bind:class="[btnLogo ? 'activeborder' : '']" @click="btnLogo = !btnLogo">{{ $t('SELECTIONS.logo_title') }}</b-button>
      <b-button v-b-toggle.bar class="collapse-button ml-2" v-bind:class="[btnBar ? 'activeborder' : '']" @click="btnBar = !btnBar">{{ $t('SELECTIONS.bar_title') }}</b-button>

      <!-- Sections -->
      <b-collapse id="name" class="mt-2" visible v-model="btnName">
        <NameSection @socialMediaName="socialMediaNameSelection"></NameSection>
      </b-collapse>

      <b-collapse id="plattform" class="mt-2" v-model="btnPlattform">
        <SocialMediaSelection @plattform="plattformSelection" @template="templateSelection"></SocialMediaSelection>
      </b-collapse>

      <b-collapse id="background" class="mt-2" v-model="btnImage">
        <BackgroundImage></BackgroundImage>
      </b-collapse>

      <b-collapse id="border" class="mt-2" v-model="btnBorder">

      </b-collapse>

      <b-collapse id="logo" class="mt-2" v-model="btnLogo">

      </b-collapse>

      <b-collapse id="bar" class="mt-2" v-model="btnBar">

      </b-collapse>

      <Generator 
        :name="this.socialMediaObject.name" 
        :plattform="this.socialMediaObject.plattform"
        :template="this.socialMediaObject.template"></Generator>
    </b-container>

    <!-- <Generator/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Generator from '@/components/Generator.vue'
import NameSection from '@/components/NameSection.vue'
import SocialMediaSelection from '@/components/SocialMediaSelection.vue'
import BackgroundImage from '@/components/BackgroundImage.vue'

export default {
  name: 'Home',
  components: {
    Generator,
    NameSection,
    SocialMediaSelection,
    BackgroundImage
  },
  data: function() 
  {
    return {
      btnName: true,
      btnPlattform: false,
      btnImage: false,
      btnBorder: false,
      btnLogo: false,
      btnBar: false,
      socialMediaObject: 
      {
        name: '',
        plattform: 'all',
        template: {}
      }
    }
  },
  methods: 
  {
    plattformSelection(plattform)
    {
      this.socialMediaObject.plattform = plattform
    },
    socialMediaNameSelection(name)
    {
      this.socialMediaObject.name = name.trim()
    },
    templateSelection(template)
    {
      this.socialMediaObject.template = template
    }
  }
}
</script>

<style lang="scss">
div > .collapse-button
{
  background-color: $green-light;
  border-color: $green-light;

  &:hover, &:active, &:focus
  {
    background-color: $blue-light;
    border-color: $blue-light;
  }
}

*:active
{
  outline: none;
}

div > .activeborder
{
  border: 2px solid $green-dark;
}
</style>
