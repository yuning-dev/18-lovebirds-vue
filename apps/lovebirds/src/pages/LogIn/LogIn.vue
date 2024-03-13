<template>
    <div :class="$style.wrapper" style="background-image: url('meadows-background.jpg')">
        <div :class="$style.panelsWrapper">
            <img :class="$style.coupleImg" src="/logIn.jpg" width="250">
            <div :class="$style.contentBox">
                <div :class="$style.title">Log in</div>
                <div :class="$style.contentSubBox">           
                    <div :class="$style.contentWrapper">
                        <input type="text" v-model="email" placeholder="email">
                        <input type="text" v-model="password" placeholder="password">
                    </div>
                    <button :class="$style.logInBtn" @click="logInBtnClicked">Log in</button>
                    <div :class="$style.signUpLink">Don't have an account? 
                        <RouterLink to="/sign-up">Creat one here</RouterLink>
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
            password: null
        }
    },
    methods: {
        ...mapActions(useUserStore, ['logIn']),
        logInBtnClicked() {
            this.logIn({
                email: this.email,
                password: this.password
            })
        }
    }
}

</script>

<style module src="./LogIn.css"></style>