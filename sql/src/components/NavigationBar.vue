<template>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/signin">Sign In</router-link>
      <router-link to="/images">Browse</router-link>
      <button v-if="authenticated" @click="signOut">Sign Out</button>
    </nav>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useSupabase } from '@/supabase';
  
  export default {
    name: 'NavigationBar',
    setup() {
      const { auth } = useSupabase();
      const authenticated = ref(false);
  
      auth.onAuthStateChange((_, session) => {
        authenticated.value = session !== null;
      });
  
      const signOut = async () => {
        await auth.signOut();
      };
  
      return { authenticated, signOut };
    },
  };
  </script>