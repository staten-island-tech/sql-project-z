<template>
    <div>
      <h2>Browse Images</h2>
      <ul>
        <li v-for="(image, index) in images" :key="index">
          <img :src="image.url" alt="Uploaded Image">
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useSupabase } from '@/supabase';
  
  export default {
    name: 'ImageViewer',
    setup() {
      const { storage } = useSupabase();
      const images = ref([]);
  
      const getImages = async () => {
        const { data } = await storage.from('images').list();
  
        if (data) {
          images.value = data.map((item) => ({
            url: item.publicURL,
          }));
        }
      };
  
      onMounted(getImages);
  
      return { images };
    },
  };
  </script>