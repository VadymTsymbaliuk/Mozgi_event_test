import {createRouter, createWebHashHistory} from 'vue-router'

import Who from "@/vievs/Who";
import Where from "@/vievs/Where";
import What from "@/vievs/What";
import MainPage from "@/vievs/MainPage";

const routes = [
    {
        path:'/',
        name:"mainPage",
        component: MainPage
    },
    {
        path: '/who',
        name: 'who',
        component: Who
    },
    {
        path: '/where',
        name: 'where',
        component: Where
    },{
        path: '/what',
        name: 'what',
        component: What
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router