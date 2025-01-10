<script setup>
import { API_ROUTES } from '@/constants/apiRoutes';
import { useAuth } from '@/hooks/auth';
import axios from 'axios';
import { ref } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { useRouter } from 'vue-router';


const signupSchema = yup.object({
    email: yup.string().required("Email is Required").email("Email is Invalid"),
    name: yup.string().required("Name is Required"),
    phone: yup.number().required("Phone is Required"),
    password: yup.string().required("Password is Required").min(8, "Password must be at least 8 characters"),
});



const router = useRouter();
const { setLogin } = useAuth();



async function onSubmit(values) {
    try {
        console.log(values)
         const response = await axios.post(API_ROUTES.SIGNUP, values);
        // navigate to home page
        router.push('/login')
     
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}


</script>

<template lang="">
    <div class='w-full h-screen flex justify-center items-center p-3 '>
                <div class='w-full flex-col gap-5 flex items-center max-w-[400px] px-5 py-[50px] rounded-md shadow-lg' >

                    <h1 class="text-2xl md:text-4xl font-bold">Signup</h1>

                                    <Form @submit="onSubmit" :validation-schema="signupSchema" class=" flex flex-col gap-4 w-full" >

                                        <div class="flex flex-col gap-1 relative ">
                                            <label for="name" class='text-[#505050] text-[15px] leading-[18px]'>
                                                Name:
                                            </label>
                                            <Field name="name" type="text" placeholder="Enter your Email Id" class="w-full h-[40px] border border-[#d2d2d2] rounded-md px-2" />
                                            <ErrorMessage name='name' component="span" class='absolute top-[101%] left-0  text-red-500 text-[11px]' />


                                        </div>
                                        <div class="flex flex-col gap-1 relative ">
                                            <label for="name" class='text-[#505050] text-[15px] leading-[18px]'>
                                                Phone:
                                            </label>
                                            <Field name="phone" type="text" placeholder="Enter your Email Id" class="w-full h-[40px] border border-[#d2d2d2] rounded-md px-2" />
                                            <ErrorMessage name='phone' component="span" class='absolute top-[101%] left-0  text-red-500 text-[11px]' />


                                        </div>
                                        <div class="flex flex-col gap-1 relative ">
                                            <label for="email" class='text-[#505050] text-[15px] leading-[18px]'>
                                                Email:
                                            </label>
                                            <Field name="email" type="email" placeholder="Enter your Email Id" class="w-full h-[40px] border border-[#d2d2d2] rounded-md px-2" />
                                            <ErrorMessage name='email' component="span" class='absolute top-[101%] left-0  text-red-500 text-[11px]' />


                                        </div>

                                        <div class="flex flex-col gap-1 relative ">
                                            <label for="password" class='text-[#505050] text-[15px] leading-[18px]'>
                                                Password:
                                            </label>
                                            <div class="w-full h-[40px] flex items-center border border-[#d2d2d2] rounded-md">
                                                <Field name="password" placeholder="Enter your Password" class="w-full h-full px-2 rounded-md" />
                                               <!-- <span class='p-2'>

                                                {showPassword ? (
                                                    <VisibilityOff onClick={() => setShowPassword(false)} />
                                                ) : (
                                                    <Visibility onClick={() => setShowPassword(true)} />
                                                )}
                                                </span> -->
                                            </div>
                                            <ErrorMessage name='password' component="span" class='absolute top-[101%] left-0  text-red-500 text-[11px]' />

                                        </div>

                                    



                                        <button type="submit" class='w-full h-[40px] bg-[--color-primary] rounded-md text-white' >
                                            Submit
                                        </button>


                                    </Form>
                                

               

                </div>

            </div>
</template>

<style lang="">

</style>