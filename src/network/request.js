import axios from 'axios'



//终极封装axios方式

export function querst(config){
    const stane = axios.create({
        baseURL:'http://152.136.185.210:7878/api/m5',
        timeout:4000
    })

    //axios拦截器
    stane.interceptors.request.use(config => {
        // console.log(config)
        return config
    },err => {
        // console.log(err)
    })

    //响应拦截
    stane.interceptors.response.use(res => {
        //console.log(res)
        //console.log(res.data)
        return res.data
    },err => {
        //console.log(err)
    })

    //发送真正的网络请求
    return stane(config)
    

}


















//使用promise封装axios
// export function querst(config){

//     return new Promise((reslove,reject)=>{
//         const stance = axios.create({
//             baseURL:'http://123.207.32.32:8000',
//             timeout:4000
//         })

//         stance(config)
//         .then( re =>{
//             reslove(re)
//         })
//         .catch( err =>{
//             reject(err)
//         })
        
//     })
// }














//普通回调函数使用axios
// export function querst(config,success,failure){

//     const instance = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:4000
//     })

//     instance(config).then( re =>{
//         success(re)
//     }).catch( err =>{
//         failure(err)
//     })
    


// }
