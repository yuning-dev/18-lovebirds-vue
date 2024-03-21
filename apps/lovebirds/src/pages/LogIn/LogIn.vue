<template>
    <div :class="$style.wrapper" style="background-image: url('meadows-background.jpg')">
        <div :class="$style.panelsWrapper">
            <img :class="$style.coupleImg" src="/logIn.jpg" width="250">
            <div :class="$style.contentBox">
                <div :class="$style.title">Log in</div>
                <div :class="$style.contentSubBox">           
                    <div :class="$style.contentWrapper">
                        <input type="text" :class="{[$style.redBorder]: emailRedBorders}" data-testid="email" v-model="email" placeholder="email">
                        <input type="text" :class="{[$style.redBorder]: passwordRedBorders}" data-testid="password" v-model="password" placeholder="password">
                    </div>
                    <button :class="$style.logInBtn" data-testid="logInBtn" @click="logInBtnClicked">Log in</button>
                    <div :class="$style.signUpMessage">Don't have an account? 
                        <span><RouterLink to="/sign-up" data-testid="signUpLink">Creat one here</RouterLink></span>
                    </div>    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'pinia';

import { useUserStore } from '@/stores/user';

export default {
    name: 'LogIn',
    data() {
        return {
            email: null,
            password: null,
            hasLogInBtnBeenClicked: false
        }
    },
    computed: {
        emailRedBorders() {
            return this.hasLogInBtnBeenClicked && this.isEmailEmpty
        },
        passwordRedBorders() {
            return this.hasLogInBtnBeenClicked && this.isPasswordEmpty
        },
        isEmailEmpty() {
            return !this.email          
        },
        isPasswordEmpty() {
            return !this.password
        }
    },
    methods: {
        ...mapActions(useUserStore, ['logIn']),
        logInBtnClicked() {
            this.hasLogInBtnBeenClicked = true
            if (!(this.email && this.password)) {
                return
            }
            
            this.logIn({
                email: this.email,
                password: this.password
            }).then(() => {
                this.$router.push({ name: 'home' })
            }).catch((error) => {
                // display error
            })

            // TODO - add error message when user authentication fails
        },
    }
}

</script>

<style module src="./LogIn.css"></style>