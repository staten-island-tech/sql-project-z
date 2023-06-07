<template>
  <div>
    <h2>Sign Up</h2>
    <form @submit.prevent="signUp">
      <input type="email" v-model="email" placeholder="Email" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useSupabase } from '@/supabase';

export default {
  name: 'SignUp',
  setup() {
    const { auth } = useSupabase();
    const email = ref('');
    const password = ref('');

    const signUp = async () => {
      await auth.signUp({ email: email.value, password: password.value });
    };

    return { email, password, signUp };
  },
};
</script>
