<template>
  <div>
    <b-card
        title="Name"
        class="mb-2"
        trim
    >
        <b-card-text>
            <label for="socialMediaNameID">{{ $t('SELECTIONS.NAME.name') }}</label>
            
            <!-- Input Field, if no name is provided, an error message is shown (invalid-feedback from below) -->
            <b-form-input 
                id="socialMediaNameID" 
                type="search" 
                @input="insertedName" 
                v-model="socialMediaName" 
                placeholder="Name" 
                :state=NameState 
                style="max-width: 500px">
                </b-form-input>

            <b-form-invalid-feedback id="input-live-feedback">
                {{ $t('SELECTIONS.NAME.name_hint') }}
            </b-form-invalid-feedback>
        </b-card-text>
  </b-card>
  </div>
</template>

<script>
export default {
    name: 'NameSection',
    data: function () {
        return {
        socialMediaName: ''
        }
    },
    computed:
    {
        // Check if a name is insereted
        NameState()
        {
            return this.socialMediaName.length > 0 ? true : false
        }
    },
    methods: 
    {
        // Emit Name to the parent Component
        insertedName()
        {
            this.$emit('socialMediaName', this.socialMediaName)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
