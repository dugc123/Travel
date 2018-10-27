<template>
 <div class="page">
     <div class="title">周末去哪儿</div>
     <ul>
         <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
             <div class="item-img-wrapper">
                <img :src="item.imgUrl" class="item-img">
             </div>
             <div class="item-info">
                 <p class="item-title">{{item.title}}</p>
                 <p class="item-desc">{{item.desc}}</p>
             </div>
         </li>
     </ul>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
    props:{
        weekendList:Array
    },
 data() {
 return {
 }
 },
 components: {

 }
}
</script>

<style scoped lang="stylus">
.title
    line-height :.8rem;
    background-color #eee;
    text-align :center
.item-img-wrapper
    overflow :hidden;
    height:0;
    padding-bottom:37.09%;
    .item-img
        width:100%;
.item-info
    padding:.2rem;
    min-width :0
    .item-title
        line-height:.54rem;
        font-size:.28rem;
    .item-desc
        line-height:.4rem;
        color:#333;
        font-size : .24rem;
        overflow :hidden;
        white-space :nowrap;
        text-overflow:ellipsis;
        margin: .1rem 0;
</style>
