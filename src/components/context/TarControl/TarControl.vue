<template>
    <div class="TarContorl">
        <div v-for="(item,index) in titles" class="TarContorl_item" @click="itemClick(index)" :class="{active:index ===currentIndex}">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            titles:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return {
                currentIndex:0
            }
        },
        methods:{
            itemClick(index){
                this.currentIndex =index
                this.$emit('tabClick',index)
            }
        }
    }
</script>

<style scoped>

.TarContorl_item{
    flex: 1;
    height: 44px;
    line-height: 44px;
}
.TarContorl_item span{
    padding: 5px;
}

.active  span{
    border-bottom: 2px solid var(--color-tint);
    
}

.active{
    color:red;
}
</style>