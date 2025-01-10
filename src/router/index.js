import { createRouter, createWebHistory } from "vue-router";
import {Login,SignUp} from "@/views/auth"
import Dashboard from "@/views/dashboard";
import { useAuth } from "@/hooks/auth";


const routes=[
    {
        path:"/login",
        component:Login,
        name:"Login"
    },
    {
        path:"/signup",
        component:SignUp,
        name:"SignUp"
    },
    {
        path:"/",
        component:Dashboard,
        name:"Dashboard",
        meta:{requiresAuth:true,role:['USER']}
    },
    {
        path:"/admin",
        component:Dashboard,
        name:"AdminDashboard",
        meta:{requiresAuth:true,role:['admin']}
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

router.beforeEach((to,from,next)=>{
    const {isAuthenciated}=useAuth();

    if(to.meta.requiresAuth && !isAuthenciated){
        return next({path:"Login"});
       
    }

    next();
})

export default router;