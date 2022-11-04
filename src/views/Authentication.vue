<template>
    <div class="flex items-center justify-center h-screen px-6 bg-gray-200">
      <div class="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
        <div class="flex items-center justify-center">
          
          <span class="text-2xl font-semibold text-gray-700 text-center">Authentication</span>
        </div>
  
        <form class="mt-4" @submit.prevent="login">
          <label class="block">
            <input
              type="text"
              class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
              v-model="authen"
            />
          </label>
  
          <div class="mt-6">
            <button
              type="submit"
              class="w-full px-4 py-2 text-sm text-center text-white bg-indigo-600 rounded-md focus:outline-none hover:bg-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

  export default defineComponent ({
  setup() {
    const router = useRouter();
    const authen = ref("123");

    function login() {
      router.push("/dashboard");
    }

    return {
        login,
        authen,
    };
  },
  });
</script>
  