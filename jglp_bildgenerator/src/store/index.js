/** @format */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //Canvas
        canvas: null,
        canvasHeight: 640,
        canvasWidth: 640,
        canvasPlattform: 'quad',
        // Border Variables
        borderActive: false,
        borderColorString: 'green-light',
        borderColorHex: '#b4dc00',
        borderStrokeWidth: 15,
        // Angle
        angle: 10,
        // Logo
        logoName: '',
        logoVariation: 'Schweiz',

        //Image
        imageURL: '',
        imageMovable: false,

        zWindowsIndex: 1,

        gradientActive: true,
        gradientActiveSelection: {color0: '#b4dc00', color1: '#004b32'},
        gradientSelectionArray: [
            {
                color0: '#b4dc00',
                color1: '#004b32',
            },
            {
                color0: '#b4dc00',
                color1: '#119cd4',
            },
            {
                color0: '#119cd4',
                color1: '#004b32',
            },
            {
                color0: '#004b32',
                color1: '#004b32',
            },
            {
                color0: '#119cd4',
                color1: '#052a39',
            },
            {
                color0: '#b4dc00',
                color1: '#052a39',
            },
        ],

        //Testimonial
        mainText: 'Zitat eingeben',
        subText: 'Von wem ist das Zitat',
        testimonialTextSettings: {
            quad640: {
                mainText: {
                    fontSize: 25,
                    top: 50,
                    left: 320,
                    maxWidth: 310,
                    width: 300,
                    maxLines: 11,
                },
                subText: {
                    fontSize: 20,
                    top: 400,
                    left: 360,
                    maxWidth: 290,
                    width: 260,
                    maxLines: 3,
                },
            },
            quad1080: {
                mainText: {
                    fontSize: 35,
                    top: 70,
                    left: 520,
                    maxWidth: 510,
                    width: 500,
                    maxLines: 11,
                },
                subText: {
                    fontSize: 30,
                    top: 650,
                    left: 620,
                    maxWidth: 400,
                    width: 400,
                    maxLines: 3,
                },
            },
            quad1920: {
                mainText: {
                    fontSize: 55,
                    top: 150,
                    left: 920,
                    maxWidth: 980,
                    width: 970,
                    maxLines: 13,
                },
                subText: {
                    fontSize: 45,
                    top: 1150,
                    left: 1100,
                    maxWidth: 800,
                    width: 800,
                    maxLines: 3,
                },
            },
            wide720: {
                mainText: {
                    fontSize: 25,
                    top: 50,
                    left: 380,
                    maxWidth: 330,
                    width: 330,
                    maxLines: 7,
                },
                subText: {
                    fontSize: 20,
                    top: 300,
                    left: 420,
                    maxWidth: 280,
                    width: 280,
                    maxLines: 3,
                },
            },
            wide1280: {
                mainText: {
                    fontSize: 35,
                    top: 50,
                    left: 700,
                    maxWidth: 590,
                    width: 590,
                    maxLines: 8,
                },
                subText: {
                    fontSize: 30,
                    top: 450,
                    left: 750,
                    maxWidth: 480,
                    width: 480,
                    maxLines: 3,
                },
            },
            wide1920: {
                mainText: {
                    fontSize: 45,
                    top: 100,
                    left: 1050,
                    maxWidth: 850,
                    width: 850,
                    maxLines: 11,
                },
                subText: {
                    fontSize: 40,
                    top: 650,
                    left: 1120,
                    maxWidth: 720,
                    width: 720,
                    maxLines: 3,
                },
            },
        },

        // Templates
        templates: ['emptyPage', 'testimonial'],
        choosenTemplate: 'emptyPage',
    },
    mutations: {
        changeCanvasPlattform(state, newPlattform) {
            state.canvasPlattform = newPlattform
        },

        changeCanvasSize(state, newSize) {
            state.canvasWidth = newSize.x
            state.canvasHeight = newSize.y
        },

        toggleBorder(state) {
            state.borderActive = !state.borderActive
        },

        changeBorderColor(state, color) {
            state.borderActive = !state.borderActive
            state.borderColorString = color

            if (color == 'green-light') {
                state.borderColorHex = '#b4dc00'
            } else {
                state.borderColorHex = '#119CD4'
            }
            setTimeout(() => {
                state.borderActive = !state.borderActive
            }, 1)
        },

        changeLogoName(state, newName) {
            state.logoName = newName.toUpperCase()
        },

        changeLogoVariation(state, language) {
            state.logoVariation = language
        },

        changeGradient(state, value) {
            state.gradientActiveSelection = state.gradientSelectionArray[value]
            toggleGradientWithTimeOut(state)
        },

        toggleGradient(state) {
            state.borderActive = !state.borderActive
            state.gradientActive = !state.gradientActive
            setTimeout(() => {
                state.borderActive = !state.borderActive
            }, 1)
        },

        changeChoosenTemplate(state, newValue) {
            state.choosenTemplate = newValue
        },

        changeImageURL(state, url) {
            state.imageURL = url
        },

        changeImageMovable(state) {
            state.imageMovable = !state.imageMovable
        },

        changeTestimonialText(state, text) {
            if (text.mainText.split(/\r\n|\r|\n/).length < 12) {
                state.mainText = text.mainText
            }

            if (text.subText.split(/\r\n|\r|\n/).length < 3) {
                state.subText = text.subText
            }
        },

        incrementzWindowsIndex(state) {
            state.zWindowsIndex = state.zWindowsIndex + 1
        },
    },
    actions: {},
    modules: {},
})

function toggleGradientWithTimeOut(state) {
    state.borderActive = !state.borderActive
    state.gradientActive = !state.gradientActive
    setTimeout(() => {
        state.gradientActive = !state.gradientActive
        state.borderActive = !state.borderActive
    }, 1)
}
