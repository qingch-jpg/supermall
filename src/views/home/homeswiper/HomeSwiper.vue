<template>
   <Swiper>
           <SwiperItem v-for="item in banners">
               <a :href="item.link">
                   <img :src="item.image" alt="" @load="SwiperImageLoad">
               </a>
           </SwiperItem>
       </Swiper>
</template>

<script>

    import {Swiper,SwiperItem} from 'components/common/swiper'
    export default {
        components:{
            Swiper,
            SwiperItem
        },
        props:{
            banners:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return {
                isLoad:false
            }
        },
        methods:{
            SwiperImageLoad(){
                if(!this.isLoad){
                    this.$emit('SwiperImageLoad')
                    this.isLoad = true
                }


                
            }
        }
    }
</script>

<style scoped>

</style>