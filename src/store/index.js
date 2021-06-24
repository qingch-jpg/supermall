
import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  getters,
  mutations:{
   addCounter(state,payload){
    payload.count++
   },
   addToCart(state,payload){

    payload.checked = true  //必须写在state.cartList.push(payload)的前面
    

    state.cartList.push(payload)
   
   }
  },
  actions:{
    addCart(context,payload){
  
      return new Promise((resolve,reject)=>{
        let oldProdect = context.state.cartList.find(item => item.iid === payload.iid)
        
  
        //判断oldProduct
          if(oldProdect){
            // oldProdect.count+=1
            context.commit('addCounter',oldProdect )
            resolve('当前数量+1')
          }else{
            payload.count=1;
            // state.cartList.push(payload)
            context.commit('addToCart',payload)
            resolve('已添加到购物车')
          }
      })
      }
  }
})

export default store
