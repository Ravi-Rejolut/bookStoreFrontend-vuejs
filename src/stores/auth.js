import { defineStore } from "pinia";


export const useAuthStore=defineStore("auth",{
    state:()=>({
        user:null,
        token:null
    }),
    actions: {
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