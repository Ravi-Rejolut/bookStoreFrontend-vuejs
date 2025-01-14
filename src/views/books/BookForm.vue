<script setup>
import * as yup from 'yup';
import { Form, Field, ErrorMessage } from 'vee-validate'
import { useAuthorFetch,useCategoriesFetch } from '@/hooks/api/books';
import { DropZone } from '@/components/DropZone';
import { ref } from 'vue';

const emit=defineEmits(['callBack'])


const files=ref([]);


const bookFormSchema = yup.object({
    name: yup.string().required("Email is Required"),
    authorId: yup.string().required("Author is Required"),
    categoryId: yup.string().required("Category is Required"),
    description: yup.string().required("Description is Required"),
    rating: yup.number().required("Rating is Required"),
    price: yup.number().required("Price is Required"),
    available: yup.boolean().required("Available is Required"),
    quantity: yup.number().required("Quantity is Required"),
});

const handleFileChange = (updatedFiles) => {
    files.value=updatedFiles

}


const {authors} =useAuthorFetch();
const {categories } =useCategoriesFetch();



const onSubmit=(values)=>{

    if(files.value.length==0){
        alert("Please select at least one image")
        return;

    }
    const formData=new FormData();
    formData.append('name',values.name);
    formData.append('categoryId',values.categoryId);
    formData.append('authorId',values.authorId);
    formData.append('description',values.description);
    formData.append('rating',values.rating);
    formData.append('price',values.price);
    formData.append('available',values.available);
    formData.append('quantity',values.quantity);

    for (let i = 0; i < files.value.length; i++) {
        const file = files.value[i];
        formData.append('images', file);
    }

    emit('callBack',formData)
    
}




</script>

<template lang="">
    <Form class="flex flex-col gap-2 " @submit="onSubmit"  :validation-schema="bookFormSchema">

        <DropZone :files="files" @update-files="handleFileChange"/>
        <div class="flex flex-col gap-1">
            <label for="name">Name</label>
            <Field name="name" type="text" class="border p-2 rounded" />
            <ErrorMessage name="name" class="text-red-500 text-xs" />
        </div>
        <div class="flex flex-col gap-1">
            <label for="categoryId">Category</label>
            <Field name="categoryId" as="select" type="text" class="border p-2 rounded" >
                <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}</option>
            </Field>
            <ErrorMessage name="categoryId" class="text-red-500 text-xs" />
        </div>
        <div class="flex flex-col gap-1">
            <label for="authorId">Author</label>
            <Field name="authorId" as="select" type="text" class="border p-2 rounded" >
                <option v-for="author in authors" :key="author.id" :value="author.id">{{author.name}}</option>
            </Field>
            <ErrorMessage name="authorId" class="text-red-500 text-xs" />
        </div>
        <div class="flex flex-col gap-1">
            <label for="available">Available</label>
            <Field name="available" as="select" type="text" class="border p-2 rounded" >
                <option  value="true">Yes</option>
                <option  value="false">No</option>
            </Field>
            <ErrorMessage name="available" class="text-red-500 text-xs" />
        </div>
        <div class="flex flex-col gap-1">
            <label for="description">Description</label>
            <Field name="description" as="textarea" type="text" class="border p-2 rounded h-[200px]" >
                
            </Field>
            <ErrorMessage name="description" class="text-red-500 text-xs" />
        </div>
        <div class="flex flex-col gap-1">
            <label for="rating">Raiting</label>
            <Field name="rating" as="select"  type="text" class="border p-2 rounded " >
                <option  value="1">1</option>
                <option  value="2">2</option>
                <option  value="3">3</option>
                <option  value="4">4</option>
                <option  value="5">5</option>
             
            </Field>
            <ErrorMessage name="rating" class="text-red-500 text-xs" />
        </div>
        <div class="grid w-full gap-2 grid-cols-2">
          
        <div class="flex flex-col gap-1">
            <label for="quantity">Quantity</label>
            <Field name="quantity"  type="text" class="border p-2 rounded " >
                
            </Field>
            <ErrorMessage name="quantity" class="text-red-500 text-xs" />
        </div>
        <div class="flex flex-col gap-1">
            <label for="price">Price</label>
            <Field name="price"  type="text" class="border p-2 rounded " >
                
            </Field>
            <ErrorMessage name="price" class="text-red-500 text-xs" />
        </div>
        </div>
        <button type="submit" class="w-full h-[40px] bg-green-600 text-white">Submit</button>
    </Form>
</template>

<style lang="">

</style>