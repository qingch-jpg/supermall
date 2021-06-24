<template>
    <Tabar>
        <Tabar_item path="/home">
          <img slot="item_icon" src="~assets/img/tabbar/home.svg" alt="">
          <img slot="item_icon_active" src="~assets/img/tabbar/home_active.svg" alt="">
          <div slot="item_text">首页</div>
        </Tabar_item>
         <Tabar_item path="/category">
          <img slot="item_icon" src="~assets/img/tabbar/category.svg" alt="">
          <img slot="item_icon_active" src="~assets/img/tabbar/category_active.svg" alt="">
          <div slot="item_text">分类</div>
        </Tabar_item>
         <Tabar_item path="/shopcar">
          <img slot="item_icon" src="~assets/img/tabbar/shopcart.svg" alt="">
          <img slot="item_icon_active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
          <div slot="item_text">购物车</div>
        </Tabar_item>
         <Tabar_item path="/profile">
          <img slot="item_icon" src="~assets/img/tabbar/profile.svg" alt="">
          <img slot="item_icon_active" src="~assets/img/tabbar/profile_active.svg" alt="">
          <div slot="item_text">我的</div>
        </Tabar_item>
        
    </Tabar>
</template>

<script>
import Tabar from 'components/common/Tabar/Tabar'
import Tabar_item from 'components/common/Tabar/TabarItem'

    export default {
        components:{
            Tabar,
            Tabar_item
        }
    }
</script>

<style scoped>

</style>