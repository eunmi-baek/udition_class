import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/views/Main"
import Login from "@/views/Login/Login"
import Spec from "@/views/Spec/Spec"
import Bookmark from "@/views/Bookmark/Bookmark"
import InfoEdit from "@/views/InfoEdit/InfoEdit"
import PaymentFinish from "@/views/PaymentFinish/PaymentFinish"
import MeetUp from "@/views/Class/MeetUp"
import MyProfile from "@/views/MyPage/MyProfile"
import Tutor from "@/views/Tutor/Tutor"
import Join from "@/views/Join/Join"
import Payment from "@/views/Payment/Payment"

Vue.use(VueRouter);

// route 설정하기
export default new VueRouter({
    mode : 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component:Main  
        },
        { 
            path:'/login',
            name: 'login',
            component:Login
        },
        {
            path: '/spec',
            name: 'spec',
            component: Spec 
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
            component: Tutor
        },
        
        {
            path:'/join',
            name: 'join',
            component: Join
        },
        {

            path:'/payment',
            name: 'payment',
            component: Payment
        }
    ]
})

