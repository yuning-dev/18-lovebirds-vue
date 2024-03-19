<template>
    <div :class="$style.wrapper" style="background-image: url('profile-background.jpg')">
        <div :class="$style.contentWrapper">
            <img :class="$style.profileImg" src="../../../public/profile-pic.jpg" height="450">
            <div :class="$style.textWrapper">
                <div :class="$style.name">Pablo Fernandez</div>
                <div :class="$style.age">21</div>
                <div :class="$style.tagInfoContainer">
                    <div :class="$style.tag1">I love </div><div :class="$style.info"> posing, surfing and gaming</div>
                </div>
                <div :class="$style.tagInfoContainer">
                    <div :class="$style.tag1">I am </div><div :class="$style.info"> extroverted, cheeky and charming</div>
                </div>
                <button :class="$style.heartBtn"><font-awesome-icon icon="fa-regular fa-heart" size="lg" /></button>
            </div>
        </div>
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