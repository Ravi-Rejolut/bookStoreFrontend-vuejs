<script setup>

import { RouterLink, RouterView } from 'vue-router';
</script>

<template lang="">
    <main class="flex h-[100vh] w-[100vw] ">
        <div class="flex w-[250px]  p-5">
            <div class="flex flex-col gap-2 w-full py-2 ">
                <RouterLink to="/" class="border bg-green-100 p-2 rounded">HOME</RouterLink>
                <RouterLink to="/books" class="border bg-green-100 p-2 rounded">BOOKS</RouterLink>
                <RouterLink to="/books/add" class="border bg-green-100 p-2 rounded">ADD BOOK</RouterLink>
            </div>
        </div>
        <div class="flex flex-col flex-1 gap-2 p-5 h-full overflow-auto">
            <RouterView/>
        </div>
                 
    </main>
</template>

<style lang="">

</style>