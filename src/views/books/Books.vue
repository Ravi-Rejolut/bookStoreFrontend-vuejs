<script setup>
import {useBookFetch} from '@/hooks/api/books';
import BookItem from '@/components/BookItem.vue';

const {books,isLoading,isError}=useBookFetch();


 


</script>

<template lang="">
    <div class="w-full rounded p-2 bg-gray-50">
        Books
    </div>
    <ul class="flex flex-col gap-2">
        <template v-for="book in books.books" :key="book.id">
           <BookItem :book="book"/>
        </template>
    </ul>
</template>

<style lang="">
    
</style>