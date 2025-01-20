<script setup>
import { RouterLink, RouterView } from 'vue-router';
import BookForm from './BookForm.vue';
import { useAddBookMutation } from '@/hooks/api/books';

const {bookMutate}=useAddBookMutation();


const addBook=(book)=>{
    console.log(book)
    bookMutate(book);
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