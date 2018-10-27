<template>
<div>
<div class="search">
    <input v-model="keyword" type="text" class="search-input" placeholder="输入城市名或拼音">
</div>
<div class="search-content" ref="wrapper" v-show="keyword">
    <ul>
        <li class="search-item border-bottom"
         v-for="(item,index) in list"
          :key="index" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
    </ul>
</div>
</div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import {mapState,mapMutations} from "vuex"

export default {
    props:{
        cities:Object
    },
 data() {
 return {
    keyword:"",
    list:[],
    timer:null
}
},
methods: {
    handleCityClick(city){
        // alert(city)
        this.changeCity(city)
        this.$router.push("/")
    },
    ...mapMutations(["changeCity"])
},
watch: {
    keyword(){
        if (this.timer) {
            clearTimeout(this.timer)
        }
        if (!this.keyword) {
            this.list = []
            return 
        }
        this.timer = setTimeout(() => {
            const result = []
            for(let i in this.cities){
                this.cities[i].forEach((value)=>{
                    if (value.spell.indexOf(this.keyword) > -1 || 
                    value.name.indexOf(this.keyword) > -1) {
                        result.push(value)
                    }
                })
            }
            this.list = result
        }, 100);
    }
},
computed: {
  hasNoData(){
      return !this.list.length
  }  
},
mounted () {
   this.scroll = new BScroll(this.$refs.wrapper)
},
}
</script>

<style scoped lang="stylus">
@import "~styles/varibles.styl"
.search
    height : .72rem;
    padding:0 .1rem;
    background:$bgColor;
    .search-input
        width:100%;
        height:.62rem;
        line-height :.62rem;
        box-sizing : border-box;
        padding:0 .1rem;
        text-align :center;
        border-radius:.06rem;
        color:#555;
.search-content
    z-index :1;
    overflow :hidden;
    position:absolute;
    top:1.58rem;
    left:0;
    right:0;
    bottom:0;
    background-color #eee
    .search-item
        line-height : .6rem
        color:#555;
        padding-left:.3rem;
        background-color: #fff
</style>
