<!-- @format -->

<template>
    <div class="content-wrapper">
        <h4 class="">{{ $t('SELECTIONS.TEMPLATE.size') }}</h4>
        <b-row class="mb-2">
            <b-col cols="1">
                <button
                    type="button"
                    v-bind:class="[
                        plattform == 'quad' ? 'active' : '',
                        'btn',
                        'button-selection',
                    ]"
                    @click="formatSelection('quad')"
                >
                    1:1
                </button>
            </b-col>
            <b-col cols="1">
                <button
                    type="button"
                    v-bind:class="[
                        plattform == 'wide' ? 'active' : '',
                        'btn',
                        'button-selection',
                    ]"
                    @click="formatSelection('wide')"
                >
                    16:9
                </button>
            </b-col>

            <div class="divider pl-3"></div>

            <b-col
                cols="2.5"
                v-for="(social, index) in plattfromTemplatesSizes[plattform].names"
                :key="social"
                align-self="center"
            >
                <button
                    type="button"
                    v-bind:class="[
                        template == social ? 'active' : '',
                        'btn',
                        'button-social-text',
                    ]"
                    @click="templateSelection(social, index)"
                >
                    {{ social }}
                </button>
            </b-col>
        </b-row>

        <h4 class="horizontal-divider">
            {{ $t('SELECTIONS.TEMPLATE.template') }}
        </h4>
        <b-row>
            <b-col cols="3" v-for="item in this.$store.state.templates" :key="item">
                <h5>
                    {{ $t(`SELECTIONS.TEMPLATE.${item}`) }}
                </h5>
                <img
                    class="showcase-image"
                    :src="require(`../assets/img/template_${item}.png`)"
                    @click="changeTemplate(item)"
                />
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'SocialMediaSelection',
    data: function() {
        return {
            plattform: 'quad',
            template: '640 x 640',
            plattfromTemplatesSizes: {
                quad: {
                    names: ['640 x 640', '1080 x 1080', '1920 x 1920'],
                    shortnames: ['small', 'medium', 'big'],
                    small: {x: 640, y: 640},
                    medium: {x: 1080, y: 1080},
                    big: {x: 1920, y: 1920},
                },
                wide: {
                    // Hoch: '480 x 720', '720 x 1280' ,'1080 x 1920'
                    names: ['720 x 480', '1280 x 720', '1920 x 1080'],
                    shortnames: ['smallquer', 'mediumquer', 'bigquer'],
                    smallquer: {x: 720, y: 480},
                    mediumquer: {x: 1280, y: 720},
                    bigquer: {x: 1920, y: 1080},
                },
            },
        }
    },
    props: {},
    methods: {
        formatSelection: function(format) {
            this.plattform = format
            this.$store.commit('changeCanvasPlattform', this.plattform)
            this.$emit('plattform', this.plattform)
        },

        templateSelection(template, index) {
            this.template = template
            this.$store.commit(
                'changeCanvasSize',
                this.plattfromTemplatesSizes[this.plattform][
                    this.plattfromTemplatesSizes[this.plattform].shortnames[index]
                ]
            )
            this.$emit(
                'template',
                this.plattfromTemplatesSizes[this.plattform][
                    this.plattfromTemplatesSizes[this.plattform].shortnames[index]
                ]
            )
        },

        changeTemplate(value) {
            this.$store.commit('changeChoosenTemplate', value)
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content-wrapper {
    width: 800px;
}

button:focus {
    outline: none;
    box-shadow: none;
}

.button-selection {
    height: 50px;
    width: 50px;
    font-size: 0.9em;
    border-radius: 50%;
    border: 1px solid $border-black;
}

.button-social-text {
    font-size: 0.9em;
    border: 1px solid $border-black;
}

.active {
    border: 3px solid $border-active;
}

.plattform-selection {
    text-align: left;
    max-width: 300px;
    margin: 0;
}

.divider {
    width: 1px;
    height: 60px;
    text-align: right;
    border-right: 1px solid black;
}

.horizontal-divider {
    padding-top: 10px;
    border-top: 1px solid #b6b4b4;
}

.showcase-image {
    height: 70%;
    width: 70%;
    box-shadow: 5px 5px 5px #b6b4b4;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
}
</style>
