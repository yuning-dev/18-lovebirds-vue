<template>
    <div :class="$style.wrapper" style="background-image: url('hexagon-chat-background.jpg')">
        <ChatWindow />
    </div>
</template>

<script>
import ChatWindow from '@/components/ChatWindow/ChatWindow.vue'

export default {
    name: 'Chat',
    components: {
        ChatWindow
    },
}
</script>

<style module src="./Chat.css"></style>