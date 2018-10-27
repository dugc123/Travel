<template>
 <div class="page">
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
 </div>
</template>
<script type="text/ecmascript-6">
import axios from "axios"
import HomeHeader from "./components/Header"
import HomeSwiper from "./components/Swiper"
import HomeIcons from "./components/Icons"
import HomeRecommend from "./components/Recommend"
import HomeWeekend from "./components/Weekend"
import {mapState} from "vuex"
export default {
data() {
return {
    swiperList:[],
    iconList:[],
    recommendList:[],
    weekendList:[],
    lastCity:""
}
},
components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
},
computed: {
  ...mapState(["city"])  
},
methods: {
    getHomeInfo(){
        axios.get("/api/index.json?city="+this.city) 
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
        // console.log(res)
        res = res.data
        if (res.ret && res.data) {
            const data = res.data
            this.swiperList = data.swiperList
            this.iconList = data.iconList
            this.recommendList = data.recommendList
            this.weekendList = data.weekendList
        }
    }
},
mounted() {
    this.lastCity = this.city
    this.getHomeInfo()
},
activated() {
    if (this.lastCity !== this.city) {
        this.lastCity = this.city
        this.getHomeInfo()
    }
},
}
</script>

<style scoped lang="">
</style>
