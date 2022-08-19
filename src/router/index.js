import {createRouter, createWebHashHistory} from 'vue-router'

import Who from "@/vievs/Who";
import Where from "@/vievs/Where";
import What from "@/vievs/What";
import MainPage from "@/vievs/MainPage";

const routes = [
    {
        path:'/',
        name:"mainPage",
        component: MainPage,
        // meta:{
        //     transition: 'slide-left'
        // }
    },
    {
        path: '/who',
        name: 'who',
        component: Who,
        // meta:{
        //     transition: 'slide-left'
        // }
    },
    {
        path: '/where',
        name: 'where',
        component: Where,
        // meta:{
        //     transition: 'slide-left'
        // }
    },{
        path: '/what',
        name: 'what',
        component: What,
        // meta:{
        //     transition: 'slide-left'
        // }
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router