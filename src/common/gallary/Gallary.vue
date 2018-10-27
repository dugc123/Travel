<template>
<div class="page" @click="handleGallaryClick">
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in imgs" :key="index">
                <img class="gallary-img" :src="item">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
    props:{
        imgs:Array,
        default(){
            return [
            ]
        }
    },
 data() {
 return {
      swiperOption:{
        pagination: '.swiper-pagination',
        paginationType:"fraction" ,
        observeParents:true,
        observer:true
    }
 }
 },
methods: {
    handleGallaryClick(){
        this.$emit("close")
    }
}
}
</script>

<style scoped lang="stylus">
.page >>> .swiper-container
    overflow:inherit
.page
    display:flex;
    flex-direction :column;
    justify-content :center;
    z-index:998;
    position:fixed;
    left:0;
    right:0;
    top:0;
    bottom:0;
    background-color #000
    .wrapper
        height :0;
        width:100%;
        padding-bottom:100%;
        .gallary-img
            width:100%;
        .swiper-pagination
            color:#fff;
            bottom:-1rem;
</style>
