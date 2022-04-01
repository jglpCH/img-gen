<!-- @format -->

<template>
    <div>
        <sidebar-menu
            :menu="menu"
            @item-click="onItemClick"
            @toggle-collapse="onToggleCollapse"
            :disableHover="true"
            width="200px"
        >
            <span slot="toggle-icon" class="toggle-icon"></span>
        </sidebar-menu>
        <div>
            <vueBrowserlikeWindow
                v-model="isSaveOpen"
                :top="300"
                :left="100"
                :title="this.$t('SELECTIONS.name_title')"
                @close="onItemClick(null, {alias: 'save'}, null)"
            >
                <NameSection></NameSection>
            </vueBrowserlikeWindow>

            <vueBrowserlikeWindow
                v-model="isTemplateOpen"
                :top="300"
                :left="100"
                :title="this.$t('SELECTIONS.social_media_template')"
                @close="onItemClick(null, {alias: 'template'}, null)"
            >
                <SocialMediaSelection
                    @plattform="plattformSelection"
                    @template="templateSelection"
                ></SocialMediaSelection>
            </vueBrowserlikeWindow>

            <vueBrowserlikeWindow
                v-model="isBackgroundImageOpen"
                :top="300"
                :left="100"
                :title="this.$t('SELECTIONS.background_image_title')"
                @close="onItemClick(null, {alias: 'backgroundImage'}, null)"
            >
                <BackgroundImage
                    @backgroundMoveable="backgroundMoveable"
                    @backgroundImage="backgroundImage"
                ></BackgroundImage>
            </vueBrowserlikeWindow>

            <vueBrowserlikeWindow
                v-model="isBorderOpen"
                :top="300"
                :left="100"
                :title="this.$t('SELECTIONS.border_title')"
                @close="onItemClick(null, {alias: 'border'}, null)"
            >
                <Border></Border>
            </vueBrowserlikeWindow>
        </div>

        <div
            :class="[this.sideNavigationCollapsed ? 'home' : 'homeExpanded', 'mt-3 mb-3']"
        >
            <b-container>
                <b-button
                    v-b-toggle.logo
                    class="collapse-button ml-2"
                    v-bind:class="[btnLogo ? 'activeborder' : '']"
                    @click="btnLogo = !btnLogo"
                    >{{ $t('SELECTIONS.logo_title') }}</b-button
                >
                <b-button
                    v-if="this.$store.state.choosenTemplate == 'emptyPage'"
                    v-b-toggle.bar
                    class="collapse-button ml-2"
                    v-bind:class="[btnBar ? 'activeborder' : '']"
                    @click="btnBar = !btnBar"
                    >{{ $t('SELECTIONS.bar_title') }}</b-button
                >

                <b-button
                    v-if="this.$store.state.choosenTemplate == 'testimonial'"
                    v-b-toggle.testimonialtext
                    class="collapse-button ml-2"
                    v-bind:class="[btnFact ? 'activeborder' : '']"
                    @click="btnFact = !btnFact"
                    >{{ $t('SELECTIONS.testimonial_settings') }}</b-button
                >

                <!-- Sections -->
                <b-collapse id="logo" class="mt-2" v-model="btnLogo">
                    <Logo-Selection></Logo-Selection>
                </b-collapse>

                <b-collapse id="bar" class="mt-2" v-model="btnBar"> </b-collapse>

                <b-collapse id="testimonialtext" class="mt-2" v-model="btnFact">
                    <Testimonial></Testimonial>
                </b-collapse>

                <Generator
                    :backgroundMoveable="this.socialMediaObject.backgroundMoveable"
                    :plattform="this.socialMediaObject.plattform"
                    :template="this.socialMediaObject.template"
                    :backgroundURL="this.socialMediaObject.backgroundURL"
                >
                </Generator>
            </b-container>

            <!-- <Generator/> -->
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Generator from '@/components/Generator.vue'
import NameSection from '@/components/NameSection.vue'
import SocialMediaSelection from '@/components/SocialMediaSelection.vue'
import BackgroundImage from '@/components/BackgroundImage.vue'
import Border from '@/components/Border.vue'
import LogoSelection from '@/components/LogoSelection.vue'
import Testimonial from '@/components/Testimonial.vue'

import vueBrowserlikeWindow from '@/components/vue-window/vue-browserlike-window.vue'

export default {
    name: 'Home',
    components: {
        Generator,
        NameSection,
        SocialMediaSelection,
        BackgroundImage,
        Border,
        LogoSelection,
        Testimonial,
        vueBrowserlikeWindow,
    },
    data: function() {
        return {
            // Variables for buttons
            btnBorder: false,
            btnLogo: false,
            btnBar: false,
            btnFact: false,

            isSaveOpen: false,
            isTemplateOpen: false,
            isBackgroundImageOpen: false,
            isBorderOpen: false,
            isLogoOpen: false,
            isBarOpen: false,
            sideNavigationCollapsed: false,

            isBackgroundImageDisabled: false,
            isBorderDisabled: false,

            // Object for image
            socialMediaObject: {
                backgroundMoveable: false,
                plattform: 'quer',
                template: {x: 640, y: 640},
                backgroundURL: '',
            },

            menu: [
                {
                    header: false,
                },
                {
                    href: '#',
                    title: this.$t('SIDEMENU.save'),
                    alias: 'save',
                    icon: {
                        element: 'div',
                        class: 'save',
                    },
                },
                {
                    href: '#',
                    title: this.$t('SIDEMENU.template'),
                    alias: 'template',
                    icon: {
                        element: 'div',
                        class: 'template',
                    },
                },
                {
                    href: '#',
                    title: this.$t('SIDEMENU.backgroundImage'),
                    alias: 'backgroundImage',
                    disabled: this.isBackgroundImageDisabled,
                    icon: {
                        element: 'div',
                        class: 'background_image_title',
                    },
                },
                {
                    href: '#',
                    title: this.$t('SIDEMENU.border'),
                    alias: 'border',
                    disabled: this.isBorderDisabled,
                    icon: {
                        element: 'div',
                        class: 'border_title',
                    },
                },
            ],
        }
    },
    methods: {
        plattformSelection(plattform) {
            this.socialMediaObject.plattform = plattform
        },
        templateSelection(template) {
            this.socialMediaObject.template = template
        },
        backgroundMoveable(moveable) {
            this.socialMediaObject.backgroundMoveable = moveable
        },
        backgroundImage(url) {
            this.socialMediaObject.backgroundURL = url
        },

        // eslint-disable-next-line no-unused-vars
        onItemClick(event, item, node) {
            if (item.alias == 'save') {
                this.isSaveOpen = !this.isSaveOpen
            } else if (item.alias == 'template') {
                this.isTemplateOpen = !this.isTemplateOpen
            } else if (item.alias == 'backgroundImage') {
                this.isBackgroundImageOpen = !this.isBackgroundImageOpen
            } else if (item.alias == 'border') {
                this.isBorderOpen = !this.isBorderOpen
            }
        },

        onToggleCollapse(collapsed) {
            this.sideNavigationCollapsed = collapsed
        },
    },

    watch: {
        '$store.state.choosenTemplate': {
            handler() {
                if (this.$store.state.choosenTemplate == 'emptyPage') {
                    this.isBorderDisabled = false
                    this.isBackgroundImageDisabled = false
                    this.menu[3].disabled = false
                    this.menu[4].disabled = false
                } else {
                    this.isBorderDisabled = true
                    this.isBackgroundImageDisabled = true
                    this.menu[3].disabled = true
                    this.menu[4].disabled = true
                    this.isBackgroundImageOpen = false
                    this.isBorderOpen = false
                }
            },
        },
    },
}
</script>

<style lang="scss">
div > .collapse-button {
    background-color: $green-dark;
    border-color: $green-light;

    &:hover,
    &:active,
    &:focus {
        background-color: $blue-light;
        border-color: $blue-light;
    }
}

.homeExpanded {
    padding-left: 200px;
    transition: 0.3s ease;
}

.home {
    padding-left: 0px;
    transition: 0.3s ease;
}

*:active {
    outline: none;
}

div > .activeborder {
    border: 2px solid $green-dark;
}

.toggle-icon {
    background-image: url('./../assets/img/svg/transfer.svg');
    position: absolute;
    margin-top: -15px;
    margin-left: -15px;
    height: 30px;
    width: 30px;
}

.save {
    background-image: url('./../assets/img/svg/save.svg');
}

.template {
    background-image: url('./../assets/img/svg/web-design.svg');
}

.background_image_title {
    background-image: url('./../assets/img/svg/background.svg');
}

.border_title {
    background-image: url('./../assets/img/svg/rahmen.svg');
}

.v-sidebar-menu,
.v-sidebar-menu.vsm_expanded,
.v-sidebar-menu.vsm_collapsed {
    top: 63px;
    background-color: $green-dark;
}

.v-sidebar-menu .vsm--item:not(:first-child) {
    border-bottom: 1px solid $green-light-alpha;
}

div > .v-sidebar-menu .vsm--toggle-btn {
    background-color: $green-dark;
    border-top: 1px solid $green-light-alpha;
}

#app .v-sidebar-menu .vsm--link_level-1.vsm--link_exact-active,
#app .v-sidebar-menu .vsm--link_level-1.vsm--link_active {
    box-shadow: none;
    -webkit-box-shadow: none;
}

#app .v-sidebar-menu .vsm--icon {
    background-color: transparent;
}
</style>
