<template>
  <header>
    <router-link class="text-white grid justify-center pt-10  font-bold" to="/">
      <h1><span class="text-yellow-400 font-medium">Vue</span>Movies</h1>
    </router-link>
    <router-link class="text-white grid justify-center  font-bold" to="/about">
      <h1><span class="text-yellow-400 font-medium">About</span></h1>
    </router-link>
  </header>
  <main class="h-full w-full">
    <router-view />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>


<style>
* {
  margin: 0;
  padding: 0;
  /* background-color: #42B883; */
}

body {
  background-color: #35495E;
}
</style>
