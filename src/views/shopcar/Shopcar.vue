<template>
    <div class="shop-car">
        <Navbar class="nav-bar">
            <div slot="center">购物车({{cartLength}})</div>
        </Navbar>
        
        <ShopcarList></ShopcarList>
        
        <ShopBottomBar />
    </div>
</template>

<script>
    import Navbar from 'components/common/nav-bar/narbar'
    import ShopcarList from './childComps/ShopcarList'
    import ShopBottomBar from './childComps/shopBottomBar'

    import {mapGetters} from 'vuex'

    export default {
        components:{
            Navbar,
           ShopcarList,
           ShopBottomBar
        },
        computed:{
            // cartLength(){
            //     return this.$store.getters.cartLength
            // }
            ...mapGetters([
                'cartLength'
               
            ])
            
        }
    }
</script>

<style scoped>
.nav-bar{
    background-color: var(--color-tint);
    color: #ffff;
}


</style>