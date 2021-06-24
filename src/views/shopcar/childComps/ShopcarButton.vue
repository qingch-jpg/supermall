<template>
  <div class="ischecked" :class="{check :isCheck}">
    <img src="~assets/img/cart/tick.svg" alt=""  >
    
  </div>
</template>

<script>
  export default {
    props:{
      isCheck:{
        type:Boolean
      }
    }
  }
</script>

<style scoped>
.ischecked {
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }


  .check {
    background-color: #ff8198;
    border-color: #ff8198;
  }
  
</style>