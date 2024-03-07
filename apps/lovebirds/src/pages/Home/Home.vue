<template>
    <div :class="layout.metaWrapper">
        <div :class="$style.wrapper" style="background-image: url('couple-background3.jpg')">
            <div :class="$style.intro">Are you ready to find your happy ever after?</div>
            <RouterLink to="/search"><button :class="$style.readyBtn">I'm ready</button></RouterLink>
            <div :class="$style.couplesWrapper">
                <div :class="$style.coupleBox">Zoe and Matt 
                    <hr>
                    <p :class="$style.coupleText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed velit in nisi tempor placerat eu nec tellus.</p>
                </div>
                <div :class="$style.coupleBox">Joel and Francis
                    <hr>
                    <p :class="$style.coupleText">Sed in dui id urna elementum molestie sed ut massa. Curabitur non dui et metus rutrum eleifend et id elit. Nullam eu accumsan metus.</p>
                </div>
                <div :class="$style.coupleBox">Ashley and Miriam
                    <hr>
                    <p :class="$style.coupleText">Donec consequat est et lobortis iaculis. Ut ut pulvinar justo. Cras et mattis nibh, sed congue sem. </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
}
</script>

<style module src="./Home.css"></style>
<style module="layout" src="@/styles/generalLayout.css" />