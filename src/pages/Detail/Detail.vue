<template>
 <div class="detail">
    <detail-banner :sightName="sightName"
    :bannerImg = "bannerImg"
    :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="container">
        <detail-list :list="list"></detail-list>
    </div>
 </div> 
</template>

<script>
import DetailBanner from "./components/banner"
import DetailHeader from "./components/header"
import DetailList from "./components/list"
import axios from "axios"
export default {
    name:"Detail",
 data() {
 return {
    sightName:"",
    bannerImg:"",
    gallaryImgs:[],
    list:[]
        }
        },
components:{
    DetailBanner,
    DetailHeader,
    DetailList,
 },
methods: {
    getDetailInfo(){
        axios.get('/api/detail.json?id=' + this.$route.params.id).then(res=>{
            let r = res.data
            if (r.ret && r.data) {
                const data = r.data
                // console.log(data)
                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.gallaryImgs = data.gallaryImgs
                this.list = data.categoryList
            }
        })
    }
},
mounted () {
    this.getDetailInfo()
}
}
</script>

<style scoped lang="stylus">
.container
    height:20rem
</style>
