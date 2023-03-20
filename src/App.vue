<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <router-link class="text-white items-center  font-bold" to="/">
        <h1><span class="text-yellow-400 font-medium">Vue</span>Movies</h1>
      </router-link>
      <MobileButtonVue @click = "menuToggle = true"/>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <router-link class="text-white items-center  font-bold" to="/">
            <h1><span class="text-yellow-400 font-medium hover:text-white">Home</span></h1>
          </router-link>
          <router-link class="text-white font-bold" to="/about">
            <h1><span class="text-yellow-400 font-medium hover:text-white">About</span></h1>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
  
  <MenuMobile v-show="menuToggle" @click="menuToggle = false" />

  <main class="h-full w-full">
    <router-view />
  </main>
</template>

<script setup>

import { RouterView } from 'vue-router';
import { ref } from 'vue';
import MenuMobile from './components/MenuMobile.vue';
import MobileButtonVue from './components/MobileButton.vue';


const menuToggle = ref(false);


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