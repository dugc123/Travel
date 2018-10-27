<template>
<div class="list" ref="wrapper">
    <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">{{this.city}}</div>
                </div>
            </div>           
        </div>
    <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
            <div class="button-wrapper" v-for="item in hot" 
            :key="item.id" @click="handleCityClick(item.name)" >
                <div class="button">{{item.name}}</div>
            </div>
        </div>
    </div>
    <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
            <div class="item border-bottom" 
            v-for="innerItem in item" 
            :key="innerItem.id"  @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
        </div>
    </div>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import {mapState,mapMutations} from "vuex"
export default {
    props:{
        hot:Array,
        cities:Object,
        letter:String
    },
    computed: {
        ...mapState(["city"])
    },
methods: {
    handleCityClick(city){
        // alert(city)
        this.changeCity(city)
        this.$router.push("/")
    },
    ...mapMutations(["changeCity"])
},
mounted () {
   this.scroll = new BScroll(this.$refs.wrapper)
},
watch: {
    letter(){
        if (this.letter) {
            const element = this.$refs[this.letter][0]
            // console.log(element)
            this.scroll.scrollToElement(element)
        }
    }
}
}
</script>

<style scoped lang="stylus">
@import "~styles/varibles.styl"
.border-topbottom
    &:before
        border-color:#ccc
    &:after
        border-color:#ccc
.list
    position:absolute;
    overflow :hidden;
    top:1.58rem;
    left:0;
    right:0;
    bottom:0;
    .title
        line-height:.54rem;
        background #eee;
        padding-left:.2rem;
        color:#555;
        font-size :.26rem;
    .button-list
        padding:.1rem .6rem .1rem .1rem;
        overflow :hidden;
        .button-wrapper
            width:33.33%;
            float:left;
            .button
                margin:.1rem;
                padding:.1rem 0;
                text-align :center;
                border:.02rem solid #ccc;
                border-radius:.06rem;
    .item-list
        .item
            line-height :.54rem;
            color:#555;
            padding-left:.2rem;
</style>
