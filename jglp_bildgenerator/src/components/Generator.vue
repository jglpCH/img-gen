<!-- @format -->

<template>
    <div>
        <fabric-canvas
            id="gatschet"
            globalCompositeOperation="destination-over"
            :height="this.template.y"
            :width="this.template.x"
            class="canvas-wrapper mt-2"
        >
            <get-image></get-image>
            <div v-if="this.$store.state.choosenTemplate == 'emptyPage'">
                <fabric-image-from-URL
                    v-if="this.$store.state.gradientActive"
                    globalCompositeOperation="destination-over"
                    :evented="this.backgroundMoveable"
                    :hasControls="this.backgroundMoveable"
                    :selectable="this.backgroundMoveable"
                    :id="0"
                    :scaleX="this.scaleX"
                    :scaleY="this.scaleY"
                    :url="this.backgroundURL"
                    crossorigin="anonymous"
                >
                </fabric-image-from-URL>
                <fabric-Rectangle
                    :height="this.template.y"
                    :width="this.template.x"
                    id="gradient"
                    :selectable="false"
                    v-if="!this.$store.state.gradientActive"
                >
                    <fabric-gradient
                        :x1="0"
                        :x2="1"
                        :y1="0"
                        :y2="1"
                        :gradientUnits="'percentage'"
                        :colorStops="{
                            0: this.color0,
                            1: this.color1,
                        }"
                    ></fabric-gradient>
                </fabric-Rectangle>
            </div>
            <Testimonial
                v-if="this.$store.state.choosenTemplate == 'testimonial'"
            ></Testimonial>
            <Border :template="this.template"></Border>
            <BottomBar :template="this.template" :angle="this.angle"></BottomBar>
            <Logo></Logo>
        </fabric-canvas>
    </div>
</template>

<script>
import vueFabricWrapper from 'vue-fabric-wrapper'
import BottomBar from './Generator_Parts/BottomBar.vue'
import Border from './Generator_Parts/Border'
import getImage from './Generator_Parts/get-image.vue'
import Logo from './Generator_Parts/Logo.vue'
import Testimonial from './Generator_Parts/Testimonial_Component'

export default {
    name: 'Generator',
    components: {
        FabricCanvas: vueFabricWrapper.FabricCanvas,
        FabricImageFromURL: vueFabricWrapper.FabricImageFromURL,
        FabricRectangle: vueFabricWrapper.FabricRectangle,
        FabricGradient: vueFabricWrapper.FabricGradient,
        BottomBar,
        Border,
        getImage,
        Logo,
        Testimonial,
    },
    data: function() {
        return {
            scaleX: 1,
            scaleY: 1,
            angle: -10,
            unsubscribe: Function,
            color0: '#b4dc00',
            color1: '#004b32',
        }
    },
    props: {
        backgroundMoveable: Boolean,
        plattform: String,
        template: Object,
        backgroundURL: String,
    },

    mounted() {
        this.$store.state.gradientActive = true

        this.unsubscribe = this.$store.subscribe((mutation, state) => {
            if (mutation.type == 'changeGradient') {
                this.color0 = state.gradientActiveSelection.color0
                this.color1 = state.gradientActiveSelection.color1
            }
        })
    },

    methods: {
        calculateImageScale() {
            const img = new Image()

            img.src = this.backgroundURL

            img.onload = () => {
                setTimeout(() => {
                    this.scaleX = this.template.x / img.width
                    this.scaleY = this.template.y / img.height
                }, 10)
            }
        },
    },
    watch: {
        backgroundURL: {
            immediate: true,
            handler() {
                this.calculateImageScale()
            },
        },
        template: {
            handler() {
                this.calculateImageScale()
            },
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
div > canvas {
    border: 1px solid;
}
</style>
