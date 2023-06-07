<template>
  <div>
    <h2>Image Upload</h2>
    <input type="file" @change="handleFileUpload" accept="image/*">
    <button @click="uploadImage" :disabled="!selectedImage">Upload Image</button>
    <div v-if="imageUrl">
      <h3>Uploaded Image:</h3>
      <img :src="imageUrl" alt="Uploaded Image">
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useSupabase } from '@/supabase';

export default {
  name: 'ImageUpload',
  setup() {
    const { storage } = useSupabase();
    const selectedImage = ref(null);
    const imageUrl = ref(null);

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      selectedImage.value = file;
    };

    const uploadImage = async () => {
      if (selectedImage.value) {
        const filePath = `uploads/${selectedImage.value.name}`;
        const { error } = await storage.upload(filePath, selectedImage.value);
        if (error) {
          console.error('Error uploading image:', error.message);
        } else {
          const publicURL = await storage.getPublicUrl(filePath);
          imageUrl.value = publicURL;
        }
      }
    };

    return { selectedImage, imageUrl, handleFileUpload, uploadImage };
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 10px;
}

img {
  max-width: 100%;
  height: auto;
}
</style>