<template>
  <body class="bg-gray-800 h-screen">
    <div class="text-white grid justify-center pt-10 mb-10 font-bold">
      <router-link to="/">VueMovies</router-link>
      
    </div>
    <router-view />
  </body>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>


<style scoped></style>
