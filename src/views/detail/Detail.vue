<template>
  <div id="detail">
    <DetailItem class="detail-nav" @titleClick="titleClick" ref="nav" ></DetailItem>

    <Scroll class="content" :pullUpLoad="true" ref="scroll" :probeType="3" @scroll="contentScroll" >


    <DetailSwiper :topImages="topImages" ></DetailSwiper>

    <DetailBaseInfo :goods="goods"></DetailBaseInfo>

    <DetailShopInfo :shop="shop" ></DetailShopInfo>

    <DetailGoodsInfo :detailInfo="detailInfo" @imageLoad="imageLoad" ></DetailGoodsInfo>

    <DetailParamsInfo ref="params" :paramInfo="paramInfo" ></DetailParamsInfo>

    <DetailCommentInfo ref="comment" :commentInfo="commentInfo"></DetailCommentInfo>
    <GoodsList ref="goodlist" :goods="recommend" ></GoodsList>

    
    </Scroll>
    <BackTop class="backtop" @click.native="backtopClick" v-show="isShowBack" ></BackTop>

    <BottomBar @addCarto="addCarto" ></BottomBar>

    <!-- <Toast :message="message" :show="show" /> -->
  </div>
</template>

<script>

import DetailItem from './childDetail/DetailItem'

import DetailSwiper from './childDetail/DetailSwiper'

import DetailBaseInfo from './childDetail/DetailBaseInfo'

import DetailShopInfo from './childDetail/DetailShopInfo'

import Scroll from 'components/common/Scroll/Scroll'

import DetailGoodsInfo from './childDetail/DetailGoodsInfo'

import DetailParamsInfo from './childDetail/DetailParamInfo'

import DetailCommentInfo from './childDetail/DetailCommentInfo'

import GoodsList from 'components/context/Goods/Goods'

import BottomBar from './childDetail/DetailBottomBar'

//import Toast from 'components/common/toast/Toast'

//导入backTop组件
import BackTop from 'components/context/BackTop/back-top'


//网络请求
import { getdetail,Goods,Shop, GoodsParam,recommend} from 'network/detail'

import {debounce} from 'common/utils'

import {GetImageMixin} from 'common/mixin'




  export default {
    name:'Detail',  //此时这里的name对应着App.vue中的 <keep-alive exclude="Detail">
    data(){
      return {
          iid:null,
          topImages:[],
          goods:{},
          shop:{},
          detailInfo:{},
          paramInfo:{},
          commentInfo:{},
          recommend:[],
          titleBackTopY:[0,1000,2000,3000],
          getTitleTopY:null,
          currentIndex:0,
          isShowBack:false,
          message:'',
          show:false
          
      }
    },
    mixins:[GetImageMixin],
    created(){

      //保存传入的值
      this.iid = this.$route.params.iid  //通过params方式获取值

      getdetail(this.iid).then( res => {

        //获取详情页轮播图数据
        const data = res.result;

        this.topImages = data.itemInfo.topImages


        //获取详情页信息数据
        this.goods = new Goods( data.itemInfo,data.columns,data.shopInfo.services)

        //获取商铺信息
        this.shop =  new Shop(data.shopInfo)

        //
        this.detailInfo = data.detailInfo;

        //商品的信息
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

        //评论信息
        if(data.rate.cRate !== 0){
          this.commentInfo = data.rate.list[0]
        } 

      })


      //获取推荐页信息
      recommend().then( res=>{

        this.recommend = res.data.list
      })

      //进行防抖操作
      this.getTitleTopY = debounce(()=>{
        this.titleBackTopY = []

        this.titleBackTopY.push(0)
        this.titleBackTopY.push(this.$refs.params.$el.offsetTop)
        this.titleBackTopY.push(this.$refs.comment.$el.offsetTop)
        this.titleBackTopY.push(this.$refs.goodlist.$el.offsetTop)
        this.titleBackTopY.push(Number.MAX_VALUE) 
        

        console.log(this.titleBackTopY)
      },100)



    },
    components:{
      DetailItem,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamsInfo,
      DetailCommentInfo,
      GoodsList,
      BottomBar,
      BackTop
      
    },
    methods:{
      imageLoad(){
        this.$refs.scroll.refresh()

         this.getTitleTopY()
      },

      titleClick(index){
        // console.log(index)

        this.$refs.scroll.scrollTo(0,-this.titleBackTopY[index],200 )
        

      },
      
      contentScroll(position){
        //获取y值
        const positionY = -position.y;

       
        let length = this.titleBackTopY.length;

        for(let i =0; i<length-1;i++){
          //普通的使用方式
          // if(this.currentIndex !== i && ((i < length-1 && positionY > this.titleBackTopY[i] && positionY <
          // this.titleBackTopY[i+1] || ( i === length - 1) && positionY >= this.titleBackTopY[i]
          // )) ){
          //       this.currentIndex = i;
          //       this.$refs.nav.currentIndex = this.currentIndex;
          //       console.log(this.currentIndex)
          // }

          if(this.currentIndex !== i && (positionY >= this.titleBackTopY[i] && positionY < this.titleBackTopY[i+1])){
              this.currentIndex = i;
              this.$refs.nav.currentIndex = this.currentIndex
          }

        }

        //判断按钮的显示隐藏
        this.isShowBack = (-position.y) > 1000

      },

      //点击按钮 返回顶部
      backtopClick(){
        this.$refs.scroll.scrollTo(0,0,300)
        
      },

      addCarto(){
        
        let product = {}

        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice
        product.iid = this.iid

        
        product.image = this.topImages[0]

        // this.$store.commit('addCart',product)
        this.$store.dispatch('addCart',product).then(res => {
          
          // this.message = res;
          // this.show = true;

          // setTimeout(() => {
          //   this.message=""
          //   this.show = false
          // }, 1500);


          this.$toast.show(res,1500)
          
        })

        //console.log($store.state.cartList.length)
      }
      
    },
    mounted(){
      // const refresh = debounce(this.$refs.scroll.refresh,200)

      // this.ImgIistener = ()=>{
      //   refresh()
      // }

      // this.$bus.$on('ItemImageLoad',this.ImgIistener)
    },

    destroyed(){
      this.$bus.$off('ItemImageLoad',this.ImgIistener)
    }
  }
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 11;
  background-color: #fff;
  height: 100vh;
}

.content{
  height: calc(100% - 44px - 49px);
}

.detail-nav{
  position: relative;
  z-index: 11;
  background-color: #fff;
}

</style>