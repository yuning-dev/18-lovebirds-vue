<template>
    <div :class="$style.wrapper" style="background-image: url('profile-background.jpg')">
        <div :class="$style.contentOuterWrapper">
            <div :class="$style.chevronContainer">
                <font-awesome-icon :class="$style.leftChevron" icon="fa-solid fa-chevron-left" size="xl"/>
                <font-awesome-icon :class="$style.rightChevron" icon="fa-solid fa-chevron-right" size="xl"/>
            </div>
            <div :class="$style.contentWrapper">
                <img :class="$style.profileImg" src="../../../public/profile-pic.jpg" height="450">
                <div :class="$style.textWrapper">
                    <div :class="$style.name">Pablo Fernandez</div>
                    <div :class="$style.age">21</div>
                    <div :class="$style.tagInfoContainer">
                        <div :class="$style.tag1">I love</div><div :class="$style.info">posing, surfing and gaming</div>
                    </div>
                    <div :class="$style.tagInfoContainer">
                        <div :class="$style.tag2">I am</div><div :class="$style.info">extroverted, cheeky and charming</div>
                    </div>
                    <button :class="$style.heartBtn" @click="heartBtnClicked" @mouseover="hover = true" @mouseleave="hover = false">
                        <font-awesome-icon :class="$style.heartIcon" :beat="hover" v-if="!isHearted" icon="fa-regular fa-heart" size="lg" />
                        <font-awesome-icon :class="$style.heartIcon" v-if="isHearted" icon="fa-solid fa-heart" size="lg" />
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { mapState } from 'pinia'

import { useUserStore } from '@/stores/user';

export default {
    name: 'Profile',
    data() {
        return {
            isHearted: false,
            hover: false
        }
    },
    computed: {
        ...mapState(useUserStore, ['user']),
    },
    methods: {
        heartBtnClicked() {
            this.isHearted = !this.isHearted
        },
    }
}
</script>

<style module src="./Profile.css"></style>