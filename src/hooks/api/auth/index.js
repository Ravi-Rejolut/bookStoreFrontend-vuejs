import { useAuth } from '@/hooks/auth';
import { GET_ME } from '@/services/apis';
import { useQuery,useMutation } from '@tanstack/vue-query'


const useUser=()=>{
    const {user}=useAuth();
    const getUserDetails=async()=>{
        try {

            const response=await GET_ME();
            user.value=response.data.data;
            return response.data;


        } catch (error) {
            console.log(error)
            
        }
    }

    return {getUserDetails};
}