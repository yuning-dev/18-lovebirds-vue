<template>
    <div :class="$style.wrapper" style="background-image: url('meadows-background.jpg')">
        <div :class="$style.contentBox">
            <div :class="$style.title">Sign-up</div>
            <div :class="$style.contentSubBox">
                <div :class="$style.logInLink">Already have an account? 
                    <RouterLink to="/log-in">Log in here</RouterLink></div>
                <div :class="$style.sectionTitle">Personal details</div>
                <div :class="$style.contentWrapper">
                    <div :class="$style.item">
                        First name
                        <input v-model="firstName" type="text" name="firstName">
                        <div v-if="!isFirstNameValid" :class="$style.errorMsg">Please enter only letters</div>
                        <div v-if="hasSignUpBtnBeenClicked && !this.firstName" :class="$style.requiredWarning">This field is required</div>
                    </div>
                    <div :class="$style.item">
                        Last name
                        <input v-model="lastName" type="text" name="lastName">
                        <div v-if="!isLastNameValid" :class="$style.errorMsg">Please enter only letters</div>
                        <div v-if="hasSignUpBtnBeenClicked && !this.lastName" :class="$style.requiredWarning">This field is required</div>
                    </div>
                    <div :class="$style.item">
                        Date of birth
                        <input v-model="dateOfBirth" type="date" :max="defaultDOB()">
                        <div v-if="hasSignUpBtnBeenClicked && !this.dateOfBirth" :class="$style.requiredWarning">This field is required</div>
                    </div>
                    <div :class="$style.item">
                        Sex
                        <select v-model="sex">
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="other">Other</option>
                        </select>
                        <div v-if="hasSignUpBtnBeenClicked && !this.sex" :class="$style.requiredWarning">This field is required</div>
                    </div>
                    <div :class="$style.item">
                        Email
                        <input v-model="email" type="text" name="email">
                        <div v-if="!isEmailValid" :class="$style.errorMsg">Please enter a valid email address</div>
                        <div v-if="hasSignUpBtnBeenClicked && !this.email" :class="$style.requiredWarning">This field is required</div>
                    </div>
                    <!-- <div :class="$style.item">
                        Phone number
                        <input v-model="phoneNumber" type="text" name="phoneNumber">
                    </div> -->
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
                        <div v-if="!isPasswordValid" :class="$style.errorMsg">{{ passwordRequirementsMsg }}</div>
                    </div>
                </div>
                <button :class="$style.signUpBtn" @click="signUpButtonClicked">Sign-up</button>
            </div>
        </div>
    </div>

</template>

<script>
import { mapActions } from 'pinia'

import { useUserStore } from '@/stores/user'

const testData = {
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '2000-01-28',
    email: 'johnnyboy@yopmail.com',
    sex: 'male',
    password: 'password123'
}

export default {
    name: 'SignUp',
    data() {
        // return {
        //     firstName: null,
        //     lastName: null,
        //     dateOfBirth: null,
        //     email: null,
        //     // phoneNumber: null,
        //     sex: null,
        //     password: null,
        // }
        return { 
            ...testData,
            hasSignUpBtnBeenClicked: false
        }
    },
    computed: {
        // TODO - reduce duplication for name validation by having a method called within computed properties
        isFirstNameValid() {
            if (this.firstName === null || this.firstName === '') {
                return true
            } else {
                let regex = /^[a-zA-Z]+$/
                return regex.test(this.firstName)
            }      
        },
        isLastNameValid() {
            if (this.lastName === null || this.lastName === '') {
                return true
            } else {
                let regex = /^[a-zA-Z]+$/
                return regex.test(this.lastName)
            }
        },
        isEmailValid() {
            if (this.email === null || this.email === '') {
                return true
            } else {
                let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return regex.test(this.email.toLowerCase())
                // TODO - replace with library
            }
        },
        doesPasswordContainNum() {
            let hasNumber = 0
            for (let i = 0; i < this.password.length; i++) {
                let num = Number(this.password[i])
                if (!Number.isNaN(num)) {
                    hasNumber++
                    break
                }                
            }            
            return (hasNumber === 1)
        },
        isPasswordValid() {
            if (this.password === null || this.password === '') {
                return true
            } else if (this.password.length >= 8 && this.password.length <= 20 && this.doesPasswordContainNum) {
                return true
            } else {
                return false
            }
        },
        passwordRequirementsMsg() {
            if (this.password.length < 8 || this.password.length > 20) {
                return 'Please enter a password between 8 and 20 characters long'
            } else if (!this.doesPasswordContainNum) {
                return 'The password needs to contain at least one number'
            }
        }
    },
    methods: {
        ...mapActions(useUserStore, ['signUp']),
        signUpButtonClicked() {
            this.hasSignUpBtnBeenClicked = true
            if (
                !(
                    this.isEmailValid 
                    && this.isFirstNameValid 
                    && this.isLastNameValid 
                    && this.sex 
                    && this.dateOfBirth 
                    && this.isPasswordValid
                ) || 
                (
                    !this.email
                    || !this.firstName
                    || !this.lastName
                    || !this.password
                )) {
                return
            }
            
            if(this.signUp({
                firstName: this.firstName,
                lastName: this.lastName,
                dateOfBirth: this.dateOfBirth,
                email: this.email,
                sex: this.sex,
                password: this.password
            })) {
                this.$router.push({ name: 'profile' })
            }
        },
        defaultDOB() {
            let today = new Date()
            today.setFullYear(2024 - 18)
            const todayInString = today.toISOString()
            const dateInString = todayInString.substring(0,10)
            return dateInString
        }
    }
}
</script>

<style module src="./SignUp.css"></style>