<template>
   <div class="Tabar_item" @click="itemClick">
       <slot v-if="!isActive" name="item_icon"></slot>
       <slot v-else name="item_icon_active"></slot>
       <div :class="{active:isActive}"><slot name="item_text"></slot></div>
   </div>
</template>

<script>
    export default {
        data(){
            return {
                // isActive:true
            }
        },
        props:{
            path:String
        },
        methods:{
            itemClick(){
                this.$router.push(this.path)
            }
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.path) !== -1
            }
        }
    }
</script>

<style scoped>
.Tabar_item{
  flex: 1;
  text-align: center;
  width: 24px;
  height: 24px;
  z-index: 10;
}
.Tabar_item img{
  width: 24px;
  height: 24px;
  margin-top: 2px;
}
.active{
    color: pink;
}
</style>