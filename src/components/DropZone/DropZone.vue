<script setup>
import { ref, watch } from "vue";
import { useDropzone } from "vue3-dropzone";

// Props to accept files from parent
const props = defineProps({
  files: {
    type: Array,
    default: () => [],
  },
});

// Emit event to notify parent of updates
const emit = defineEmits(["update-files"]);

const supportedExtensions = ["jpg", "jpeg", "png", "gif"];
const errorMessage = ref("");

const onDrop = (acceptedFiles, rejectedReasons) => {
  errorMessage.value = "";

  // Filter out unsupported files
  const validFiles = acceptedFiles.filter((file) => {
    const fileExtension = file.name.split(".").pop().toLowerCase();
    return supportedExtensions.includes(fileExtension);
  });

  if (validFiles.length < acceptedFiles.length) {
    errorMessage.value = "Some files were not supported and skipped.";
  }

  // Emit the updated file list to the parent
  emit("update-files", [...props.files, ...validFiles]);
};

const { getInputProps, getRootProps, isDragActive } = useDropzone({ onDrop });
</script>

<template>
  <div class="w-full border rounded h-[150px] flex justify-center items-center flex-col bg-gray-50">
    <div v-bind="getRootProps()" class="flex flex-col justify-center items-center w-full h-full p-2">
      <input v-bind="getInputProps()" />
      <p v-if="isDragActive">Drop the files here ...</p>
      <p v-else>Drag 'n' drop some files here, or click to select files</p>
      <p>browse</p>
    </div>

    <!-- <div v-if="props.files.length > 0" class="mt-4">
      <h4>Preview:</h4>
      <div class="flex gap-2">
        <img
          v-for="(file, index) in props.files"
          :key="index"
          :src="URL.createObjectURL(file)"
          alt="Uploaded preview"
          class="h-[50px] w-auto border"
        />
      </div>
    </div> -->

    <div v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</div>
  </div>
</template>

<style>
/* Add custom styles if needed */
</style>
