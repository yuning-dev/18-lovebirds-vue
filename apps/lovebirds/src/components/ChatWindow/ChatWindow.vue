<template>
    <div :class="$style.wrapper">
        <div :class="$style.chatHeader">
            <div :class="$style.chatee">Jess</div>
            <div :class="$style.headerIcons">
                <div :class="$style.headerIcon"><font-awesome-icon icon="fa-solid fa-window-minimize" size="lg"/></div>
                <div :class="$style.headerIcon"><font-awesome-icon icon="fa-solid fa-xmark" size="lg"/></div>
            </div>
        </div>
        <div :class="$style.chatWindow">
            <template v-for="message in messages">
                <div :class="$style.msgBubble">{{ message.content }}</div>
            </template>
            <div :class="$style.bottomBar">
                <input type="text" v-model="content" :class="$style.chatInput"/>
                <button :class="$style.sendBtn" @click="sendBtnClicked">Send</button>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'ChatWindow',
    data() {
        return {
            messages: [],
            content: ''
        }
    },
    methods: {
        sendBtnClicked() {
            const message = {
                content: this.content,
                author: ''
            }
            this.messages.push(message)
        }
    }
}

</script>

<style module src="./ChatWindow.css"></style>