<script setup>
import { useAuth } from '@/hooks/auth';
import { useRouter, RouterLink } from 'vue-router';



const { setLogout } = useAuth();
const router = useRouter();



const logout = () => {
    setLogout();
    router.push('/login');

}


</script>

<template lang="">
    <div class="flex flex-col gap-2">
        DashBoard

        <button @click="logout" class="inline max-w-max ">Logout</button>

        

    </div>
</template>

<style lang="">

</style>