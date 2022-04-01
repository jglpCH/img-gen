<!-- @format -->

<template>
    <div></div>
</template>

<script>
import {fabric} from 'fabric'

export default {
    name: 'LogoName',

    data: function() {
        return {
            textObject: Object,
            unsubscribe: Function,
            editingActive: false,
        }
    },

    mounted() {
        setTimeout(() => {
            this.renderBarWithText()
        }, 10)

        this.unsubscribe = this.$store.subscribe((mutation, state) => {
            if (
                mutation.type == 'changeCanvasSize' ||
                mutation.type == 'toggleBorder' ||
                mutation.type == 'changeBorderColor' ||
                mutation.type == 'changeLogoVariation'
            ) {
                state.canvas.remove(this.textObject)
            } else if (mutation.type == 'changeLogoName') {
                state.canvas.remove(this.textObject)
                this.renderBarWithText()
            }
        })
    },

    props: {
        fontSize: {
            type: Number,
            default: 65,
        },
        scale: {
            type: Number,
            default: 1,
        },
        backgroundColor: {
            type: String,
            default: '#119CD4',
        },
        textColor: {
            type: String,
            default: 'white',
        },
    },

    computed: {},

    methods: {
        renderBarWithText() {
            this.$store.state.canvas.remove(this.textObject)
            const text = new fabric.IText(this.$store.state.logoName, {
                fontFamily: 'Oswald',
                fontSize: Math.round(this.fontSize * this.scale),
                originX: 'right',
                originY: 'top',
                fill: this.computeTextColor(),
                charSpacing: 100,
                lineHeight: 0.1,
            })

            const margins = this.calulateMargins()

            var height = text.height + margins.height
            var width = text.width + margins.width

            var bg = new fabric.Rect({
                fill: this.backgroundColor,
                originX: 'right',
                originY: 'top',
                width: width,
                height: height,
                left: text.left + margins.width / 2,
                top: text.top - margins.height / 2 - margins.topPadding,
            })

            this.textObject = new fabric.Group([bg, text], {})

            this.$store.state.canvas.add(this.textObject)

            var testTop = this.$store.state.canvasHeight - margins.marginHeight
            var testLeft = this.$store.state.canvasWidth - margins.marginWidth

            this.textObject.set({
                originX: 'right',
                originY: 'top',
                top: testTop,
                left: testLeft,
                angle: -this.$store.state.angle,
                skewX: -this.$store.state.angle,

                // Lock all movements
                lockMovementX: true,
                lockMovementY: true,
                lockScalingX: true,
                lockScalingY: true,
                lockRotation: true,
                hasControls: false,
                hasBorders: true,
            })

            this.textObject.setCoords()
            // Testing:
            this.textObject.on('mousedblclick', () => {
                this.editingActive = true
                var activegroup = this.$store.state.canvas.getActiveObject()
                activegroup = activegroup.getObjects()
                activegroup._restoreObjectsState
                this.$store.state.canvas.remove(this.textObject)

                for (let item in activegroup) {
                    this.$store.state.canvas.add(activegroup[item])
                }
                text.enterEditing()
                text.fill = 'red'
                text.on('changed', () => {
                    text.text = text.text.toUpperCase()
                    this.$store.state.canvas.renderAll()
                    bg.width = text.width + margins.width
                    this.$store.commit('changeLogoName', text.text)
                })

                text.on('editing:exited', () => {
                    this.editingActive = false
                    this.$store.state.canvas.remove(bg)
                    this.$store.state.canvas.remove(text)
                    this.$store.commit('changeLogoName', text.text)
                })
            })
        },

        calulateMargins() {
            if (this.$store.state.canvasPlattform == 'quad') {
                let margins = {
                    height: 10,
                    width: 7,
                    marginHeight: 140,
                    marginWidth: 30,
                    topPadding: 6,
                }

                if (this.$store.state.canvasWidth == 640) {
                    margins.height = 5
                    margins.marginHeight = 47
                    margins.marginWidth = 13
                    margins.topPadding = 2
                } else if (this.$store.state.canvasWidth == 1080) {
                    margins.height = 9
                    margins.marginHeight = 80
                    margins.marginWidth = 13
                    margins.topPadding = 3
                }
                return margins
            } else {
                let margins = {
                    height: 10,
                    width: 7,
                    marginHeight: 110,
                    marginWidth: 27,
                    topPadding: 6,
                }

                if (this.$store.state.canvasWidth == 720) {
                    margins.height = 5
                    margins.marginHeight = 40
                    margins.marginWidth = 13
                    margins.topPadding = 1
                } else if (this.$store.state.canvasWidth == 1280) {
                    margins.height = 9
                    margins.marginHeight = 75
                    margins.marginWidth = 14
                    margins.topPadding = 3
                }
                return margins
            }
        },

        computeTextColor() {
            if (this.editingActive == true) {
                return 'red'
            } else {
                return this.textColor
            }
        },
    },

    destroyed: function() {
        this.unsubscribe()
    },
}
</script>
