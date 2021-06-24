<template>
   <div class="recommend">
       <div v-for="item in recommends" class="recommend_item">
           <a :href="item.link">
               <img :src="item.image" alt="">
               <div>{{item.title}}</div>
           </a>
       </div>
   </div>
</template>

<script>
    export default {
        props:{
            recommends:{
                type:Array,
                defalut(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
.recommend{
    display: flex;
    text-align: center;

}
.recommend_item{
    flex: 1;
    padding: 10px;
    border-bottom: 8px solid #eee;
}
.recommend_item img{
    width: 65px;
    height: 65px;
}

</style>