import { useAuthStore } from "@/stores/auth"

const useAuth = () => {


    const auth=useAuthStore();
    const user=auth.user;
    const token=auth.token;
    const setLogin=auth.setLogin;
    const setLogout=auth.setLogout;

    const isAuthenciated=token!==null;

    return {user,token,isAuthenciated,setLogin,setLogout};

  
}

export default useAuth
