<!-- @format -->

<template>
    <div>
        <b-card class="mb-2">
            <b-card-title>
                {{ $t('SELECTIONS.BORDER.title') }}
            </b-card-title>

            <b-card-body>
                <b-container>
                    <b-row>
                        <b-col cols="2">
                            <input
                                type="checkbox"
                                id="borderActivate"
                                v-model="borderActive"
                                @change="this.toggleBorder"
                            />
                        </b-col>
                        <b-col cols="1"></b-col>
                        <b-col>
                            <label class="form-check-label" for="borderActivate">{{
                                $t('SELECTIONS.BORDER.active')
                            }}</label>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="2">
                            <select
                                class="form-select"
                                id="borderColor"
                                aria-label="Default select example"
                                v-model="selectColor"
                                @change="this.changeColor"
                            >
                                <option value="green-light">Hellgrün</option>
                                <option value="blue-light">Hellblau</option>
                            </select>
                        </b-col>
                        <b-col cols="1">
                            <div
                                :class="[
                                    this.selectColor === 'blue-light' ? 'blue' : 'green',
                                    'showColor',
                                ]"
                            ></div>
                        </b-col>
                        <b-col>
                            <label class="form-check-label" for="borderColor">
                                {{ $t('SELECTIONS.BORDER.border_color') }}
                            </label>
                        </b-col>
                    </b-row>
                </b-container>
            </b-card-body>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'Border',

    data: function() {
        return {
            borderActive: this.$store.state.borderActive,
            selectColor: this.$store.state.borderColorString,
        }
    },
    methods: {
        toggleBorder: function() {
            this.$store.commit('toggleBorder')
            this.borderActive = this.$store.state.borderActive
        },

        changeColor(event) {
            this.$store.commit('changeBorderColor', event.target.value)
        },
    },
}
</script>

<style scoped lang="scss">
.showColor {
    height: 20px;
    width: 20px;
}

.blue {
    background-color: $blue-light;
}

.green {
    background-color: $green-light;
}
</style>
