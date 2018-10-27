<template>
 <div class="wrapper">
  <swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="(item,index) in swiperList" :key="index"><img class="swiper-img" :src="item.imgUrl"></swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  props:{
    swiperList:Array
  },
 data() {
 return {
    swiperOption:{
        pagination: '.swiper-pagination' ,
        loop:true,
        autoplay: 3000
    }
 }
 },
computed:{
  showSwiper(){
    return this.swiperList.length
  }
}
}
</script>

<style scoped lang="stylus">
.wrapper >>> .swiper-pagination-bullet-active
  background-color #fff
.wrapper
  width :100%

.swiper-img
  width :100%
  height :3rem

</style>
