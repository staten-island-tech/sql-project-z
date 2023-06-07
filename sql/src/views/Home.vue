<template>
    <div>
      <h2>Welcome to ImageInventory!</h2>
      <p>Sign up or sign in to start uploading and viewing images.</p>
      <button @click="navigateToUpload">Go to Image Upload</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    methods: {
      navigateToUpload() {
        this.$router.push('/upload');
      },
    },
  };
  </script>
  