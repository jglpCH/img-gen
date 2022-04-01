<!-- @format -->

<template>
    <div>
        <b-card class="mb-2">
            <b-card-title>
                {{ $t('SELECTIONS.LOGO.title') }}
            </b-card-title>

            <b-card-body>
                <b-container>
                    <p>{{ $t('SELECTIONS.LOGO.desc') }}</p>

                    <select
                        class="form-select"
                        id="logoSelection"
                        aria-label="Default select example"
                        v-model="LogoName"
                        @change="this.changeSelectionName"
                    >
                        <option
                            v-for="name in this.sortLogoNames"
                            v-bind:key="name.name"
                            :value="name.name"
                        >
                            {{ name.name }}
                        </option>
                    </select>

                    <b-form-input
                        id="logoName"
                        type="search"
                        @input="changeSelectionName"
                        v-model="LogoName"
                        placeholder="Name"
                        class="mt-2"
                    ></b-form-input>

                    <p class="mt-4">{{ $t('SELECTIONS.LOGO.desc_variation') }}</p>

                    <select
                        class="form-select"
                        id="variationSelection"
                        aria-label="Default select example"
                        v-model="LogoVariation"
                        @change="this.changeLogoVariation"
                    >
                        <option
                            v-for="name in this.LogoLanguages"
                            v-bind:key="name.name"
                            :value="name.name"
                        >
                            {{ name.name }}
                        </option>
                    </select>
                </b-container>
            </b-card-body>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'LogoSelection',

    data: function() {
        return {
            LogoNames: [
                {name: 'Zürich'},
                {name: 'Solothurn'},
                {name: 'Bern'},
                {name: 'Schweiz'},
                {name: 'Suisse'},
                {name: 'Winterthur'},
                {name: 'Aargau'},
                {name: 'Graubünden'},
                {name: 'Luzern'},
                {name: 'Glarus'},
                {name: 'St.Gallen'},
                {name: 'Thurgau'},
                {name: 'Zug'},
                {name: 'Schwyz'},
                {name: 'Svizzera'},
                {name: 'Schaffhausen'},
                {name: 'Beide Basel'},
                {name: 'Tessin'},
                {name: 'Vaud'},
                {name: 'Genève'},
            ],
            LogoName: this.$store.state.logoName,
            LogoLanguages: [
                {name: 'Schweiz'},
                {name: 'Suisse'},
                {name: 'Svizzera'},
                {name: 'Schweiz_Regenbogen'},
                {name: 'Suisse_Arc-en-ciel'},
            ],
            LogoVariation: this.$store.state.logoVariation,
            unsubscribe: Function,
        }
    },

    mounted() {
        this.unsubscribe = this.$store.subscribe((mutation, state) => {
            if (mutation.type == 'changeLogoName') {
                this.LogoName = state.logoName
            }
        })
    },

    computed: {
        sortLogoNames() {
            let sortedLogos = this.LogoNames

            // deepcode ignore NoZeroReturnedInSort: <please specify a reason of ignoring this>
            sortedLogos = sortedLogos.sort((a, b) => {
                let firstLogo = a.name.toLowerCase()
                let secondLogo = b.name.toLowerCase()

                if (firstLogo < secondLogo) {
                    return -1
                } else if (secondLogo < firstLogo) {
                    return 1
                } else {
                    return 0
                }
            })

            return sortedLogos
        },
    },

    methods: {
        changeSelectionName() {
            this.$store.commit('changeLogoName', this.LogoName)
        },

        changeLogoVariation() {
            this.$store.commit('changeLogoVariation', this.LogoVariation)
        },
    },
}
</script>

<style scoped lang="scss"></style>
