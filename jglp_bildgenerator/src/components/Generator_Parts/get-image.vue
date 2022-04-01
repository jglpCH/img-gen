<!-- @format -->

<template>
    <div></div>
</template>

<script>
export default {
    inject: ['$canvas', 'fabric'],
    computed: {
        canvas() {
            return this.$canvas()
        },
    },
    created: function() {
        setTimeout(() => {
            this.getImage()
        }, 1)
    },
    methods: {
        getImage() {
            this.$store.state.canvas = this.canvas
        },
    },
}
</script>
