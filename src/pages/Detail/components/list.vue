<template>
<div class="page">
    <div class="item" v-for="(item,index) in list" :key="index">
        <div class="item-title border-bottom">
            <span class="item-title-icon"></span>
            {{item.title}}
        </div>
        <div v-if="item.children" class="item-children">
            <detail-list :list="item.children"></detail-list>
        </div>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
    name:"DetailList",
    props:{
        list:Array
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
    .item-title
        line-height :.8rem;
        font-size :.32rem;
        padding:0 .2rem;
        .item-title-icon
            position :relative;
            top:.06rem;
            left:.06rem;
            display: inline-block;
            width: .36rem;
            height: .36rem;
            background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
            margin-right: .1rem;
            background-size: .4rem 3rem;
    .item-children
        padding-left:.2rem;
</style>
