<template>
    <transition>
        <slot></slot>
    </transition>   
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {

 }
 },
 components: {

 }
}
</script>

<style scoped lang="stylus">
    .v-enter, .v-leave-to
        opacity :0
    .v-enter-active, .v-leave-active
        transition:opacity .5s
</style>
