<!-- @format -->

<template>
    <div></div>
</template>

<script>
import {fabric} from 'fabric'

export default {
    name: 'FactCheck',

    components: {},

    data: function() {
        return {
            unsubscribe: Function,
            greenBackground: Object,
            imageWrapper: Object,
            image: Object,
        }
    },

    created: function() {},

    mounted: function() {
        this.greenBackground = new fabric.Rect({
            fill: '#b4dc00',
            width: this.$store.state.canvasWidth,
            height: this.$store.state.canvasHeight * 1.3,
            top: this.$store.state.canvasHeight,
            left: (this.$store.state.canvasWidth / 5) * 3,
            angle: -this.$store.state.angle,
            index: -1,
            selectable: false,
            originX: 'left',
            originY: 'bottom',
            absolutePositioned: true,
        })

        this.imageWrapper = new fabric.Rect({
            fill: 'red',
            originX: 'right',
            originY: 'bottom',
            width: this.$store.state.canvasWidth,
            height: this.$store.state.canvasHeight * 1.3,
            top: this.$store.state.canvasHeight,
            left: (this.$store.state.canvasWidth / 5) * 3 + 10,
            angle: -this.$store.state.angle,
            absolutePositioned: true,
        })

        this.image = new fabric.Image('', {
            selectable: this.$store.state.imageMovable,
            hasControls: true,
        })

        const LimitedTextboxThis = this
        const LimitedTextbox = fabric.util.createClass(fabric.Textbox, {
            onInput: function(e) {
                if (
                    this._textLines.length > this.maxLines &&
                    e.inputType !== 'deleteContentBackward'
                ) {
                    this.hiddenTextarea.value = this.text
                    return
                }

                if (
                    this._textLines.length > this.maxLines &&
                    e.inputType == 'deleteContentBackward'
                ) {
                    this.callSuper('onInput', e)
                }

                if (this.width > this.maxWidth) {
                    return
                }

                if (this._textLines.length > this.maxLines) {
                    return
                }

                // Call parent class method
                LimitedTextboxThis.$store.commit('changeTestimonialText', {
                    mainText: text.text,
                    subText: nameTextBox.text,
                })
                this.callSuper('onInput', e)
            },
        })

        let platform = `${this.$store.state.canvasPlattform}${this.$store.state.canvasWidth}`

        const text = new LimitedTextbox(this.$store.state.mainText, {
            fontFamily: 'Ubuntu',
            fontWeight: 300,
            fontSize: this.$store.state.testimonialTextSettings[platform].mainText
                .fontSize,
            originX: 'left',
            originY: 'top',
            fill: '#fff',
            top: this.$store.state.testimonialTextSettings[platform].mainText.top,
            left: this.$store.state.testimonialTextSettings[platform].mainText.left,
            width: this.$store.state.testimonialTextSettings[platform].mainText.width,
            maxWidth: this.$store.state.testimonialTextSettings[platform].mainText
                .maxWidth,
            maxLines: this.$store.state.testimonialTextSettings[platform].mainText
                .maxLines,
            textAlign: 'center',
            lineHeight: 1,
            lockMovementX: true,
            lockMovementY: true,
            lockScalingX: true,
            lockScalingY: true,
            lockRotation: true,
            hasControls: false,
            hasBorders: true,
        })

        const nameTextBox = new LimitedTextbox(this.$store.state.subText, {
            fontFamily: 'Ubuntu',
            fontWeight: 300,
            fontSize: this.$store.state.testimonialTextSettings[platform].subText
                .fontSize,
            originX: 'left',
            originY: 'top',
            fill: '#fff',
            top: this.$store.state.testimonialTextSettings[platform].subText.top,
            left: this.$store.state.testimonialTextSettings[platform].subText.left,
            width: this.$store.state.testimonialTextSettings[platform].subText.width,
            maxWidth: this.$store.state.testimonialTextSettings[platform].subText
                .maxWidth,
            maxLines: this.$store.state.testimonialTextSettings[platform].subText
                .maxLines,
            lineHeight: 1,
            textAlign: 'left',
            lockMovementX: true,
            lockMovementY: true,
            lockScalingX: true,
            lockScalingY: true,
            lockRotation: true,
            hasControls: false,
            hasBorders: true,
        })

        text.clipPath = this.greenBackground

        this.image.clipPath = this.imageWrapper

        setTimeout(() => {
            this.$store.state.canvas.add(this.greenBackground)
            this.$store.state.canvas.add(this.image)
            this.$store.state.canvas.add(text)
            this.$store.state.canvas.add(nameTextBox)

            this.$store.state.canvas.sendToBack(this.greenBackground)
            this.$store.state.canvas.sendToBack(this.image)
            this.$store.state.canvas.renderAll()
        }, 1)

        this.unsubscribe = this.$store.subscribe((mutation, state) => {
            if (mutation.type == 'changeCanvasSize') {
                this.greenBackground.set({
                    width: state.canvasWidth,
                    height: state.canvasHeight * 1.3,
                    top: state.canvasHeight,
                    left: (state.canvasWidth / 5) * 3,
                })
                this.greenBackground.setCoords()

                // Change textpostition
                let platform = `${this.$store.state.canvasPlattform}${this.$store.state.canvasWidth}`
                text.set({
                    top: this.$store.state.testimonialTextSettings[platform].mainText.top,
                    left: this.$store.state.testimonialTextSettings[platform].mainText
                        .left,
                    width: this.$store.state.testimonialTextSettings[platform].mainText
                        .width,
                    maxWidth: this.$store.state.testimonialTextSettings[platform].mainText
                        .maxWidth,
                    fontSize: this.$store.state.testimonialTextSettings[platform].mainText
                        .fontSize,
                    maxLines: this.$store.state.testimonialTextSettings[platform].mainText
                        .maxLines,
                })

                nameTextBox.set({
                    top: this.$store.state.testimonialTextSettings[platform].subText.top,
                    left: this.$store.state.testimonialTextSettings[platform].subText
                        .left,
                    width: this.$store.state.testimonialTextSettings[platform].subText
                        .width,
                    maxWidth: this.$store.state.testimonialTextSettings[platform].subText
                        .maxWidth,
                    fontSize: this.$store.state.testimonialTextSettings[platform].subText
                        .fontSize,
                    maxLines: this.$store.state.testimonialTextSettings[platform].subText
                        .maxLines,
                })

                state.canvas.renderAll()
            } else if (mutation.type == 'changeImageURL') {
                this.image.setSrc(state.imageURL, (e) => {
                    e.scaleX = state.canvasWidth / e.width
                    e.scaleY = state.canvasHeight / e.height
                    e.setCoords()
                    state.canvas.renderAll()
                })
            } else if (mutation.type == 'changeImageMovable') {
                this.image.set({
                    selectable: state.imageMovable,
                    hasControls: state.imageMovable,
                    evented: state.imageMovable,
                })
                this.image.setCoords()
                state.canvas.renderAll()
            } else if (mutation.type == 'changeTestimonialText') {
                text.set({text: state.mainText})
                nameTextBox.set({text: state.subText})
                state.canvas.renderAll()
            }
        })
    },

    props: {},

    methods: {},

    watch: {},

    destroyed: function() {
        this.unsubscribe()
        this.$store.state.canvas.remove(this.greenBackground)
    },
}
</script>
