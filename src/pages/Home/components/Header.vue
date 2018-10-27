<template>
 <div class="header">
<div class="header-left">
    <div class="iconfont back-icon">&#xe624;</div>
</div>
<div class="header-input">
    <span class="iconfont">&#xe632;</span>
    输入城市/景点/游玩主题</div>
    <router-link to="/city">
    <div class="header-right">{{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
    </router-link>
 </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from "vuex"
export default {
    computed: {
        ...mapState(["city"])
    }
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
.header
    display :flex
    line-height :.86rem
    background-color $bgColor
    color:#fff
.header-left
    width : .64rem
    float left
    .back-icon
        text-align :center
        font-size : .4rem
.header-input
    flex:1
    height : .64rem
    line-height :.64rem
    margin-top :.12rem
    margin-left :.2rem
    background-color #fff
    border-radius:.1rem
    color:#ccc
    padding-left:.2rem
.header-right
    min-width:1.04rem
    float : right
    text-align :center
    color:#fff
    padding-left:.08rem
    .arrow-icon
        font-size : .25rem
        padding-right:.06rem
</style>
