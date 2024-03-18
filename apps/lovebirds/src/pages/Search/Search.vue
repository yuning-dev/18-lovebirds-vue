<template>
    <div :class="$style.wrapper" style="background-image: url('couple-background1.jpg')">
        <div :class="$style.contentMetaWrapper">
            <div :class="$style.contentWrapper">
                <div :class="$style.intro">Help us find your ideal partner by telling us what they would be like:</div>
                <div :class="$style.optionsWrapper">
                    <div :class="$style.options">
                        Sex:
                        <select name="sex" v-model="sex" ref="sex" data-testid="sexSelect">
                            <option data-testid="female">Female</option>
                            <option>Male</option>
                            <option>Any</option>
                        </select>
                    </div>
                    <div :class="$style.options">
                        Age:
                        <div :class="{[$style.missingAge]: isAgeMissing}" data-testid="ageRedBox">
                            <div :class="$style.ageOptions">
                                <template v-for="ageOption in ageOptions">
                                    <div :class="$style.ageOption">
                                        <input type="checkbox" :class="$style.ageCheckbox" v-model="age" :id=ageOption name="age" :value=ageOption data-testid="ageCheckbox">
                                        <label :for=ageOption> {{ ageOption }}</label>
                                    </div>
                                </template>
                            </div>
                        </div>
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
                <button :class="$style.searchBtn" @click="searchBtnClicked" data-testid="submitBtn">Find love</button>
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
            wasSearchBtnClicked: false,
        }
    },
    computed: {
        isAgeMissing() {
            return this.wasSearchBtnClicked && !this.age.length
        },
        ageOptions() {
            return ['18-25', '26-35', '36-45', '46-55', '56-65', '>65']
        },
        isInfoMissing() {
            return this.wasSearchBtnClicked && (!this.age.length || !this.sex) 
        }
    },
    methods: {
        searchBtnClicked() {
            this.wasSearchBtnClicked = true
            if (!this.sex || !this.age.length) {
                if (!this.sex) {
                    this.$refs.sex.focus()
                }
            } else {
                this.$router.push('/profile')
            }
        }
    }
}
</script>

<style module src="./Search.css"></style>