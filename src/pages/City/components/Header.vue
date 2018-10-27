<template>
 <div class="header">
    城市选择
    <router-link to="/">
        <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {

 }
 }
}
</script>

<style scoped lang="stylus">
@import "~styles/varibles.styl"
.header
    position :relative;
    overflow:hidden;
    height:.86rem;
    line-height:.86rem;
    text-align:center;
    color:#fff;
    font-size :.32rem;
    background:$bgColor;
    .back-icon
        text-align :center;
        font-size : .4rem;
        width:.64rem;
        color:#fff;
        position:absolute;
        top: 0;
        left:0;
</style>
