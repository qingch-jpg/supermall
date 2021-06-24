
import {debounce} from './utils'

export const GetImageMixin = {
  data(){
    return {
      ImgIistener:null
    }
  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh,200)
    this.ImgIistener = ()=>{
      refresh()
    }
    
    this.$bus.$on('ItemImageLoad',this.ImgIistener)
  }
}
