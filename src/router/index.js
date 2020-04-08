import Vue from "vue";
import VueRouter from "vue-router";
import main from "@/views/main"

Vue.use(VueRouter);

// route 설정하기
export default new VueRouter({
    mode : 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: main  
        }
    ]
})

