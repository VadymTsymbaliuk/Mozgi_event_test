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
        meta:{
            enterClass:'animate__animated animate__flipInY',
            leaveClass:'animate__animated animate__flipOutY'
        }
    },
    {
        path: '/who',
        name: 'who',
        component: Who,
        meta:{
            enterClass:'animate__animated animate__flipInY',
            leaveClass:'animate__animated animate__flipOutY'
        }
    },
    {
        path: '/where',
        name: 'where',
        component: Where,
        meta:{
            enterClass:'animate__animated animate__flipInY',
            leaveClass:'animate__animated animate__flipOutY'
        }
    },{
        path: '/what',
        name: 'what',
        component: What,
        meta:{
            enterClass:'animate__animated animate__flipInY',
            leaveClass:'animate__animated animate__flipOutY'
        }
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router