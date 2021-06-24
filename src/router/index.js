import vue from 'vue'
import VueRouter from 'vue-router'

//导入组件
const Home = () => import('views/home/Home')
const Catefory = () => import('views/category/Category')
const Shopcar = () => import('views/shopcar/Shopcar')
const Profile = () => import('views/profile/Profile')
const Detail =() => import('views/detail/Detail')


vue.use(VueRouter)

//配置映射关系
const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:Catefory
    },
    {
        path:'/shopcar',
        component:Shopcar
    },
    {
        path:'/profile',
        component:Profile
    },{
        path:'/detail/:iid',  //动态路由
        component:Detail
    }
]

const router = new VueRouter({
    routes,
    mode:'history',
    base:'/supermall/'
})

export default router