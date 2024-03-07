<template>
    <div :class="$style.wrapper">
        <div :class="$style.topbar">
            <RouterLink to="/"><div :class="$style.logo">Lovebirds<sup>TM</sup></div></RouterLink>
            <div :class="$style.topbarRight">
                <RouterLink to="/sign-up" style="text-decoration: none"><div :class="$style.topbarLink">Sign-up/Log In</div></RouterLink>
                <div :class="$style.topbarLink">Notifications</div>
                <div :class="$style.topbarLink">Messages</div>
                <div :class="$style.topbarLink">Account</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Topbar'
}
</script>

<style module src="./Topbar.css"></style>