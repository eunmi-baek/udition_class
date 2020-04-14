import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/views/Main"
import Login from "@/views/Login/Login"
import Spec from "@/views/Specs/Specs"
import Bookmark from "@/views/Bookmark/Bookmark"
import InfoEdit from "@/views/InfoEdit/InfoEdit"
import PaymentFinish from "@/views/BillFinish/BillFinish"
import MeetUp from "@/views/Classes/Classes"
import MyProfile from "@/views/Information/Information"
import Tutor from "@/views/Tutors/Tutors"
import Join from "@/views/Zzoin/Zzoin"
import Payment from "@/views/Bill/Bill"

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

