import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/views/Main"
import Login from "@/views/login/Login"
import spec from "@/views/spec/spec"
import paymentFinish from "@/views/paymentFinish/paymentFinish"
import meetUp from "@/views/class/meetUp"
import Bookmark from "@/views/Bookmark/Bookmark"
import InfoEdit from "@/views/InfoEdit/InfoEdit"
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
            component: Main  
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
            path:'/bookmark',
            name: 'bookmark',
            component:Bookmark
        },
        { 
            path:'/info',
            name: 'info',
            component:InfoEdit
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

