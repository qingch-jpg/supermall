<template>
  <div class="bottom-bar">
    <div class="check-content">
      <CheckButton class="check-button" 
      :isCheck="isSelectAll"
      @click.native="checkedClick"
       />
      <span>全选</span>
    </div>

    <div class="price">
      总价:{{totalPrice}}
    </div>

    <div class="payment">
      去付款:{{payment}}
    </div>

  </div>
</template>

<script>

import CheckButton from './ShopcarButton'

  export default {
    
    components:{
      CheckButton
    },
    computed:{
      totalPrice(){
        return  "￥"+ this.$store.state.cartList.filter( item => {
          return item.checked
        }).reduce( (preValue, item) => {
          return preValue +item.price * item.count
        },0).toFixed(2)
      },

      payment(){
        return this.$store.state.cartList.filter( item => item.checked ).length
      },

      isSelectAll(){
        if(this.$store.state.cartList.length === 0) return false
        return !this.$store.state.cartList.find(item => !item.checked )
       
      }
    },
    methods:{
      checkedClick(){
        if(this.isSelectAll){
          this.$store.state.cartList.forEach( item => item.checked = false )
        }else{
          this.$store.state.cartList.forEach( item => item.checked = true )
        }
      }
    }
  }
</script>

<style scoped>
.bottom-bar{
  height: 40px;
  width: 100%;
  position: absolute;
  bottom: 49px;
  display: flex;
  
}

.check-content{
  display: flex;
  align-items: center;
  margin-left: 15px;
  flex: 1;
}

.check-button{
  width: 20px;
  height: 20px;
  margin-right: 5px;
  
 
}

.price{
  margin-left: 10px;
  line-height: 40px;
  flex: 1;
}

.payment{
  background-color: red;
  color: #fff;
  line-height: 40px;
  width: 90px;
  text-align: center;
}

</style>