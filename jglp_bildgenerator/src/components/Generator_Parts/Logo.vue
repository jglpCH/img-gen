<!-- @format -->

<template>
    <div v-if="this.active">
        <fabric-SVG-from-URL
            id="Logo"
            index="5"
            :url="this.url"
            :scaleX="this.scale"
            :scaleY="this.scale"
            :top="this.top"
            :left="this.left"
            :selectable="false"
        ></fabric-SVG-from-URL>
        <LogoName :scale="this.scale"></LogoName>
    </div>
</template>

<script>
import vueFabricWrapper from 'vue-fabric-wrapper'
import LogoName from './LogoName.vue'

export default {
    name: 'Logo',

    components: {
        FabricSVGFromURL: vueFabricWrapper.FabricSVGFromURL,
        LogoName,
    },

    data: function() {
        return {
            LogoHeight: 420,
            LogoWidth: 848,
            top: 0,
            left: 0,
            scale: 1,
            active: true,
            url: '/Schweiz.svg',
            unsubscribe: Function,
        }
    },

    created() {
        this.scale = this.calculateSVGScaleFactor()
        this.top = this.calculateTopPosition()
        this.left = this.calulateLeftPosition()
    },

    mounted() {
        this.unsubscribe = this.$store.subscribe((mutation, state) => {
            if (mutation.type == 'changeLogoVariation') {
                this.url = `/${state.logoVariation}.svg`
                this.activeTimeout()
            }
        })
    },

    props: {},

    methods: {
        activeTimeout() {
            this.active = false
            setTimeout(() => {
                this.active = true
            }, 1)
        },

        calculateBottomBarHeight() {
            if (this.$store.state.canvasPlattform == 'quad') {
                return (
                    Math.tan(Math.PI / 180) *
                    this.$store.state.angle *
                    this.$store.state.canvasWidth
                )
            } else {
                return (
                    Math.tan(Math.PI / 180) *
                    this.$store.state.angle *
                    ((this.$store.state.canvasWidth / 4) * 3)
                )
            }
        },

        calculateSVGScaleFactor() {
            const ussableHeight = this.calculateBottomBarHeight() - 30 //Schutzräume oben und unten je 10px
            return ussableHeight / this.LogoHeight
        },

        calculateTopPosition() {
            var bias = -5
            if (this.$store.state.canvasPlattform == 'quad') {
                if (this.$store.state.canvasHeight == 1080) {
                    bias = 5
                } else if (this.$store.state.canvasHeight == 1920) {
                    bias = 20
                }
            } else {
                if (this.$store.state.canvasHeight == 720) {
                    bias = 0
                } else if (this.$store.state.canvasHeight == 1080) {
                    bias = 10
                }
            }
            return this.$store.state.canvasHeight + bias - this.LogoHeight * this.scale
        },

        calulateLeftPosition() {
            var bias = 5
            if (this.$store.state.canvasPlattform == 'quad') {
                if (this.$store.state.canvasHeight == 1080) {
                    bias = 5
                } else if (this.$store.state.canvasHeight == 1920) {
                    bias = 20
                }
            } else {
                if (this.$store.state.canvasHeight == 720) {
                    bias = 5
                } else if (this.$store.state.canvasHeight == 1080) {
                    bias = 20
                }
            }
            return this.$store.state.canvasWidth - bias - 10 - this.LogoWidth * this.scale
        },
    },

    watch: {
        '$store.state.borderActive': {
            handler() {
                this.activeTimeout()
            },
        },

        '$store.state.canvasWidth': {
            handler() {
                this.scale = this.calculateSVGScaleFactor()
                this.top = this.calculateTopPosition()
                this.left = this.calulateLeftPosition()
                this.activeTimeout()
            },
        },
    },

    destroyed: function() {
        this.unsubscribe()
    },
}
</script>
