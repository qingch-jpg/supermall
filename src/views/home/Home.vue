<template>
    <div id="home" class="wrapper">
       <navbar class="home_nav"><div slot="center">购物车</div></navbar>

        <TarControl :titles="['流行','新款','精品']" @tabClick="tabClick" 
       ref="tarControl1" 
       class="tar-control"
       v-show="isTabControl"
        />

       <Scroll class="content" ref="scroll" :probeType='3' 
       @scroll="contentScroll" 
       :pullUpLoad="true" 
       @pullingUp="loadMore"
         >
       <homeswiper :banners="banners" @SwiperImageLoad="SwiperImageLoad" />      
       <recommendview :recommends="recommends" />

       <FeatureView />
       <TarControl :titles="['流行','新款','精品']" @tabClick="tabClick" 
       ref="tarControl2"/>
       <Goods :goods="ShowGodds" />
       </Scroll>
       <BackTop @click.native="backClick" v-show="isShowBackTop" />
    
       
    </div>
</template>


<script>

import navbar from 'components/common/nav-bar/narbar'
import homeswiper from './homeswiper/HomeSwiper'
import recommendview from './homeswiper/RecommendView'
import FeatureView from './homeswiper/FeatureView'
import TarControl from 'components/context/TarControl/TarControl'
import Goods from 'components/context/Goods/Goods'
import Scroll from 'components/common/Scroll/Scroll'
import BackTop from 'components/context/BackTop/back-top'

import {getHomeMultidata , getHomeGoods} from 'network/home'

import {GetImageMixin} from 'common/mixin'



export default {
        components:{
            navbar,
            homeswiper,
            recommendview,
            FeatureView,
            TarControl,
            Goods,
            Scroll,
            BackTop
            
        },
        mixins:[GetImageMixin],
        data(){
            return{
                banners:[],  //保存banners数据
                recommends:[], //保存recommends数据
                goods:{   //保存商品的信息
                    'pop':{ page:0 , list:[] },
                    'new':{ page:0 , list:[] },
                    'sell':{ page:0 , list:[] }
                },
                currentType:'pop',
                isShowBackTop:false,
                tabControl:0,
                isTabControl:false,
                saveY:0  //保存位置信息
    
            }
        },
        created(){   //这里面只处理主要的逻辑
            
            this.getHomeMultidata()

            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')
            
        },
        //进入组件时触发
        activated(){
            this.$refs.scroll.scrollTo(0, this.saveY ,0)
            this.$refs.scroll.refresh()  //刷新
            console.log('进入组件的位置'+this.saveY)
        },
        //离开组件时触发
        deactivated(){

            //保存y值
            this.saveY = this.$refs.scroll.scroll.y
            console.log('离开组件的位置'+this.saveY)
            //取消全局事件监听

            this.$bus.$off('ItemImageLoad',this.ImgIistener )

        },

        mounted(){

            //
            // const refresh = debounce(this.$refs.scroll.refresh,200)

            // this.ImgIistener = () => { refresh() }

            // this.$bus.$on('ItemImageLoad', this.ImgIistener)

            

        },

        computed:{
            ShowGodds(){
                return this.goods[this.currentType].list
            }
        },
        methods:{

            //判断Barcontorl的位置
            SwiperImageLoad(){
                //console.log(this.$refs.tarControl.$el.offsetTop)
                this.tabControl = this.$refs.tarControl2.$el.offsetTop
                console.log(this.tabControl)
            },

            //防抖函数
            // debounce(func,delay){
            //     let timer = null
            //     return function(...args) {
            //         if(timer) clearTimeout(timer)
            //         timer = setTimeout(()=>{
            //             func.apply(this, args)
            //         }, delay)
            //     }
            // },

            
            //事件监听
            tabClick(index){
              switch (index) {
                  case 0:
                      this.currentType='pop'
                      break;

                  case 1:
                      this.currentType='new'
                      break;

                  case 2:
                      this.currentType='sell'
                      break;
                  
              }


            this.$refs.tarControl1.currentIndex = index;
            this.$refs.tarControl2.currentIndex = index;
            },

            contentScroll(position){

                //判断TabbackTop是否显示或隐藏
                this.isShowBackTop = (-position.y) > 1000

                this.isTabControl = (-position.y) > this.tabControl

                
                
            },
            loadMore(){
                this.getHomeGoods(this.currentType)

                //this.$refs.scroll.scroll.refresh()
            },

            //网络请求
            getHomeMultidata(){
                 getHomeMultidata().then(re => {
                    this.banners = re.data.banner.list
                    this.recommends = re.data.recommend.list
                })
            },
            getHomeGoods(type){
                //page：页数
                let page = this.goods[type].page+1
                getHomeGoods(type,page).then( res => {
                    console.log(res)
                    this.goods[type].list.push(...res.data.list)
                    this.goods[type].page+=1

                    this.$refs.scroll.finishPullUp()
                })
            },
            backClick(){
               this.$refs.scroll.scrollTo(0,0,300)
            }
        }
    }
</script>


<style scoped>
    #home{
      
       height: 100vh;
       position: relative;
    }
.TarContorl{
    display: flex;
    text-align: center;
    background-color: #eee;
    font-size: 15px;
    /* position: sticky;
    top: 44px;
    z-index: 9; */
}
.home_nav{
        background-color: var(--color-tint);
        color: #fff;
        /* position: fixed;
        right: 0;
        left: 0;
        top:0;
        z-index: 9; */
}
/* .content{
        /* height: calc(100% - 93px);
        overflow: hidden;
        padding-top: 44px; 
    } */

.content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
    overflow: hidden;
}

.tar-control{
    position: relative;
    z-index: 9;
}
</style>