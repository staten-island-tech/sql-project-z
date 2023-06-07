<template>
  <div>
    <h2>Sign In</h2>
    <form @submit.prevent="signIn">
      <input type="email" v-model="email" placeholder="Email" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <button type="submit">Sign In</button>
    </form>
    <p>Don't have an account yet? <router-link to="/signup">Sign Up</router-link></p>
  </div>
</template>

  
  <script>
  import { ref } from 'vue';
  import { useSupabase } from '@/supabase';
  
  export default {
    name: 'SignIn',
    setup() {
      const { auth } = useSupabase();
      const email = ref('');
      const password = ref('');
  
      const signIn = async () => {
        await auth.signIn({ email: email.value, password: password.value });
      };
  
      return { email, password, signIn };
    },
  };
  </script>
  