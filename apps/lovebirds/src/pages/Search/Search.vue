<template>
    <div :class="$style.wrapper" style="background-image: url('couple-background1.jpg')">
        <div :class="$style.contentMetaWrapper">
            <div :class="$style.contentWrapper">
                <div :class="$style.intro">Help us find your ideal partner by telling us what they would be like:</div>
                <div :class="$style.optionsWrapper">
                    <div :class="$style.options">
                        Sex:
                        <select name="sex" v-model="sex" ref="sex">
                            <option>Female</option>
                            <option>Male</option>
                            <option>Any</option>
                        </select>
                    </div>
                    <div :class="$style.options">
                        Age:
                        <div :class="{[$style.missingAge]: isAgeMissing}">
                            <div :class="$style.ageOptions">
                                <template v-for="ageOption in ageOptions">
                                    <div :class="$style.ageOption">
                                        <input type="checkbox" :class="$style.ageCheckbox" v-model="age" :id=ageOption name="age" :value=ageOption>
                                        <label :for=ageOption> {{ ageOption }}</label>
                                    </div>
                                </template>
                                <!-- <input type="checkbox" v-model="age" id="18-25" name="age" value="18-25">
                                <label for="18-25">18-25</label>
                                <input type="checkbox" v-model="age" id="26-35" name="age" value="26-35" :class="$style.ageOption">
                                <label for="26-35">26-35</label>
                                <input type="checkbox" v-model="age" id="36-45" name="age" value="36-45" :class="$style.ageOption">
                                <label for="36-45">36-45</label>
                                <input type="checkbox" v-model="age" id="46-55" name="age" value="46-55">
                                <label for="46-55">46-55</label>
                                <input type="checkbox" v-model="age" id="56-65" name="age" value="56-65" :class="$style.ageOption">
                                <label for="56-65">56-65</label>
                                <input type="checkbox" v-model="age" id=">65" name="age" value="65" :class="$style.ageOption">
                                <label for=">65">>65</label> -->
                            </div>
                        </div>
                        <!-- <select name="age" multiple v-model="age" ref="age">
                            <option>18-25</option>
                            <option>26-35</option>
                            <option>36-45</option>
                            <option>46-55</option>
                            <option>56-65</option>
                            <option>>66</option>
                            <option>Any</option>
                        </select> -->
                    </div>
                    <div :class="$style.options">
                        Personality:
                        <!-- <select name="personality">
                            <option>Extroverted</option>
                            <option>Introverted</option>
                            <option>Chatty</option>
                            <option>Bossy</option>
                            <option>Timid</option>
                            <option></option>
                        </select> -->
                    </div>
                    <div :class="$style.options">
                        Hobbies:
                    </div>
                </div>
                <div :class="$style.warning" v-if="isInfoMissing">Please provide the required information</div>
                <button :class="$style.searchBtn" @click="searchBtnClicked">Find love</button>
            </div>
        </div>            
    </div>
</template>

<script>
export default {
    name: 'Search',
    data() {
        return {
            sex: null,
            age: [],
            isInfoMissing: false,
            wasSearchBtnClicked: false,
        }
    },
    computed: {
        isAgeMissing() {
            return this.wasSearchBtnClicked && this.age.length === 0
        },
        ageOptions() {
            return ['18-25', '26-35', '36-45', '46-55', '56-65', '>65']
        }
        // TODO - add ageOptions array and use it to generate the checkboxes
    },
    methods: {
        searchBtnClicked() {
            this.wasSearchBtnClicked = true
            if (this.sex === null || this.age.length === 0) {
                this.isInfoMissing = true
                if (this.sex === null) {
                    this.$refs.sex.focus()
                }
            } else {
                this.$router.push('/profile')
            }
            console.log(this.isAgeMissing)
        }
    }
}
</script>

<style module src="./Search.css"></style>