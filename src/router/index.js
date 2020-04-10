import Vue from "vue";
import VueRouter from "vue-router";
import main from "@/views/main"
import Login from "@/views/login/Login"
import paymentFinish from "@/views/paymentFinish/paymentFinish"
import meetUp from "@/views/class/meetUp"
import myProfile from "@/views/myPage/myProfile"

Vue.use(VueRouter);

// route 설정하기
export default new VueRouter({
    mode : 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: main  
        },
        {
            path:'/login',
            name: 'Login',
            component:Login
        },
        {
            path:'/payment',
            name: 'payment',
            component:paymentFinish
        },
        {
            path:'/meetup',
            name: 'meetup',
            component:meetUp
        },
        {
            path:'/myprofile',
            name: 'myprofile',
            component:myProfile
        }
    ]
})

