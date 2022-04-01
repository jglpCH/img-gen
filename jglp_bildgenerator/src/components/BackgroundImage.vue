<!-- @format -->

<template>
    <div>
        <b-card class="mb-2">
            <b-card-body class="remove-padding mt-2">
                <b-container class="remove-padding">
                    <h4>{{ $t('SELECTIONS.BACKGROUND.image') }}</h4>
                    <button
                        type="button"
                        v-bind:class="[
                            this.bbackgroundMoveable ? 'active' : '',
                            'btn',
                            'button-social-text',
                        ]"
                        @click="backgroundMoveable()"
                    >
                        {{ $t('SELECTIONS.BACKGROUND.moveable') }}
                    </button>

                    <b-row class="mt-2">
                        <b-col cols="8">
                            <label class="btn btn-outline-primary" for="upload">{{
                                $t('SELECTIONS.BACKGROUND.upload')
                            }}</label>
                            <input
                                id="upload"
                                style="display:none;"
                                type="file"
                                @change="useLocalFile"
                            />
                        </b-col>
                        <b-col cols="8">
                            <b-input
                                v-model="backgroundImageName"
                                :placeholder="$t('SELECTIONS.BACKGROUND.uploadURL')"
                                disabled
                            />
                        </b-col>
                    </b-row>

                    <div v-if="this.$store.state.choosenTemplate == 'emptyPage'">
                        <h4 class="mt-3">{{ $t('SELECTIONS.BACKGROUND.gradient') }}</h4>
                        <p>{{ $t('SELECTIONS.BACKGROUND.gradient_desc') }}</p>
                        <input
                            type="checkbox"
                            id="gradient"
                            class="mr-2"
                            @change="changeGradient"
                        />
                        <label for="gradient">Gradient aktivieren</label>

                        <b-row>
                            <b-col
                                cols="2"
                                class="gradient gradient-green m-2"
                                @click="setGradientBackground(0)"
                            ></b-col>
                            <b-col
                                cols="2"
                                class="gradient gradient-green-blue-light m-2"
                                @click="setGradientBackground(1)"
                            ></b-col>
                            <b-col
                                cols="2"
                                class="gradient gradient-green-dark-blue m-2"
                                @click="setGradientBackground(2)"
                            ></b-col>
                            <b-col
                                cols="2"
                                class="gradient gradient-green-blue-dark m-2"
                                @click="setGradientBackground(3)"
                            ></b-col>
                            <b-col
                                cols="2"
                                class="gradient gradient-blue m-2"
                                @click="setGradientBackground(4)"
                            ></b-col>
                            <b-col
                                cols="2"
                                class="gradient gradient-green-blue m-2"
                                @click="setGradientBackground(5)"
                            ></b-col>
                        </b-row>
                    </div>
                </b-container>
            </b-card-body>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'BackgroundImage',
    data: function() {
        return {
            bbackgroundMoveable: false,
            backgroundImageDataUrl: '',
            backgroundImageName: 'Wähle bitte ein lokales Bild aus!',
        }
    },
    props: {},
    methods: {
        backgroundMoveable() {
            this.bbackgroundMoveable = !this.bbackgroundMoveable
            this.$emit('backgroundMoveable', this.bbackgroundMoveable)
            this.$store.commit('changeImageMovable')
        },

        useLocalFile(event) {
            const reader = new FileReader()

            reader.addEventListener(
                'load',
                () => {
                    this.backgroundImageDataUrl = reader.result
                    this.backgroundImageName = event.target.files[0].name
                    this.$emit('backgroundImage', this.backgroundImageDataUrl)
                    this.$store.commit('changeImageURL', this.backgroundImageDataUrl)
                },
                false
            )

            if (event.target.files[0]) {
                reader.readAsDataURL(event.target.files[0])
            }
        },

        changeGradient() {
            this.$store.commit('toggleGradient')
        },

        setGradientBackground(gradient) {
            this.$store.commit('changeGradient', gradient)
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button:focus {
    outline: none;
    box-shadow: none;
}

.button-selection {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 1px solid $border-black;
}

.button-social-text {
    border: 1px solid $border-black;
}

.active {
    border: 3px solid $border-active;
}

.btn-upload:hover {
    border: 1px solid $border-active;
}

.plattform-selection {
    text-align: left;
    max-width: 500px;
    margin: 0;
}

.remove-padding {
    padding: 0;
}

.gradient {
    height: 100px;
    width: auto;
}

.gradient-green {
    background: rgb(130, 180, 60);
    background: linear-gradient(135deg, #b4dc00 0%, #004b32 100%);
}

.gradient-green-blue-light {
    background: rgb(130, 180, 60);
    background: linear-gradient(135deg, #b4dc00 0%, #119cd4 100%);
}

.gradient-green-dark-blue {
    background: rgb(17, 156, 212);
    background: linear-gradient(135deg, #119cd4 0%, #004b32 100%);
}

.gradient-green-blue-dark {
    background: rgb(0, 75, 50);
    background: linear-gradient(135deg, #004b32 0%, #004b32 100%);
}

.gradient-blue {
    background: rgb(17, 156, 212);
    background: linear-gradient(135deg, #119cd4 0%, #052a39 100%);
}

.gradient-green-blue {
    background: rgb(130, 180, 60);
    background: linear-gradient(135deg, #b4dc00 0%, #052a39 100%);
}
</style>
