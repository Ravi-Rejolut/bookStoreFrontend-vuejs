<script setup>
import { RouterLink, RouterView } from 'vue-router';
import BookForm from './BookForm.vue';
import { useAddBookMutation } from '@/hooks/api/books';

const {bookMutate}=useAddBookMutation();

const addBook=(data)=>{
    bookMutate(data);
}
</script>

<template lang="">
    <div>
        add book

        <BookForm @callBack="addBook"/>
    </div>
</template>

<style lang="">
    
</style>