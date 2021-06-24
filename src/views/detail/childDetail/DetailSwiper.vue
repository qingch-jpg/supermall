<template>
  <Swiper class="swipers">
      <SwiperItem v-for="item in topImages"> 
        <img :src="item" alt="">
      </SwiperItem>
  </Swiper>
</template>

<script>

//导入swiper
import { Swiper, SwiperItem } from 'components/common/swiper/index'

export default {
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
  
}
</script>

<style scoped>
.swipers{
  height: 300px;
  overflow: hidden;
}
</style>