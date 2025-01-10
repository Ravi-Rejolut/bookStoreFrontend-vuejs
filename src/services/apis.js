import { useAuth } from "@/hooks/auth";
import axios from "axios";
import { API_ROUTES } from "@/constants/apiRoutes";


export const getHeader=()=>{
    const {token}=useAuth();

    return {
        headers:{
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    }
}

export const getMutipartHeader=()=>{    
    const {token}=useAuth();
    return {
        headers:{
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*"
        }
    }
}


export const LOGIN=async(body)=>await axios.post(API_ROUTES.LOGIN,body);

export const SIGNUP=async(body)=>await axios.post(API_ROUTES.SIGNUP,body);

export const GET_ME=async()=>await axios.get(API_ROUTES.ME,getHeader());




