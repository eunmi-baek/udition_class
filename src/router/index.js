import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/views/Main"
import Login from "@/views/login/Login"
import spec from "@/views/spec/spec"
import Bookmark from "@/views/Bookmark/Bookmark"
import InfoEdit from "@/views/InfoEdit/InfoEdit"
import PaymentFinish from "@/views/PaymentFinish/PaymentFinish"
import MeetUp from "@/views/Class/MeetUp"
import MyProfile from "@/views/MyPage/MyProfile"
import tutor from "@/views/tutor/tutor"
import join from "@/views/join/join"
import payment from "@/views/payment/payment"

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
            path:'/paymentfinish',
            name: 'paymentfinish',
            component:PaymentFinish
        },
        {
            path:'/meetup',
            name: 'meetup',
            component:MeetUp
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
            component: MyProfile
        },
        {
            path:'/tutor',
            name: 'tutor',
            component: tutor
        },
        {
            path:'/join',
            name: 'join',
            component: join
        },
        {

            path:'/payment',
            name: 'payment',
            component: payment
        }
    ]
})

