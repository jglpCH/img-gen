<!-- @format -->

<template>
    <div v-if="this.active">
        <fabric-Rectangle
            index="2"
            :width="this.template.x + 100"
            :height="this.height"
            :left="this.calculateBottomBarLeft() - 10"
            :top="this.top + 12"
            :angle="this.angle"
            :skewX="this.angle"
            :id="3"
            fill="white"
            :selectable="this.selectable"
        ></fabric-Rectangle>
        <fabric-Rectangle
            index="3"
            v-if="this.$store.state.borderActive"
            :width="this.template.x + 100"
            :height="this.height"
            :left="this.calculateBottomBarLeft() - 30"
            :top="this.top + 3"
            :angle="this.angle"
            :skewX="this.angle"
            :id="4"
            fill="transparent"
            :selectable="this.selectable"
            :stroke="this.$store.state.borderColorHex"
            :strokeWidth="this.$store.state.borderStrokeWidth"
        ></fabric-Rectangle>
    </div>
</template>

<script>
import vueFabricWrapper from 'vue-fabric-wrapper'
export default {
    name: 'BottomBar',

    components: {
        FabricRectangle: vueFabricWrapper.FabricRectangle,
    },

    data: function() {
        return {
            height: 350,
            top: 0,
            selectable: false,
            active: true,
        }
    },

    created: function() {
        // deepcode ignore VueMissingCleanup: <please specify a reason of ignoring this>
        setTimeout(() => {
            this.top = this.template.y
        }, 10)
    },

    props: {
        angle: Number,
        template: Object,
    },

    methods: {
        calculateBottomBarLeft() {
            if (this.template.x == this.template.y) {
                return Math.sin((Math.PI / 180) * this.angle) * this.height - 2
            } else {
                return (
                    Math.sin((Math.PI / 180) * this.angle) * this.height +
                    this.template.x / 4
                )
            }
        },

        activeTimeout() {
            this.active = false
            setTimeout(() => {
                this.active = true
            }, 1)
        },
    },

    watch: {
        template: {
            handler() {
                this.top = this.template.y
                this.activeTimeout()
            },
        },
        '$store.state.borderActive': {
            handler() {
                this.activeTimeout()
            },
        },
    },
}
</script>
