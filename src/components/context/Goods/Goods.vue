<template>
    <div class="Goods">
       <GoodsItem v-for="item in goods" :GooosItem="item">

       </GoodsItem>
    </div>
</template>

<script>

import GoodsItem from './GoodItems'
    export default {
       components:{
            GoodsItem
        },
       props:{
           goods:{
               type:Array,
               default(){
                   return []
               }
           }
       }
    }
</script>

<style scoped>
.Goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>