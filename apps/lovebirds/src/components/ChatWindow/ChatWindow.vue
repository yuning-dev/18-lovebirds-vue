<template>
    <div :class="$style.wrapper">
        <div :class="$style.chatHeader">
            <div :class="$style.chatee">Pablo Fernandez</div>
            <div :class="$style.headerIcons">
                <div :class="[$style.headerIcon, $style.minimiseBtn]"><font-awesome-icon icon="fa-solid fa-window-minimize" size="lg"/></div>
                <div :class="$style.headerIcon"><font-awesome-icon icon="fa-solid fa-xmark" size="lg"/></div>
            </div>
        </div>
        <div :class="$style.chatWindow">
            <div :class="$style.chatBody">
                <template v-for="message in enrichedMessages">
                    <div :class="{ [$style.rightBubble]: [message.isRight], [$style.leftBubble]: [!message.isRight] }">{{ message.content }}</div>
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
import { mapState, mapWritableState } from 'pinia'

import { useUserStore } from '@/stores/user'

export default{
    name: 'ChatWindow',
    data() {
        return {
            // messages: [],
            content: '',
        }
    },
    computed: {
        ...mapState(useUserStore, ['id']),
        ...mapWritableState(useUserStore, ['messages']),
        enrichedMessages() {
            let messagesDup = this.messages.map((message) => ({
                ...message,
                isRight: message.id === this.id
            }))
            return messagesDup
        }
    },
    methods: {
        sendBtnClicked() {
            if (!this.content) {
                return
            }
            const message = {
                content: this.content,
                author: ''
            }
            // let binary = this.getRandowBinary()
            // if (binary === 0) {
            //     message.author = 'Jess'
            //     this.isRight = true
            // } else {
            //     message.author = 'Pablo'
            //     this.isLeft = true
            // }
            // console.log(this.isRight)
            // console.log(this.isLeft)
            // console.log(message.author)
            this.messages.push(message)
            this.content = ''
            // this.isRight = false
            // this.isLeft = false
        },
        // getRandowBinary() {
        //     return Math.floor(Math.random() * 2)
        // }
    }
}

</script>

<style module src="./ChatWindow.css"></style>