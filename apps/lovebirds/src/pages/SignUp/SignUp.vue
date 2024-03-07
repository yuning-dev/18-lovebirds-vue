<template>
    <div :class="layout.metaWrapper">
        <div :class="$style.wrapper" style="background-image: url('meadows-background.jpg')">
            <div :class="$style.contentBox">
                <div :class="$style.title">Sign-up</div>
                <div :class="$style.contentSubBox">
                    <div :class="$style.sectionTitle">Personal details</div>
                    <div :class="$style.contentWrapper">
                        <div :class="$style.item">
                            First name
                            <input v-model="firstName" type="text" name="firstName">
                        </div>
                        <div :class="$style.item">
                            Last name
                            <input v-model="lastName" type="text" name="lastName">
                        </div>
                        <div :class="$style.item">
                            Date of birth
                            <input v-model="dateOfBirth" type="date">
                        </div>
                        <div :class="$style.item">
                            Sex
                            <select v-model="sex">
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div :class="$style.item">
                            Email
                            <input v-model="email" type="text" name="email">
                        </div>
                        <div :class="$style.item">
                            Phone number
                            <input v-model="phoneNumber" type="text" name="phoneNumber">
                        </div>
                    </div>
                    <div :class="$style.sectionTitle">About you</div>
                    <div :class="$style.contentWrapper">
                        <div :class="$style.item">
                            Personality
                        </div>
                        <div :class="$style.item">
                            Hobbies
                        </div>
                    </div>
                    <div :class="$style.sectionTitle">Account details</div>
                    <div :class="$style.contentWrapper">
                        <div :class="$style.item">
                            Password
                            <input v-model="password" type="text">
                        </div>
                    </div>
                    <button :class="$style.signUpBtn" @click="signUpButtonClicked">Sign-up</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'pinia'

import { useUserStore } from '@/stores/user'

export default {
    name: 'SignUp',
    data() {
        return {
            firstName: null,
            lastName: null,
            dateOfBirth: null,
            email: null,
            phoneNumber: null,
            sex: null,
            password: null,
        }
    },
    methods: {
        ...mapActions(useUserStore, ['signUp']),
        signUpButtonClicked() {
            this.signUp({
                firstName: this.firstName,
                lastName: this.lastName,
                dateOfBirth: this.dateOfBirth,
                email: this.email,
                phoneNumber: this.phoneNumber,
                sex: this.sex,
                password: this.password
            })
        }
    }
}
</script>

<style module src="./SignUp.css"></style>
<style module="layout" src="@/styles/generalLayout.css"></style>