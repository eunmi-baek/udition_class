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

