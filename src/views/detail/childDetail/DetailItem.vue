<template>
  <div>
    <Navbar>
      <div slot="left" class="imgNode" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="center">
        <div v-for="(item,index) in titles" 
        class="center-item"
        :class="{active:currentIndex===index}"
        @click="itemClick(index)">{{item}}</div>
      </div>
        
    </Navbar>
  </div>
</template>

<script>

import Navbar from 'components/common/nav-bar/narbar'
  export default {
    data(){
      return {
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    components:{
      Navbar
    },
    methods:{
      itemClick(index){
        this.currentIndex = index
        this.$emit('titleClick',index)
      },
      backClick(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
.center{
  display: flex;
  font-size: 14px;
}
.center-item{
  flex: 1;
}
.active{
  color: pink;
}
.imgNode{
  margin-top: 5px;
}
</style>