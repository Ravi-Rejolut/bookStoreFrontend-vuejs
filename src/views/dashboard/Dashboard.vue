<script setup>
import { useAuth } from '@/hooks/auth';
import { useRouter } from 'vue-router';


const {setLogout}=useAuth();
const router=useRouter();


const logout=()=>{
    setLogout();
    router.push('/login');

}


</script>

<template lang="">
    <div>
        DashBoard

        <button @click="logout">Logout</button>
    </div>
</template>

<style lang="">
    
</style>