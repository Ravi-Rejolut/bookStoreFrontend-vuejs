import { createRouter, createWebHistory } from "vue-router";
import {Login,SignUp} from "@/views/auth"
import Dashboard from "@/views/dashboard";
import {Books,AddBook} from "@/views/books";
import { useAuth } from "@/hooks/auth";
import { useAuthStore } from "@/stores/auth";
import { DashBoardLayout } from "@/components/Layouts";


const routes=[
    {
        path:"/login",
        component:Login,
        name:"Login",
        meta: { requiresAuth: false },
    },
    {
        path:"/signup",
        component:SignUp,
        name:"SignUp",
        meta: { requiresAuth: false },
    },
    {
        path:"/",
        component:DashBoardLayout,
        name:"DashboardLayout",
        meta:{requiresAuth:true,role:['USER']},
        children:[
            {
                path:"",
                component:Dashboard,
                name:"dashboard",
                meta:{requiresAuth:true,role:['USER']}
        
            },
            {
                path:"books",
                component:Books,
                name:"books",
                meta:{requiresAuth:true,role:['USER']}
        
            },
            {
                path:"books/add",
                component:AddBook,
                name:"Add Books",
                meta:{requiresAuth:true,role:['USER']}
        
            },
        ]
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
    const {isAuthenticated}=useAuthStore();

    if(to.meta.requiresAuth && !isAuthenticated){
        return next({path:"/login"});
       
    }

    next();
})

export default router;