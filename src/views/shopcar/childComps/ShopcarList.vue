<template>
  <div class="cart-list">
    <BScroll class="content"  :pullUpLoad="true" ref="scroll">
      <ShopcarItem v-for="(item,index) in cartList" :key="index" :itemInfo="item" ></ShopcarItem>

    </BScroll>
  </div>
</template>

<script>


  import BScroll from 'components/common/Scroll/Scroll'
  import ShopcarItem from './ShopcarItem'


  import {mapGetters} from 'vuex'
  export default {
   components:{
     BScroll,
     ShopcarItem
   },
   computed:{
     ...mapGetters([
       'cartList'
     ])
   },
   activated() {
     this.$refs.scroll.refresh()
   }
  }
</script>

<style scoped>
.cart-list{
  /* height: calc(100% - 44px -49px); */
  position: absolute;
  top: 44px;
  bottom: 89px;
  right: 0;
  left: 0;
  overflow: hidden;
}

.content{
  height: 100%;
  
}
</style>