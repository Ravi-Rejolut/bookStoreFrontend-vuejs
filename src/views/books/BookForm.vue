<script setup>
import * as yup from 'yup';
import { Form, Field, ErrorMessage } from 'vee-validate'
import { useAuthorFetch,useCategoriesFetch } from '@/hooks/api/books';



const {authors} =useAuthorFetch();
const {categories } =useCategoriesFetch();





</script>

<template lang="">
    <Form class="flex flex-col gap-2 ">
        <div class="flex flex-col gap-1">
            <label for="name">Name</label>
            <Field name="name" type="text" class="border p-2 rounded" />
            <ErrorMessage name="name" class="text-red-500 text-xs" />
        </div>
        <div class="flex flex-col gap-1">
            <label for="category">Category</label>
            <Field name="category" as="select" type="text" class="border p-2 rounded" >
                <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}</option>
            </Field>
            <ErrorMessage name="name" class="text-red-500 text-xs" />
        </div>
        <div class="flex flex-col gap-1">
            <label for="author">Author</label>
            <Field name="author" as="select" type="text" class="border p-2 rounded" >
                <option v-for="author in authors" :key="author.id" :value="author.id">{{author.name}}</option>
            </Field>
            <ErrorMessage name="name" class="text-red-500 text-xs" />
        </div>
    </Form>
</template>

<style lang="">

</style>