<template>
    <div :class="$style.wrapper">
        <div :class="$style.textWrapper">{{ user }}</div>
    </div>

</template>

<script>
import { mapState } from 'pinia'

import { useUserStore } from '@/stores/user';

export default {
    name: 'Profile',
    computed: {
        ...mapState(useUserStore, ['user']),
    }
}
</script>

<style module src="./Profile.css"></style>