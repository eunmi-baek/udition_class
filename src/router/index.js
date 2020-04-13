import Vue from "vue";
import VueRouter from "vue-router";
import main from "@/views/main"
import Login from "@/views/login/Login"
import spec from "@/views/spec/spec"
import PaymentFinish from "@/views/PaymentFinish/PaymentFinish"
import MeetUp from "@/views/Class/MeetUp"
import myInfo from "@/views/myInfo/myInfo"
import MyProfile from "@/views/MyPage/MyProfile"
import tutor from "@/views/tutor/tutor"
import header from "@/components/header"
import footer from "@/components/footer"
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
            path:'/info',
            name: 'info',
            component:myInfo
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

            path:'/header',
            name: 'header',
            component: header
        },
        {
            path:'/footer',
            name: 'footer',
            component: footer
        },
        {
            path:'/join',
            name: 'join',
            component: join},{

            path:'/payment',
            name: 'payment',
            component: payment
        }
    ]
})

