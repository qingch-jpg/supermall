import {querst} from './request'

export function getHomeMultidata(){
    return querst({
        url:'/home/multidata'
    })
}


export function getHomeGoods(type,page){
    return querst({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}

