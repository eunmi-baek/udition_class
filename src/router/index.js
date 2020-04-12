import Vue from "vue";
import VueRouter from "vue-router";
import main from "@/views/main"
import spec from "@/views/spec/spec"
import Login from "@/views/login/Login"
import paymentFinish from "@/views/paymentFinish/paymentFinish"
import meetUp from "@/views/class/meetUp"
import myProfile from "@/views/myPage/myProfile"
import tutor from "@/views/tutor/tutor"
import navBar from "@/components/navBar"
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
            path: '/spec',
            name: 'spec',
            component: spec 
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
        },
        {
            path:'/tutor',
            name: 'tutor',
            component: tutor
        },
        {
            path:'/navBar',
            name: 'navBar',
            component: navBar
        }
    ]
})

