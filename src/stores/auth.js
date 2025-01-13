import { defineStore } from "pinia";


export const useAuthStore=defineStore("auth",{
    state:()=>({
        user:null,
        token:null
    }),
    getters: {
        isAuthenticated(state){
            return state.token!==null;
        }
    },
    actions: {
        initializeAuth() {
            const token = localStorage.getItem("token");
            const user = JSON.parse(localStorage.getItem("user"));
    
            if (token && user) {
                this.token = token;
                this.user = user;
            }
        },
        setLogin(user,token){
            this.user=user;
            this.token=token;
            localStorage.setItem("token",token);
            localStorage.setItem("user",JSON.stringify(user));
        },
        setLogout(){
            this.user=null;
            this.token=null;
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        }
    }
})