<template>
  <div>
    <b-card
      class="mb-2"
    >
      <b-card-title>
        {{ $t('SELECTIONS.social_media_template') }}
      </b-card-title>

      <b-card-body>
        <b-container> 
          <b-row>
            <b-col cols="1">
              <button type="button" v-bind:class="[plattform == 'twitter' ? 'active' : '', 'btn', 'button-selection' ]" class="" @click="socialMediaSelection('twitter')">
                <img src="@/assets/img/svg/twitter.svg"> 
              </button>
            </b-col>              
            <b-col cols="1">
              <button type="button" v-bind:class="[plattform == 'facebook' ? 'active' : '', 'btn', 'button-selection' ]" @click="socialMediaSelection('facebook')">
                <img src="@/assets/img/svg/facebook.svg"> 
              </button>
            </b-col>              
            <b-col cols="1">
              <button type="button" v-bind:class="[plattform == 'instagram' ? 'active' : '', 'btn', 'button-selection' ]" @click="socialMediaSelection('instagram')">
                <img src="@/assets/img/svg/instagram.svg"> 
              </button>
            </b-col>              
            <b-col cols="1">
              <button type="button" v-bind:class="[plattform == 'general' ? 'active' : '', 'btn', 'button-selection' ]" @click="socialMediaSelection('general')">
                <img src="@/assets/img/svg/general.svg"> 
              </button>
            </b-col>

            <b-col cols="1">        
              <div class="divider"></div>
            </b-col>

            <b-col>
              <b-container>
                <b-row>
                  <b-col v-for="(social, index) in plattfromTemplatesSizes[plattform].names" :key="social" align-self="center">
                      <button 
                        type="button" 
                        v-bind:class="[template == social ? 'active' : '' ,'btn', 'button-social-text']" 
                        @click="templateSelection(social, index)"
                      >
                        {{social}}
                      </button>
                  </b-col>
                </b-row>
              </b-container>
            </b-col>

          </b-row>
        </b-container>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'SocialMediaSelection',
  data: function () {
    return {
      plattform: 'twitter',
      template: 'Twitter Cover',
      plattfromTemplatesSizes:
			{
				twitter:
				{
          names:      ['Twitter Cover', 'Twitter Post'],
          shortnames: ['cover', 'post'],
					cover:      {x: 1500, y: 500},
					post:       {x:  900, y: 450}
				},
				facebook: 
				{
          names:      ['Facebook Cover', 'Facebook Post', 'Facebook Story'],
          shortnames: ['cover', 'post', 'story'],
					cover:      {x:  640, y:  360},
					post:       {x: 1200, y: 1200},
					story:      {x: 1080, y: 1920}
				},
				instagram: 
				{
          names:      ['Instagram Post', 'Instagram Post Hochformat', 'Instagram Story', 'Instagram Slider'],
          shortnames: ['post', 'post_high', 'story', 'slider'],
					post:       {x: 1080, y: 1080},
					post_high:  {x: 1080, y: 1350},
					story:      {x: 1080, y: 1920},
					slider:     {x:    0, y: 1350}
				},
				general:
				{
					testomonial:{},
					parole:     {},
					vote:       {},
				}
			}
    }
  },
  props: 
  {
  },
  methods:
  {
    socialMediaSelection: function (plattform) 
    {
      this.plattform = plattform
      this.$emit('plattform', this.plattform)
    },

    templateSelection(template, index)
    {
      this.template = template
      this.$emit('template', this.plattfromTemplatesSizes[this.plattform][this.plattfromTemplatesSizes[this.plattform].shortnames[index]])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button:focus{
  outline: none;
  box-shadow: none;
}

.button-selection
{
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 1px solid $border-black;
}

.button-social-text
{
  border: 1px solid $border-black;
}

.active
{
  border: 3px solid $border-active;
}

.plattform-selection
{
  text-align: left;
  max-width: 500px;
  margin: 0;
}

.divider
{
  width: 1px;
  height: 60px;
  text-align: right;
  border-right: 1px solid black;
}
</style>
