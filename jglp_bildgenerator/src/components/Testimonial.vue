<!-- @format -->

<template>
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
                <h4 class="mt-4">{{ $t('SELECTIONS.TESTIMONIALS.text_title') }}</h4>
                <b-row>
                    <b-col>
                        <b-form-textarea
                            id="maintext"
                            @input="changeText"
                            v-model="mainText"
                            class="mt-2"
                            rows="6"
                            max-rows="6"
                            no-resize
                        ></b-form-textarea>

                        <b-form-textarea
                            id="subtext"
                            @input="changeText"
                            v-model="subText"
                            class="mt-2"
                            rows="2"
                            max-rows="2"
                            no-resize
                        ></b-form-textarea>
                    </b-col>
                </b-row>
            </b-container>
        </b-card-body>
    </b-card>
</template>

<script>
export default {
    name: 'Testimonial',
    data: function() {
        return {
            backgroundImageName: 'Wähle bitte ein lokales Bild aus!',
            bbackgroundMoveable: false,
            mainText: this.$store.state.mainText,
            subText: this.$store.state.subText,
            unsubscribe: Function,
        }
    },
    computed: {},
    mounted: function() {
        this.unsubscribe = this.$store.subscribe((mutation, state) => {
            if (mutation.type == 'changeTestimonialText') {
                this.mainText = state.mainText
                this.subText = state.subText
            }
        })
    },
    methods: {
        useLocalFile(event) {
            const reader = new FileReader()

            reader.addEventListener(
                'load',
                () => {
                    this.backgroundImageDataUrl = reader.result
                    this.backgroundImageName = event.target.files[0].name
                    this.$store.commit('changeImageURL', this.backgroundImageDataUrl)
                },
                false
            )

            if (event.target.files[0]) {
                reader.readAsDataURL(event.target.files[0])
            }
        },

        backgroundMoveable() {
            this.bbackgroundMoveable = !this.bbackgroundMoveable
            this.$store.commit('changeImageMovable')
        },

        changeText() {
            this.$store.commit('changeTestimonialText', {
                mainText: this.mainText,
                subText: this.subText,
            })
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button-social-text {
    border: 1px solid $border-black;
}

.active {
    border: 3px solid $border-active;
}
</style>
