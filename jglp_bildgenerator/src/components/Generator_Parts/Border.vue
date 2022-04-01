<!-- @format -->

<template>
    <div>
        <fabric-Rectangle
            index="1"
            v-if="this.$store.state.borderActive"
            :width="this.template.x - this.$store.state.borderStrokeWidth"
            :height="this.template.y - this.$store.state.borderStrokeWidth"
            :id="2"
            fill="transparent"
            :stroke="this.$store.state.borderColorHex"
            :strokeWidth="this.$store.state.borderStrokeWidth"
            :selectable="this.selectable"
        ></fabric-Rectangle>
    </div>
</template>

<script>
import vueFabricWrapper from 'vue-fabric-wrapper'

export default {
    name: 'Border',

    components: {
        FabricRectangle: vueFabricWrapper.FabricRectangle,
    },
    data: function() {
        return {
            height: 350,
            top: 0,
            selectable: false,
            angle: -10,
        }
    },

    created: function() {
        // deepcode ignore VueMissingCleanup: <please specify a reason of ignoring this>
        setTimeout(() => {
            this.top = this.template.y
        }, 10)
    },
    props: {
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
    },

    watch: {
        template: {
            handler() {
                this.top = this.template.y
            },
        },
    },
}
</script>
