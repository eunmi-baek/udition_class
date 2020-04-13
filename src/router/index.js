import Vue from "vue";
import VueRouter from "vue-router";
import main from "@/views/main"
import Login from "@/views/login/Login"
import spec from "@/views/spec/spec"
import paymentFinish from "@/views/paymentFinish/paymentFinish"
import meetUp from "@/views/class/meetUp"
import myInfo from "@/views/myInfo/myInfo"
import myProfile from "@/views/myPage/myProfile"
import tutor from "@/views/tutor/tutor"
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
            path: '/spec',
            name: 'spec',
            component: spec 
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
            path:'/info',
            name: 'info',
            component:myInfo
        },
        {
            path:'/myprofile',
            name: 'myprofile',
            component:myProfile
        },
        {
            path:'/tutor',
            name: 'tutor',
            component: tutor
        }
    ]
})

