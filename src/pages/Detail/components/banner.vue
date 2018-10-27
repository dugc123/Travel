<template>
<div>
    <div class="banner" @click="handleBannerClick">
    <img class="banner-img" :src="bannerImg">
        <div class="banner-info">
            <div class="banner-title">{{this.sightName}}</div>
            <div class="banner-number">
                <span class="iconfont banner-icon">&#xe692;</span>
                {{this.gallaryImgs.length}}</div>
        </div>
    </div>
    <fade-animation>
        <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close = "handleGallayClose"></common-gallary>
    </fade-animation>
</div>
</template>

<script type="text/ecmascript-6">
import CommonGallary from "common/gallary/Gallary"
import FadeAnimation from "common/fade/Fade"
export default {
    props:{
        sightName:String,
        bannerImg:String,
        gallaryImgs:Array
    },
 data() {
 return {
    showGallary:false
 }
 },
 methods: {
    handleBannerClick(){
        this.showGallary = true  
    },
    handleGallayClose(){
        this.showGallary = false 
    }
 },
 components: {
    CommonGallary,
    FadeAnimation
 }
}
</script>

<style scoped lang="stylus">
.banner
    position :relative;
    overflow :hidden;
    height:0;
    padding-bottom:55%;
    .banner-img
        width:100%;
    .banner-info
        position :absolute;
        display :flex;
        left:0;
        right:0;
        bottom:0;
        line-height :.6rem
        color:#fff;
        background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8));
        .banner-title
            flex:1;
            font-size :.36rem;
            margin-left :.18rem;
            margin-bottom :.18rem;
        .banner-number
            padding:0 .4rem;
            height:.4rem;
            line-height :.4rem;
            border-radius :.3rem;
            background-color rgba(0,0,0,.4)
            .banner-icon
                margin-right :.1rem
</style>
