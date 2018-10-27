<template>
<div class="page">
    <div class="title">热销推荐</div>
    <ul>
        <router-link  
        tag="li"
        class="item border-bottom" 
        v-for="item in recommendList"
        :key="item.id" 
        :to="'/detail/'+ item.id">
            <img :src="item.imgUrl" class="item-img">
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">还记得影视剧中，皇帝上朝的金銮殿嘛？金銮殿名为太和殿，是皇帝登基和举行大典的地方。</p>
                <button class="item-button">查看详情</button>
            </div>
        </router-link>
    </ul>
</div>
</template>

<script type="text/ecmascript-6">
export default {
    props:{
        recommendList:Array
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
.item
    display :flex;
    height : 1.9rem;
    overflow : hidden;
    .item-img
        height:1.7rem;
        width:2.2rem;
        padding:.1rem;
    .item-info
        flex:1;
        padding:.1rem;
        min-width :0
        .item-title
            line-height:.54rem;
            font-size:.38rem;
        .item-desc
            line-height:.4rem;
            color:#bbb;
            overflow :hidden;
            white-space :nowrap;
            text-overflow:ellipsis;
            margin: .1rem 0;
        .item-button
          background-color : gold;
          border-radius:.08rem;
          padding:0 .2rem;
          color:#fff;
          line-height .5rem;
</style>
