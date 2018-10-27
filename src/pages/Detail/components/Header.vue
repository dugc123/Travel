<template>
 <div class="page">
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
        <div class="iconfont back-icon">&#xe624;</div>        
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
        景点详情
    <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
    </router-link>
    </div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
     showAbs : true,
     opacityStyle:{
         opacity:0
     }
 }
 }, 
 methods: {
   handleScroll(){
    // console.log(document.documentElement.scrollTop)
    const top = document.documentElement.scrollTop
    if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1?1:opacity
        this.opacityStyle = {
            opacity
        }
        this.showAbs = false
    }else{
        this.showAbs = true
    }
   }  
 },
activated() {
    window.addEventListener('scroll',this.handleScroll)
},
deactivated() {
    window.removeEventListener('scroll',this.handleScroll)
},
}
</script>

<style scoped lang="stylus">
@import "~styles/varibles.styl"
    .header-abs
        position :absolute;
        left:.2rem;
        top:.2rem;
        width:.8rem;
        height:.8rem;
        border-radius :.4rem;
        background-color:rgba(0,0,0,.6)
        .back-icon
            color:#fff;
            font-size :.4rem;
            text-align :center;
            line-height :.8rem;
            height :.8rem;
    .header-fixed
        z-index : 998;
        position :fixed;
        top:0;
        left:0;
        right:0;
        height:.86rem;
        line-height:.86rem;
        text-align:center;
        color:#fff;
        font-size :.32rem;
        background:$bgColor;
        .header-fixed-back
            text-align :center;
            font-size : .4rem;
            width:.64rem;
            color:#fff;
            position:absolute;
            top: 0;
            left:0;
</style>
