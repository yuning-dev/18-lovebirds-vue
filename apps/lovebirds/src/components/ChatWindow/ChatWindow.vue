<template>
    <div :class="$style.wrapper">
        <div :class="$style.chatHeader">
            <div :class="$style.chatee">Jess</div>
            <div :class="$style.headerIcons">
                <div :class="[$style.headerIcon, $style.minimiseBtn]"><font-awesome-icon icon="fa-solid fa-window-minimize" size="lg"/></div>
                <div :class="$style.headerIcon"><font-awesome-icon icon="fa-solid fa-xmark" size="lg"/></div>
            </div>
        </div>
        <div :class="$style.chatWindow">
            <div :class="$style.chatBody">
                <template v-for="message in messages">
                    <div :class="$style.bubble, {[$style.leftBubble]: isLeft, [$style.rightBubble]: isRight}">{{ message.content }}</div>
                </template>
            </div>
            <div :class="$style.bottomBar">
                <input type="text" v-model="content" :class="$style.chatInput" v-on:keyup.enter="sendBtnClicked"/>
                <button :class="$style.sendBtn" @click="sendBtnClicked">Send</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapWritableState } from 'pinia'

import { useUserStore } from '@/stores/user'

export default{
    name: 'ChatWindow',
    data() {
        return {
            messages: [],
            content: ''
        }
    },
    // computed: {
    //     ...mapWritableState('use')
    // },
    methods: {
        sendBtnClicked() {
            if (!this.content) {
                return
            }
            const message = {
                content: this.content,
                author: ''
            }
            this.messages.push(message)
            this.content = ''
        }
    }
}

</script>

<style module src="./ChatWindow.css"></style>