<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Topbar from './components/Topbar.vue'
</script>

<template>
    <Topbar />
    <div :class="layout.metaWrapper">
        <RouterView/>
    </div>
</template>

<style module="layout" src="@/styles/generalLayout.css"></style>
