<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>

import Bscroll from 'better-scroll'
    export default {
        data(){
            return {
                scroll:null
            }
        },
        props:{
            probeType:{
                type:Number,
                default:0
            },
            pullUpLoad:{
                type:Boolean,
                default:false
            }
        },
        mounted(){
            this.scroll = new Bscroll(this.$refs.wrapper,{
               observeDOM:true,
               mouseWheel:true,
               click:true,
               probeType: this.probeType,
               pullUpLoad:this.pullUpLoad
            })
            //监听滚动的位置
            this.scroll.on('scroll',(position)=>{
                this.$emit('scroll',position)
            })
            //监听滚到底部
            this.scroll.on('pullingUp',()=>{
                this.$emit('pullingUp')
            })
            
        },
        methods:{
            scrollTo(x,y,time){
                this.scroll.scrollTo(x,y,time)
            },
            finishPullUp(){
                this.scroll.finishPullUp()
            },
            refresh(){
                this.scroll.refresh()
               
            }
        }
    }
</script>

<style scoped>

</style>