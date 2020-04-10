import Vue from "vue";
import VueRouter from "vue-router";
// import main from "@/views/main"
// import PaymentFinish from "../views/PaymentFinish/PaymentFinish"
import MeetUp from "../views/Class/MeetUp"
// import Login from "../views/login/Login"

Vue.use(VueRouter);

// route 설정하기
export default new VueRouter({
    mode : 'history',
    routes: [
        // {
        //     path: '/',
        //     name: 'main',
        //     component: main  
        // },
        // {
        //     path: '/',
        //     component: PaymentFinish
        // },
        {
            path: '/',
            component: MeetUp
        }
        // {
        //     path:'/',
        //     component:Login
        // }
    ]
})

