<!-- @format -->

<template>
    <div>
        <label for="socialMediaNameID">{{ $t('SELECTIONS.NAME.name') }}</label>

        <!-- Input Field, if no name is provided, an error message is shown (invalid-feedback from below) -->
        <b-form-input
            id="socialMediaNameID"
            type="search"
            @input="insertedName"
            v-model="socialMediaName"
            placeholder="Name"
            :state="NameState"
            style="max-width: 500px"
        >
        </b-form-input>

        <b-form-invalid-feedback id="input-live-feedback">
            {{ $t('SELECTIONS.NAME.name_hint') }}
        </b-form-invalid-feedback>

        <button
            class="btn btn-primary mt-2"
            :disabled="!this.NameState"
            @click="this.save"
        >
            Als png speichern
        </button>

        <button
            class="btn btn-primary mt-2 ml-2"
            :disabled="!this.NameState"
            @click="this.savejpg"
        >
            Als jpeg speichern
        </button>

        <button
            class="btn btn-primary mt-2 ml-2"
            :disabled="!this.NameState"
            @click="this.savepdf"
        >
            Als pdf speichern
        </button>
    </div>
</template>

<script>
import {jsPDF} from 'jspdf'

export default {
    name: 'NameSection',
    data: function() {
        return {
            socialMediaName: '',
        }
    },
    computed: {
        // Check if a name is insereted
        NameState() {
            return this.socialMediaName.length > 0 ? true : false
        },
    },
    methods: {
        // Emit Name to the parent Component
        insertedName() {
            this.$emit('socialMediaName', this.socialMediaName)
        },

        savepdf() {
            let pageData = this.$store.state.canvas.toDataURL('image/jpeg')
            var pdf = new jsPDF()
            var marginLeft = 10
            var marginRight = 10
            pdf.addImage(pageData, 'jpeg', marginLeft, marginRight)
            pdf.save(`${this.socialMediaName}.pdf`)
        },

        save() {
            this.saveFuntion('png')
        },

        savejpg() {
            this.saveFuntion('jpeg')
        },

        saveFuntion(ending) {
            let pageData = null

            if (ending == 'jpeg') {
                pageData = this.$store.state.canvas.toDataURL('image/jpeg')
            } else {
                pageData = this.$store.state.canvas.toDataURL()
            }

            // create temporary link
            var tmpLink = document.createElement('a')
            tmpLink.download = `${this.socialMediaName}.${ending}` // set the name of the download file
            tmpLink.href = pageData
            // temporarily add link to body and initiate the download
            document.body.appendChild(tmpLink)
            tmpLink.click()
            document.body.removeChild(tmpLink)
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
