<template>
 <div class="page">
     <ul class="list">
        <li class="item"
        v-for="item in letters" 
        :key="item"
        :ref="item"
        @click="handleLetterClick"
        @touchstart.prevent = "handleTouchStart"
        @touchmove = "handleTouchMove"
        @touchend = "handleTouchEnd"
        >{{item}}</li>
     </ul>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
    props:{
        cities:Object
    },
    data(){
        return {
            touchStatus:false,
            startY:0,
            timer:null
        }
    },
    updated () {
        this.startY = this.$refs["A"][0].offsetTop
    },
    methods: {
        handleLetterClick(e){
            // console.log(e.target.innerText)
            this.$emit("change",e.target.innerText)
        },
        handleTouchStart(){
            this.touchStatus = true
        },
        handleTouchMove(e){
            if (this.timer) {
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(() => {
            const touchY = e.touches[0].clientY - 74
            // console.log(touchY)
            const index = Math.floor((touchY - this.startY)/20)
            // console.log(index)
            if (index >= 0 && index<this.letters.length) {
                this.$emit("change",this.letters[index])
            }
            }, 15);
        },
        handleTouchEnd(){
            this.touchStatus = false
        }
    },
    computed: {
        letters(){
            const letters = []
            for(let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    }
}
</script>

<style scoped lang="stylus">
    @import "~styles/varibles.styl"
    .list
        display :flex;
        flex-direction : column;
        justify-content :center;
        position:absolute;
        right:0;
        top:2rem;
        bottom : 0;
        width:.4rem;
        .item
            line-height :.4rem;
            text-align:center;
            color:$bgColor
</style>
