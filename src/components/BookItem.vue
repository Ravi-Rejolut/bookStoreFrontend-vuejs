<script setup>
import { defineProps } from 'vue';

defineProps({
    book:Object,

})

</script>
<template lang="">
    <div class="w-full rounded p-2 bg-blue-100">
        <pre>

        {{JSON.stringify(book,null,2)}}
        </pre>
    </div>
</template>

<style lang="">
    
</style>