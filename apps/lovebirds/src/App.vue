<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Topbar from './components/Topbar.vue'
</script>

<template>
    <div :class="layout.metaWrapper">
        <Topbar />
        <RouterView/>
    </div>
</template>

<style module="layout" src="@/styles/generalLayout.css"></style>
