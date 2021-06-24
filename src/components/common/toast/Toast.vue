<template>
  <div class="toast" v-show="isShow" >
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    props:{
      // message:{
      //   type:String,
      //   default:''
      // },
      // show:{
      //   type:Boolean,
      //   default:false
      // }

    },
    data(){
      return {
        message:'',
        isShow:false
      }
    },
    methods:{
      show(message,duration){
        this.message=message;
        this.isShow=true

        setTimeout(()=>{
          this.message=""
          this.isShow = false
        },duration)
      }
    }
  }
</script>

<style scoped>
.toast{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background-color: black;
  opacity: .6;
  padding: 8px 10px;
  color: #fff;
  border-radius:8px;
  z-index: 99;
}
</style>