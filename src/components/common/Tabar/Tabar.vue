<template>
    <div id="Tabar">
     <slot></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#Tabar{
  display: flex;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  height: 49px;
  background-color: #f6f6f6;
  z-index: 10;
}

</style>