<template>
 <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
            <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl"> 
        </div>
            <p class="icon-desc">{{item.desc}}</p>    
        </div>
     </swiper-slide> 
     </swiper>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
    props:{
        iconList:Array
    },
  data() {
    return {
        swiperOption:{
            autoplay: false
     }
    };
  },
  //分成几个页面
  computed:{
      pages (){
          const pages = []
          this.iconList.forEach((item,index)=>{
            const page = Math.floor(index / 8)
            if (!pages[page]) {
                pages[page] = []
            }   
            pages[page].push(item)
        })
        return pages
            }
        }
};
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl';

.icons >>> .swiper-container
    height: 0;
    padding-bottom: 50%;
.icons
    margin-top: .2rem
    .icon 
        position: relative;
        overflow: hidden;
        float: left;
        width: 25%;
        height: 0;
        padding-bottom: 25%;
        .icon-img 
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0.44rem;
            .icon-img-content 
                height: 86%;
                display: block;
                margin: 0 auto;
        .icon-desc 
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 0.44rem;
            line-height: 0.44rem;
            text-align: center;
            color: $darkTextColor;
            /*字数多出时隐藏 */
            overflow :hidden;
            white-space :nowrap;
            text-overflow:ellipsis;

</style>
